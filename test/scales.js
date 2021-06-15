import ext_vows_vows from "vows";
import ext_assert_assert from "assert";
import { note as indexjs_note } from "../";

ext_vows_vows.describe('Scales').addBatch({
  'Ab2': {
    topic: function() {
      return indexjs_note('Ab2');
    },

    'Blues': function(note) {
      ext_assert_assert.deepEqual(indexjs_note('g#').scale('blues').simple(),
          ['g#', 'b', 'c#', 'd', 'd#', 'f#']);
    },

    'Ionian/Major': function(note) {
      ext_assert_assert.deepEqual(note.scale('ionian').simple(),
          ['ab', 'bb', 'c', 'db', 'eb', 'f', 'g']);
    },

    'Dorian': function(note) {
      ext_assert_assert.deepEqual(note.scale('dorian').simple(),
          ['ab', 'bb', 'cb', 'db', 'eb', 'f', 'gb']);
    },

    'Phrygian': function(note) {
      ext_assert_assert.deepEqual(note.scale('phrygian').simple(),
          ["ab", "bbb", "cb", "db", "eb", "fb", "gb"]);
    },

    'Lydian': function(note) {
      ext_assert_assert.deepEqual(note.scale('lydian').simple(),
          ["ab", "bb", "c", "d", "eb", "f", "g"]);
    },

    'Mixolydian': function(note) {
      ext_assert_assert.deepEqual(note.scale('mixolydian').simple(),
          ["ab", "bb", "c", "db", "eb", "f", "gb"]);
    },

    'Aeolian/Minor': function(note) {
      ext_assert_assert.deepEqual(note.scale('aeolian').simple(),
          ["ab", "bb", "cb", "db", "eb", "fb", "gb"]);
    },

    'Locrian': function(note) {
      ext_assert_assert.deepEqual(note.scale('locrian').simple(),
          ["ab", "bbb", "cb", "db", "ebb", "fb", "gb"]);
    },

    'Major Pentatonic': function(note) {
      ext_assert_assert.deepEqual(note.scale('majorpentatonic').simple(),
          ["ab", "bb", "c", "eb", "f"]);
    },

    'Minor Pentatonic': function(note) {
      ext_assert_assert.deepEqual(note.scale('minorpentatonic').simple(),
          ["ab", "cb", "db", "eb", "gb"]);
    },

    'Chromatic': function(note) {
      ext_assert_assert.deepEqual(note.scale('chromatic').simple(),
          ["ab", "bbb", "bb", "cb", "c", "db",
           "d", "eb", "fb", "f", "gb", "g"]);
    },

    'Whole Tone': function(note) {
      ext_assert_assert.deepEqual(indexjs_note('c').scale('wholetone').simple(),
        ["c", "d", "e", "f#", "g#", "a#"]);
    }
  }
}).export(module);
