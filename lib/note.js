"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Note = undefined;

var _scientificNotation = require("scientific-notation");

var _scientificNotation2 = _interopRequireDefault(_scientificNotation);

var _helmholtz = require("helmholtz");

var _helmholtz2 = _interopRequireDefault(_helmholtz);

var _pitchFq = require("pitch-fq");

var _pitchFq2 = _interopRequireDefault(_pitchFq);

var _knowledge = require("./knowledge");

var _vector = require("./vector");

var _interval2 = require("./interval");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mod_Note = Note;


function pad(str, ch, len) {
  for (; len > 0; len--) {
    str += ch;
  }

  return str;
}

function Note(coord, duration) {
  if (!(this instanceof Note)) return new Note(coord, duration);
  duration = duration || {};

  this.duration = { value: duration.value || 4, dots: duration.dots || 0 };
  this.coord = coord;
}

Note.prototype = {
  octave: function octave() {
    return this.coord[0] + _knowledge.knowledgejs.A4[0] - _knowledge.knowledgejs.notes[this.name()][0] + this.accidentalValue() * 4;
  },

  name: function name() {
    return _knowledge.knowledgejs.fifths[this.coord[1] + _knowledge.knowledgejs.A4[1] - this.accidentalValue() * 7 + 1];
  },

  accidentalValue: function accidentalValue() {
    return Math.round((this.coord[1] + _knowledge.knowledgejs.A4[1] - 2) / 7);
  },

  accidental: function accidental() {
    return _knowledge.knowledgejs.accidentals[this.accidentalValue() + 2];
  },

  /**
   * Returns the key number of the note
   */
  key: function key(white) {
    if (white) return this.coord[0] * 7 + this.coord[1] * 4 + 29;else return this.coord[0] * 12 + this.coord[1] * 7 + 49;
  },

  /**
  * Returns a number ranging from 0-127 representing a MIDI note value
  */
  midi: function midi() {
    return this.key() + 20;
  },

  /**
   * Calculates and returns the frequency of the note.
   * Optional concert pitch (def. 440)
   */
  fq: function fq(concertPitch) {
    return (0, _pitchFq2.default)(this.coord, concertPitch);
  },

  /**
   * Returns the pitch class index (chroma) of the note
   */
  chroma: function chroma() {
    var value = (_vector.vectorjs.sum(_vector.vectorjs.mul(this.coord, [12, 7])) - 3) % 12;

    return value < 0 ? value + 12 : value;
  },

  interval: function interval(_interval) {
    if (typeof _interval === 'string') _interval = _interval2.Interval.toCoord(_interval);

    if (_interval instanceof _interval2.Interval) return new Note(_vector.vectorjs.add(this.coord, _interval.coord));else if (_interval instanceof Note) return new _interval2.Interval(_vector.vectorjs.sub(_interval.coord, this.coord));
  },

  transpose: function transpose(interval) {
    this.coord = _vector.vectorjs.add(this.coord, interval.coord);
    return this;
  },

  /**
   * Returns the Helmholtz notation form of the note (fx C,, d' F# g#'')
   */
  helmholtz: function helmholtz() {
    var octave = this.octave();
    var name = this.name();
    name = octave < 3 ? name.toUpperCase() : name.toLowerCase();
    var padchar = octave < 3 ? ',' : '\'';
    var padcount = octave < 2 ? 2 - octave : octave - 3;

    return pad(name + this.accidental(), padchar, padcount);
  },

  /**
   * Returns the scientific notation form of the note (fx E4, Bb3, C#7 etc.)
   */
  scientific: function scientific() {
    return this.name().toUpperCase() + this.accidental() + this.octave();
  },

  /**
   * Returns notes that are enharmonic with this note.
   */
  enharmonics: function enharmonics(oneaccidental) {
    var key = this.key(),
        limit = oneaccidental ? 2 : 3;

    return ['m3', 'm2', 'm-2', 'm-3'].map(this.interval.bind(this)).filter(function (note) {
      var acc = note.accidentalValue();
      var diff = key - (note.key() - acc);

      if (diff < limit && diff > -limit) {
        note.coord = _vector.vectorjs.add(note.coord, _vector.vectorjs.mul(_knowledge.knowledgejs.sharp, diff - acc));
        return true;
      }
    });
  },

  solfege: function solfege(scale, showOctaves) {
    var interval = scale.tonic.interval(this),
        solfege,
        stroke,
        count;
    if (interval.direction() === 'down') interval = interval.invert();

    if (showOctaves) {
      count = (this.key(true) - scale.tonic.key(true)) / 7;
      count = count >= 0 ? Math.floor(count) : -Math.ceil(-count);
      stroke = count >= 0 ? '\'' : ',';
    }

    solfege = _knowledge.knowledgejs.intervalSolfege[interval.simple(true).toString()];
    return showOctaves ? pad(solfege, stroke, Math.abs(count)) : solfege;
  },

  scaleDegree: function scaleDegree(scale) {
    var inter = scale.tonic.interval(this);

    // If the direction is down, or we're dealing with an octave - invert it
    if (inter.direction() === 'down' || inter.coord[1] === 0 && inter.coord[0] !== 0) {
      inter = inter.invert();
    }

    inter = inter.simple(true).coord;

    return scale.scale.reduce(function (index, current, i) {
      var coord = _interval2.Interval.toCoord(current).coord;
      return coord[0] === inter[0] && coord[1] === inter[1] ? i + 1 : index;
    }, 0);
  },

  /**
   * Returns the name of the duration value,
   * such as 'whole', 'quarter', 'sixteenth' etc.
   */
  durationName: function durationName() {
    return _knowledge.knowledgejs.durations[this.duration.value];
  },

  /**
   * Returns the duration of the note (including dots)
   * in seconds. The first argument is the tempo in beats
   * per minute, the second is the beat unit (i.e. the
   * lower numeral in a time signature).
   */
  durationInSeconds: function durationInSeconds(bpm, beatUnit) {
    var secs = 60 / bpm / (this.duration.value / 4) / (beatUnit / 4);
    return secs * 2 - secs / Math.pow(2, this.duration.dots);
  },

  /**
   * Returns the name of the note, with an optional display of octave number
   */
  toString: function toString(dont) {
    return this.name() + this.accidental() + (dont ? '' : this.octave());
  }
};

