import ext_vows_vows from "vows";
import ext_assert_assert from "assert";
import { teoria as _teoria } from "../";

ext_vows_vows.describe('Solfege').addBatch({
  'C in C minor': function() {
    var note = _teoria.note('c');
    ext_assert_assert.equal(note.solfege(_teoria.scale(note, 'minor')), 'do');
  },

  'A in d major': function() {
    var note = _teoria.note('a');
    var tonic = _teoria.note('d');
    ext_assert_assert.equal(note.solfege(_teoria.scale(tonic, 'major')), 'so');
  },

  'F# in B major': function() {
    var note = _teoria.note('f#');
    var tonic = _teoria.note('B');
    ext_assert_assert.equal(note.solfege(_teoria.scale(tonic, 'major')), 'so');
  },

  'C4 in C4 minor': function() {
    var note = _teoria.note('c4');
    var scale = _teoria.scale(note, 'minor');
    ext_assert_assert.equal(note.solfege(scale, true), 'do');
  },

  'A3 in D4 major': function() {
    var note = _teoria.note('a3');
    var scale = _teoria.scale('d4', 'major');
    ext_assert_assert.equal(note.solfege(scale, true), 'so,');
  },

  'F#6 in B5 major': function() {
    var note = _teoria.note('f#6');
    var scale = _teoria.scale('b5', 'major');
    ext_assert_assert.equal(note.solfege(scale, true), 'so');
  },

  'F2 in E6 phrygian': function() {
    var note = _teoria.note('f2');
    var scale = _teoria.scale('e6', 'phrygian');
    ext_assert_assert.equal(note.solfege(scale, true), 'ra,,,,');
  },

  'Eb10 in E8 dorian': function() {
    var note = _teoria.note('eb10');
    var scale = _teoria.scale('e8', 'dorian');
    ext_assert_assert.equal(note.solfege(scale, true), 'de\'\'');
  },

  'A#6 in Bb4 locrian': function() {
    var note = _teoria.note('A#6');
    var scale = _teoria.scale('Bb4', 'locrian');
    ext_assert_assert.equal(note.solfege(scale, true), 'tai\'');
  },

  'E2 in C3 major': function() {
    var note = _teoria.note('e2');
    var scale = _teoria.scale('c3', 'major');
    ext_assert_assert.equal(note.solfege(scale, true), 'mi,');
  }
}).export(module);
