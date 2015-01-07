var point = require('turf-point');

/**
 * Takes a bounding box and a cell depth and outputs points in a grid.
 *
 * @module turf/grid
 * @param {number[]} extent extent in [xmin, ymin, xmax, ymax] order
 * @param {number} depth how many cells to output
 * @return {FeatureCollection} output filled with features with {@link Point}
 * geometries
 * @example
 * turf.grid([0,0,10,10], 10)
 */
module.exports = function(extents, depth) {
  var xmin = extents[0];
  var ymin = extents[1];
  var xmax = extents[2];
  var ymax = extents[3];
  var interval = (xmax - xmin) / depth;
  var coords = [];
  var fc = {
    type: 'FeatureCollection',
    features: []
  };

  for (var x=0; x<=depth; x++){
    for (var y=0;y<=depth; y++){
      fc.features.push(point((x * interval) + xmin, (y * interval) + ymin));
    }
  }
  return fc;
}