Note.fromString = function (name, dur) {
  var coord = (0, _scientificNotation2.default)(name);
  if (!coord) coord = (0, _helmholtz2.default)(name);
  return new Note(coord, dur);
};

Note.fromKey = function (key) {
  var octave = Math.floor((key - 4) / 12);
  var distance = key - octave * 12 - 4;
  var name = _knowledge.knowledgejs.fifths[(2 * Math.round(distance / 2) + 1) % 7];
  var note = _vector.vectorjs.add(_vector.vectorjs.sub(_knowledge.knowledgejs.notes[name], _knowledge.knowledgejs.A4), [octave + 1, 0]);
  var diff = key - 49 - _vector.vectorjs.sum(_vector.vectorjs.mul(note, [12, 7]));

  return new Note(diff ? _vector.vectorjs.add(note, _vector.vectorjs.mul(_knowledge.knowledgejs.sharp, diff)) : note);
};

Note.fromFrequency = function (fq, concertPitch) {
  var key, cents, originalFq;
  concertPitch = concertPitch || 440;

  key = 49 + 12 * ((Math.log(fq) - Math.log(concertPitch)) / Math.log(2));
  key = Math.round(key);
  originalFq = concertPitch * Math.pow(2, (key - 49) / 12);
  cents = 1200 * (Math.log(fq / originalFq) / Math.log(2));

  return { note: Note.fromKey(key), cents: cents };
};

Note.fromMIDI = function (note) {
  return Note.fromKey(note - 20);
};

exports.Note = mod_Note;