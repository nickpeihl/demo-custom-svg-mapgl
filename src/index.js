import dragDrop from "drag-drop";
import pointGrid from "@turf/point-grid";
import { propEach } from "@turf/meta";
import svgToImage from "svg-to-image";
import getContext from "get-canvas-context";

const map = new mapboxgl.Map({
  container: "map",
  style: "https://tiles.maps.elastic.co/styles/dark-matter/style.json",
  zoom: 2,
  center: [-180, 0]
});

const INF = 1e20;

const context = getContext("2d", {
  width: 200,
  height: 200,
  alpha: true
});

function makeRGBAImageData(alphaChannel, width, height) {
  const imageData = context.createImageData(width, height);
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  for (let i = 0; i < alphaChannel.length; i++) {
    imageData.data[4 * i + 0] = 0;
    imageData.data[4 * i + 1] = 0;
    imageData.data[4 * i + 2] = 0;
    imageData.data[4 * i + 3] = alphaChannel[i];;
  }
  const data = new Uint8Array(imageData.data.buffer);
  return {
    width,
    height,
    data
  };
}

function establishDragDrop() {
  dragDrop("#dropTarget", (files) => {
    for (const file of files) {
      if (file.type !== "image/svg+xml") {
        throw new Error(`${file.name} is not an SVG`);
      }
      file.text().then((svg) => {
        svgToImage(svg, (err, image) => {
          if (err) throw err;
          const { data, width, height } = draw(image, 64, 64);
          const img = makeRGBAImageData(data, width, height);
          map.addImage("my-custom-svg", img, { sdf: true });
          addIconLayer();
        });
      });
    }
  });
}

const points = pointGrid([-205, -1, -136, 47], 200, {
  units: "kilometers",
});
propEach(points, (cur, i) => {
  cur.icon = "my-custom-svg";
  cur.color = "#" + Math.random().toString(16).substr(-6);
  cur.halo_color = "#" + Math.random().toString(16).substr(-6);
  cur.size = 1;
});

function draw(image, w, h) {
  const buffer = 3;
  const cutoff = 0.25;
  const radius = 8;
  const size = Math.max(w, h) + buffer * 4;
  const ctx = getContext("2d", {
    width: size,
    height: size,
    alpha: true,
  });
  const gridOuter = new Float64Array(size * size);
  const gridInner = new Float64Array(size * size);
  const f = new Float64Array(size);
  const z = new Float64Array(size + 1);
  const v = new Int16Array(size);

  const glyphWidth = size - buffer;
  const glyphHeight = size - buffer;

  const width = glyphWidth + 2 * buffer;
  const height = glyphHeight + 2 * buffer;

  const len = width * height;
  const data = new Uint8ClampedArray(len);
  const glyph = { data, width, height, glyphWidth, glyphHeight };

  ctx.clearRect(buffer, buffer, glyphWidth, glyphHeight);
  ctx.drawImage(image, buffer, buffer, glyphWidth, glyphHeight);
  const imgData = ctx.getImageData(buffer, buffer, glyphWidth, glyphHeight);

  gridOuter.fill(INF, 0, len);
  gridInner.fill(0, 0, len);

  for (let y = 0; y < glyphHeight; y++) {
    for (let x = 0; x < glyphWidth; x++) {
      const a = imgData.data[4 * (y * glyphWidth + x) + 3] / 255; // alpha value
      if (a === 0) {
        continue;
      }

      const j = (y + buffer) * width + x + buffer;

      if (a === 1) {
        // fully drawn pixels
        gridOuter[j] = 0;
        gridInner[j] = INF;
      } else {
        // aliased pixels
        const d = 0.5 - a;
        gridOuter[j] = d > 0 ? d * d : 0;
        gridInner[j] = d < 0 ? d * d : 0;
      }
    }
  }

  edt(gridOuter, width, height, f, v, z);
  edt(gridInner, width, height, f, v, z);

  for (let i = 0; i < len; i++) {
    const d = Math.sqrt(gridOuter[i]) - Math.sqrt(gridInner[i]);
    data[i] = Math.round(255 - 255 * (d / radius + cutoff));
  }

  return glyph;
}

// 2D Euclidean squared distance transform by Felzenszwalb & Huttenlocher https://cs.brown.edu/~pff/papers/dt-final.pdf
function edt(data, width, height, f, v, z) {
  for (let x = 0; x < width; x++) edt1d(data, x, width, height, f, v, z);
  for (let y = 0; y < height; y++) edt1d(data, y * width, 1, width, f, v, z);
}

// 1D squared distance transform
function edt1d(grid, offset, stride, length, f, v, z) {
  v[0] = 0;
  z[0] = -INF;
  z[1] = INF;
  f[0] = grid[offset];

  for (let q = 1, k = 0, s = 0; q < length; q++) {
    f[q] = grid[offset + q * stride];
    const q2 = q * q;
    do {
      const r = v[k];
      s = (f[q] - f[r] + q2 - r * r) / (q - r) / 2;
    } while (s <= z[k] && --k > -1);

    k++;
    v[k] = q;
    z[k] = s;
    z[k + 1] = INF;
  }

  for (let q = 0, k = 0; q < length; q++) {
    while (z[k + 1] < q) k++;
    const r = v[k];
    const qr = q - r;
    grid[offset + q * stride] = f[r] + qr * qr;
  }
}

function addIconLayer () {
  map.addLayer({
    id: "points",
    type: "symbol",
    source: {
      type: "geojson",
      data: points,
    },
    layout: {
      "icon-image": ["get", "icon"],
      "icon-size": ["get", "size"],
      "icon-allow-overlap": true,
    },
    paint: {
      "icon-color": ["get", "color"],
      "icon-halo-width": ["get", "size"],
      "icon-halo-color": ["get", "halo_color"],
    },
  });
}

map.on("load", function () {
  establishDragDrop();

  var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  map.on("mouseenter", "points", (e) => {
    map.getCanvas().style.cursor = "pointer";
    var coords = e.features[0].geometry.coordinates.slice();
    var iconName = e.features[0].properties.icon;
    popup.setLngLat(coords).setHTML(iconName).addTo(map);
  });

  map.on("mouseleave", "points", (e) => {
    map.getCanvas().style.cursor = "";
    popup.remove();
  });
});
