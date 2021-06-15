"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interval = undefined;

var _knowledge = require("./knowledge");

var _vector = require("./vector");

var _intervalCoords = require("interval-coords");

var _intervalCoords2 = _interopRequireDefault(_intervalCoords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mod_Interval = Interval;


function Interval(coord) {
  if (!(this instanceof Interval)) return new Interval(coord);
  this.coord = coord;
}

Interval.prototype = {
  name: function name() {
    return _knowledge.knowledgejs.intervalsIndex[this.number() - 1];
  },

  semitones: function semitones() {
    return _vector.vectorjs.sum(_vector.vectorjs.mul(this.coord, [12, 7]));
  },

  number: function number() {
    return Math.abs(this.value());
  },

  value: function value() {
    var without = _vector.vectorjs.sub(this.coord, _vector.vectorjs.mul(_knowledge.knowledgejs.sharp, Math.floor((this.coord[1] - 2) / 7) + 1)),
        i,
        val;

    i = _knowledge.knowledgejs.intervalFromFifth[without[1] + 5];
    val = _knowledge.knowledgejs.stepNumber[i] + (without[0] - _knowledge.knowledgejs.intervals[i][0]) * 7;

    return val > 0 ? val : val - 2;
  },

  type: function type() {
    return _knowledge.knowledgejs.intervals[this.base()][0] <= 1 ? 'perfect' : 'minor';
  },

  base: function base() {
    var fifth = _vector.vectorjs.sub(this.coord, _vector.vectorjs.mul(_knowledge.knowledgejs.sharp, this.qualityValue()))[1],
        name;
    fifth = this.value() > 0 ? fifth + 5 : -(fifth - 5) % 7;
    fifth = fifth < 0 ? _knowledge.knowledgejs.intervalFromFifth.length + fifth : fifth;

    name = _knowledge.knowledgejs.intervalFromFifth[fifth];
    if (name === 'unison' && this.number() >= 8) name = 'octave';

    return name;
  },

  direction: function direction(dir) {
    if (dir) {
      var is = this.value() >= 1 ? 'up' : 'down';
      if (is !== dir) this.coord = _vector.vectorjs.mul(this.coord, -1);

      return this;
    } else return this.value() >= 1 ? 'up' : 'down';
  },

  simple: function simple(ignore) {
    // Get the (upwards) base interval (with quality)
    var simple = _knowledge.knowledgejs.intervals[this.base()];
    simple = _vector.vectorjs.add(simple, _vector.vectorjs.mul(_knowledge.knowledgejs.sharp, this.qualityValue()));

    // Turn it around if necessary
    if (!ignore) simple = this.direction() === 'down' ? _vector.vectorjs.mul(simple, -1) : simple;

    return new Interval(simple);
  },

  isCompound: function isCompound() {
    return this.number() > 8;
  },

  octaves: function octaves() {
    var without, octaves;

    if (this.direction() === 'up') {
      without = _vector.vectorjs.sub(this.coord, _vector.vectorjs.mul(_knowledge.knowledgejs.sharp, this.qualityValue()));
      octaves = without[0] - _knowledge.knowledgejs.intervals[this.base()][0];
    } else {
      without = _vector.vectorjs.sub(this.coord, _vector.vectorjs.mul(_knowledge.knowledgejs.sharp, -this.qualityValue()));
      octaves = -(without[0] + _knowledge.knowledgejs.intervals[this.base()][0]);
    }

    return octaves;
  },

  invert: function invert() {
    var i = this.base();
    var qual = this.qualityValue();
    var acc = this.type() === 'minor' ? -(qual - 1) : -qual;
    var coord = _knowledge.knowledgejs.intervals[_knowledge.knowledgejs.intervalsIndex[9 - _knowledge.knowledgejs.stepNumber[i] - 1]];
    coord = _vector.vectorjs.add(coord, _vector.vectorjs.mul(_knowledge.knowledgejs.sharp, acc));

    return new Interval(coord);
  },

  quality: function quality(lng) {
    var quality = _knowledge.knowledgejs.alterations[this.type()][this.qualityValue() + 2];

    return lng ? _knowledge.knowledgejs.qualityLong[quality] : quality;
  },

  qualityValue: function qualityValue() {
    if (this.direction() === 'down') return Math.floor((-this.coord[1] - 2) / 7) + 1;else return Math.floor((this.coord[1] - 2) / 7) + 1;
  },

  equal: function equal(interval) {
    return this.coord[0] === interval.coord[0] && this.coord[1] === interval.coord[1];
  },

  greater: function greater(interval) {
    var semi = this.semitones();
    var isemi = interval.semitones();

    // If equal in absolute size, measure which interval is bigger
    // For example P4 is bigger than A3
    return semi === isemi ? this.number() > interval.number() : semi > isemi;
  },

  smaller: function smaller(interval) {
    return !this.equal(interval) && !this.greater(interval);
  },

  add: function add(interval) {
    return new Interval(_vector.vectorjs.add(this.coord, interval.coord));
  },

  toString: function toString(ignore) {
    // If given true, return the positive value
    var number = ignore ? this.number() : this.value();

    return this.quality() + number;
  }
};

Interval.toCoord = function (simple) {
  var coord = (0, _intervalCoords2.default)(simple);
  if (!coord) throw new Error('Invalid simple format interval');

  return new Interval(coord);
};

Interval.from = function (from, to) {
  return from.interval(to);
};

Interval.between = function (from, to) {
  return new Interval(_vector.vectorjs.sub(to.coord, from.coord));
};

Interval.invert = function (sInterval) {
  return Interval.toCoord(sInterval).invert().toString();
};

exports.Interval = mod_Interval;