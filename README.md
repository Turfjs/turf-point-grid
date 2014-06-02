turf-grid
=========
[![Build Status](https://travis-ci.org/Turfjs/turf-grid.svg?branch=master)](https://travis-ci.org/Turfjs/turf-grid)

Takes a bounding box and a cell depth and outputs a feature collection of points in a grid.

```js
var grid = require('turf-grid')
var depth = 15

var gridded = grid([0,0,10,10], depth)
  
console.log(gridded) // 15x15 grid of points in a FeatureCollection
```
