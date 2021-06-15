"use strict";

var _vows = require("vows");

var _vows2 = _interopRequireDefault(_vows);

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vows2.default.describe('Solfege').addBatch({
  'C in C minor': function CInCMinor() {
    var note = (0, _.note)('c');
    _assert2.default.equal(note.solfege((0, _.scale)(note, 'minor')), 'do');
  },

  'A in d major': function AInDMajor() {
    var note = (0, _.note)('a');
    var tonic = (0, _.note)('d');
    _assert2.default.equal(note.solfege((0, _.scale)(tonic, 'major')), 'so');
  },

  'F# in B major': function FInBMajor() {
    var note = (0, _.note)('f#');
    var tonic = (0, _.note)('B');
    _assert2.default.equal(note.solfege((0, _.scale)(tonic, 'major')), 'so');
  },

  'C4 in C4 minor': function C4InC4Minor() {
    var note = (0, _.note)('c4');
    var scale = (0, _.scale)(note, 'minor');
    _assert2.default.equal(note.solfege(scale, true), 'do');
  },

  'A3 in D4 major': function A3InD4Major() {
    var note = (0, _.note)('a3');
    var scale = (0, _.scale)('d4', 'major');
    _assert2.default.equal(note.solfege(scale, true), 'so,');
  },

  'F#6 in B5 major': function F6InB5Major() {
    var note = (0, _.note)('f#6');
    var scale = (0, _.scale)('b5', 'major');
    _assert2.default.equal(note.solfege(scale, true), 'so');
  },

  'F2 in E6 phrygian': function F2InE6Phrygian() {
    var note = (0, _.note)('f2');
    var scale = (0, _.scale)('e6', 'phrygian');
    _assert2.default.equal(note.solfege(scale, true), 'ra,,,,');
  },

  'Eb10 in E8 dorian': function Eb10InE8Dorian() {
    var note = (0, _.note)('eb10');
    var scale = (0, _.scale)('e8', 'dorian');
    _assert2.default.equal(note.solfege(scale, true), 'de\'\'');
  },

  'A#6 in Bb4 locrian': function A6InBb4Locrian() {
    var note = (0, _.note)('A#6');
    var scale = (0, _.scale)('Bb4', 'locrian');
    _assert2.default.equal(note.solfege(scale, true), 'tai\'');
  },

  'E2 in C3 major': function E2InC3Major() {
    var note = (0, _.note)('e2');
    var scale = (0, _.scale)('c3', 'major');
    _assert2.default.equal(note.solfege(scale, true), 'mi,');
  }
}).export(module);