"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interval = exports.Scale = exports.Chord = exports.Note = exports.scale = exports.interval = exports.chord = exports.note = undefined;

var _note = require("./lib/note");

var _interval = require("./lib/interval");

var _chord = require("./lib/chord");

var _scale = require("./lib/scale");

var _sugar = require("./lib/sugar");

// never thought I would write this, but: Legacy support
function intervalConstructor(from, to) {
  // Construct a Interval object from string representation
  if (typeof from === 'string') return _interval.Interval.toCoord(from);

  if (typeof to === 'string' && from instanceof _note.Note) return _interval.Interval.from(from, _interval.Interval.toCoord(to));

  if (to instanceof _interval.Interval && from instanceof _note.Note) return _interval.Interval.from(from, to);

  if (to instanceof _note.Note && from instanceof _note.Note) return _interval.Interval.between(from, to);

  throw new Error('Invalid parameters');
}

intervalConstructor.toCoord = _interval.Interval.toCoord;
intervalConstructor.from = _interval.Interval.from;
intervalConstructor.between = _interval.Interval.between;
intervalConstructor.invert = _interval.Interval.invert;

function noteConstructor(name, duration) {
  if (typeof name === 'string') return _note.Note.fromString(name, duration);else return new _note.Note(name, duration);
}

noteConstructor.fromString = _note.Note.fromString;
noteConstructor.fromKey = _note.Note.fromKey;
noteConstructor.fromFrequency = _note.Note.fromFrequency;
noteConstructor.fromMIDI = _note.Note.fromMIDI;

function chordConstructor(name, symbol) {
  if (typeof name === 'string') {
    var root, octave;
    root = name.match(/^([a-h])(x|#|bb|b?)/i);
    if (root && root[0]) {
      octave = typeof symbol === 'number' ? symbol.toString(10) : '4';
      return new _chord.Chord(_note.Note.fromString(root[0].toLowerCase() + octave), name.substr(root[0].length));
    }
  } else if (name instanceof _note.Note) return new _chord.Chord(name, symbol);

  throw new Error('Invalid Chord. Couldn\'t find note name');
}

function scaleConstructor(tonic, scale) {
  tonic = tonic instanceof _note.Note ? tonic : teoria.note(tonic);
  return new _scale.Scale(tonic, scale);
}

var teoria = {
  note: noteConstructor,

  chord: chordConstructor,

  interval: intervalConstructor,

  scale: scaleConstructor,

  Note: _note.Note,
  Chord: _chord.Chord,
  Scale: _scale.Scale,
  Interval: _interval.Interval
};

var scale = scaleConstructor;
var interval = intervalConstructor;
var chord = chordConstructor;
var note = noteConstructor;

(0, _sugar.sugar)(teoria);
var index_Note = _note.Note;
var index_Chord = _chord.Chord;
var index_Scale = _scale.Scale;
var index_Interval = _interval.Interval;
exports.note = note;
exports.chord = chord;
exports.interval = interval;
exports.scale = scale;
exports.Note = index_Note;
exports.Chord = index_Chord;
exports.Scale = index_Scale;
exports.Interval = index_Interval;
