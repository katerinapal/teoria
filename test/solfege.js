import ext_vows_vows from "vows";
import ext_assert_assert from "assert";
import { note as indexjs_note, scale as indexjs_scale } from "../";

ext_vows_vows.describe('Solfege').addBatch({
  'C in C minor': function() {
    var note = indexjs_note('c');
    ext_assert_assert.equal(note.solfege(indexjs_scale(note, 'minor')), 'do');
  },

  'A in d major': function() {
    var note = indexjs_note('a');
    var tonic = indexjs_note('d');
    ext_assert_assert.equal(note.solfege(indexjs_scale(tonic, 'major')), 'so');
  },

  'F# in B major': function() {
    var note = indexjs_note('f#');
    var tonic = indexjs_note('B');
    ext_assert_assert.equal(note.solfege(indexjs_scale(tonic, 'major')), 'so');
  },

  'C4 in C4 minor': function() {
    var note = indexjs_note('c4');
    var scale = indexjs_scale(note, 'minor');
    ext_assert_assert.equal(note.solfege(scale, true), 'do');
  },

  'A3 in D4 major': function() {
    var note = indexjs_note('a3');
    var scale = indexjs_scale('d4', 'major');
    ext_assert_assert.equal(note.solfege(scale, true), 'so,');
  },

  'F#6 in B5 major': function() {
    var note = indexjs_note('f#6');
    var scale = indexjs_scale('b5', 'major');
    ext_assert_assert.equal(note.solfege(scale, true), 'so');
  },

  'F2 in E6 phrygian': function() {
    var note = indexjs_note('f2');
    var scale = indexjs_scale('e6', 'phrygian');
    ext_assert_assert.equal(note.solfege(scale, true), 'ra,,,,');
  },

  'Eb10 in E8 dorian': function() {
    var note = indexjs_note('eb10');
    var scale = indexjs_scale('e8', 'dorian');
    ext_assert_assert.equal(note.solfege(scale, true), 'de\'\'');
  },

  'A#6 in Bb4 locrian': function() {
    var note = indexjs_note('A#6');
    var scale = indexjs_scale('Bb4', 'locrian');
    ext_assert_assert.equal(note.solfege(scale, true), 'tai\'');
  },

  'E2 in C3 major': function() {
    var note = indexjs_note('e2');
    var scale = indexjs_scale('c3', 'major');
    ext_assert_assert.equal(note.solfege(scale, true), 'mi,');
  }
}).export(module);
