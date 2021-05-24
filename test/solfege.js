"use strict";

var _vows = require("vows");

var _vows2 = _interopRequireDefault(_vows);

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vows2.default.describe('Solfege').addBatch({
  'C in C minor': function CInCMinor() {
    var note = _.teoria.note('c');
    _assert2.default.equal(note.solfege(_.teoria.scale(note, 'minor')), 'do');
  },

  'A in d major': function AInDMajor() {
    var note = _.teoria.note('a');
    var tonic = _.teoria.note('d');
    _assert2.default.equal(note.solfege(_.teoria.scale(tonic, 'major')), 'so');
  },

  'F# in B major': function FInBMajor() {
    var note = _.teoria.note('f#');
    var tonic = _.teoria.note('B');
    _assert2.default.equal(note.solfege(_.teoria.scale(tonic, 'major')), 'so');
  },

  'C4 in C4 minor': function C4InC4Minor() {
    var note = _.teoria.note('c4');
    var scale = _.teoria.scale(note, 'minor');
    _assert2.default.equal(note.solfege(scale, true), 'do');
  },

  'A3 in D4 major': function A3InD4Major() {
    var note = _.teoria.note('a3');
    var scale = _.teoria.scale('d4', 'major');
    _assert2.default.equal(note.solfege(scale, true), 'so,');
  },

  'F#6 in B5 major': function F6InB5Major() {
    var note = _.teoria.note('f#6');
    var scale = _.teoria.scale('b5', 'major');
    _assert2.default.equal(note.solfege(scale, true), 'so');
  },

  'F2 in E6 phrygian': function F2InE6Phrygian() {
    var note = _.teoria.note('f2');
    var scale = _.teoria.scale('e6', 'phrygian');
    _assert2.default.equal(note.solfege(scale, true), 'ra,,,,');
  },

  'Eb10 in E8 dorian': function Eb10InE8Dorian() {
    var note = _.teoria.note('eb10');
    var scale = _.teoria.scale('e8', 'dorian');
    _assert2.default.equal(note.solfege(scale, true), 'de\'\'');
  },

  'A#6 in Bb4 locrian': function A6InBb4Locrian() {
    var note = _.teoria.note('A#6');
    var scale = _.teoria.scale('Bb4', 'locrian');
    _assert2.default.equal(note.solfege(scale, true), 'tai\'');
  },

  'E2 in C3 major': function E2InC3Major() {
    var note = _.teoria.note('e2');
    var scale = _.teoria.scale('c3', 'major');
    _assert2.default.equal(note.solfege(scale, true), 'mi,');
  }
}).export(module);