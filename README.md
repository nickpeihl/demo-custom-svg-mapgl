# Custom SDF Icons in Mapbox-GL 

`yarn && yarn start`

This is a WIP attempt to allow custom SVGs to be rendered as PNGs with signed distance fields in mapbox-gl-js.

## Usage
Drag and drop a SVG (such as one from EUI) to the area below the map. The icons should draw in a grid over the Pacific Ocean with random colors.

## Status

Still needs more testing with different SVG icons. Colors in SVG icons will be dropped as this is intended to be a single channel for client side coloring.


Based on code from [tiny-sdf](https://github.com/mapbox/tiny-sdf)
