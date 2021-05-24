'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vectorjs = mod_vectorjs = {
  add: function add(note, interval) {
    return [note[0] + interval[0], note[1] + interval[1]];
  },

  sub: function sub(note, interval) {
    return [note[0] - interval[0], note[1] - interval[1]];
  },

  mul: function mul(note, interval) {
    if (typeof interval === 'number') return [note[0] * interval, note[1] * interval];else return [note[0] * interval[0], note[1] * interval[1]];
  },

  sum: function sum(coord) {
    return coord[0] + coord[1];
  }
};
var mod_vectorjs;
exports.vectorjs = mod_vectorjs;