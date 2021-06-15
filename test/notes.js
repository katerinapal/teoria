import ext_vows_vows from "vows";
import ext_assert_assert from "assert";
import { note as indexjs_note, interval as indexjs_interval, scale as indexjs_scale } from "../";

ext_vows_vows.describe('TeoriaNote class').addBatch({
  'A4 - a\'': {
    topic: function() {
      return indexjs_note('A4');
    },

    'Octave should be 4': function(note) {
      ext_assert_assert.equal(note.octave(), 4);
    },

    'Note name is lower case': function(note) {
      ext_assert_assert.equal(note.name(), 'a');
    },

    'A4 is the 49th piano key': function(note) {
      ext_assert_assert.equal(note.key(), 49);
    },

    'A4 is expressed a\' in Helmholtz notation': function(note) {
      ext_assert_assert.equal(note.helmholtz(), 'a\'');
    },

    'A4 is expressed A4 in scientific notation': function(note) {
      ext_assert_assert.equal(note.scientific(), 'A4');
    },

    'The frequency of A4 is 440hz': function(note) {
      ext_assert_assert.equal(note.fq(), 440);
    }
  },

  'C#5 - c#\'\'': {
    topic: function() {
      return indexjs_note('c#\'\'');
    },

    'Octave should be 5': function(note) {
      ext_assert_assert.equal(note.octave(), 5);
    },

    'The name attribute of c# is just c': function(note) {
      ext_assert_assert.equal(note.name(), 'c');
    },

    'The accidental.sign attribute is #': function(note) {
      ext_assert_assert.equal(note.accidental(), '#');
    },

    'The accidental.value attribute is 1': function(note) {
      ext_assert_assert.equal(note.accidentalValue(), 1);
    },

    'C#5 is the 53rd piano key': function(note) {
      ext_assert_assert.equal(note.key(), 53);
    },

    'C#5 is c#\'\' in Helmholtz notation': function(note) {
      ext_assert_assert.equal(note.helmholtz(), 'c#\'\'');
    },

    'c#\'\' is C#5 in scientific notation': function(note) {
      ext_assert_assert.equal(note.scientific(), 'C#5');
    },

    'The frequency of C#5 is approximately 554.365': function(note) {
      ext_assert_assert.equal(note.fq(), 554.3652619537442);
    },

    'The interval between C#5 and A4 is a major third': function(note) {
      var a4 = indexjs_note('A4');

      ext_assert_assert.deepEqual(note.interval(a4), indexjs_interval('M-3'));
    },

    'The interval between C#5 and Eb6 is diminished tenth': function(note) {
      var eb6 = indexjs_note('Eb6');

      ext_assert_assert.deepEqual(note.interval(eb6), indexjs_interval('d10'));
    },

    'An diminished fifth away from C#5 is G5': function(note) {
      var g5 = indexjs_note('G5');

      ext_assert_assert.deepEqual(note.interval('d5'), g5);
    },

    'The interval between C#4 and Db4 is a diminished second': function() {
      var cis4 = indexjs_note('c#4');
      var db4 = indexjs_note('db4');

      ext_assert_assert.deepEqual(cis4.interval(db4), indexjs_interval('d2'));
    }
  },

  'Instantiate with coords': {
    '[0, 0] is A4': function() {
      ext_assert_assert.equal(indexjs_note([0, 0]).scientific(), 'A4');
    },

    '[-4, 4] is C#3': function() {
      ext_assert_assert.equal(indexjs_note([-4, 4]).scientific(), 'C#3');
    },

    '[3, -4] is F5': function() {
      ext_assert_assert.equal(indexjs_note([3, -4]).scientific(), 'F5');
    },

    '[4, -7] is Ab4': function() {
      ext_assert_assert.equal(indexjs_note([4, -7]).scientific(), 'Ab4');
    }
  },

  'Instantiate from key': {
    '#49 is A4': function() {
      ext_assert_assert.equal(indexjs_note.fromKey(49).scientific(), 'A4');
    },

    '#20 is E2': function() {
      ext_assert_assert.equal(indexjs_note.fromKey(20).scientific(), 'E2');
    },

    '#57 is F5': function() {
      ext_assert_assert.equal(indexjs_note.fromKey(57).scientific(), 'F5');
    },

    '#72 is G#6': function() {
      ext_assert_assert.equal(indexjs_note.fromKey(72).scientific(), 'G#6');
    }
  },

  'Instantiate from frequency': {
    '391.995Hz is G4': function() {
      ext_assert_assert.equal(indexjs_note.fromFrequency(391.995).note.scientific(), 'G4');
    },

    '220.000Hz is A3': function() {
      ext_assert_assert.equal(indexjs_note.fromFrequency(220.000).note.scientific(), 'A3');
    },

    '155.563Hz is Eb3': function() {
      ext_assert_assert.equal(indexjs_note.fromFrequency(155.563).note.scientific(), 'Eb3');
    },

    '2959.96Hz is F#7': function() {
      ext_assert_assert.equal(indexjs_note.fromFrequency(2959.96).note.scientific(), 'F#7');
    }
  },

  'Instantiate from MIDI': {
    'MIDI#36 is C2': function() {
      ext_assert_assert.equal(indexjs_note.fromMIDI(36).scientific(), 'C2');
    },

    'MIDI#77 is F5': function() {
      ext_assert_assert.equal(indexjs_note.fromMIDI(77).scientific(), 'F5');
    },

    'MIDI#61 is Db4': function() {
      ext_assert_assert.equal(indexjs_note.fromMIDI(61).scientific(), 'Db4');
    },

    'MIDI#80 is G#5': function() {
      ext_assert_assert.equal(indexjs_note.fromMIDI(80).scientific(), 'G#5');
    }
  },

  'Return MIDI note number': {
    'MIDI#36 is C2': function() {
      ext_assert_assert.equal(indexjs_note('C2').midi(), 36);
    },

    'MIDI#77 is F5': function() {
      ext_assert_assert.equal(indexjs_note('F5').midi(), 77);
    },

    'MIDI#61 is Db4': function() {
      ext_assert_assert.equal(indexjs_note('Db4').midi(), 61);
    },

    'MIDI#80 is G#5': function() {
      ext_assert_assert.equal(indexjs_note('G#5').midi(), 80);
    }
  },

  'Chroma': {
    'C has chroma 0': function() {
      ext_assert_assert.equal(indexjs_note('c').chroma(), 0);
    },

    'C# has chroma 1': function() {
      ext_assert_assert.equal(indexjs_note('c#').chroma(), 1);
    },

    'B has chroma 11': function() {
      ext_assert_assert.equal(indexjs_note('b').chroma(), 11);
    },

    'Db has chroma 1': function() {
      ext_assert_assert.equal(indexjs_note('db').chroma(), 1);
    },

    'Dbb has chroma 0': function() {
      ext_assert_assert.equal(indexjs_note('dbb').chroma(), 0);
    },

    'E has chroma 4': function() {
      ext_assert_assert.equal(indexjs_note('e').chroma(), 4);
    },

    'F has chroma 5': function() {
      ext_assert_assert.equal(indexjs_note('f').chroma(), 5);
    },

    'Fb has chroma 4': function() {
      ext_assert_assert.equal(indexjs_note('fb').chroma(), 4);
    },

    'H# has chroma 0': function() {
      ext_assert_assert.equal(indexjs_note('h#').chroma(), 0);
    },

    'Bx has chroma 1': function() {
      ext_assert_assert.equal(indexjs_note('bx').chroma(), 1);
    },

    'Cbb has chroma 10': function() {
      ext_assert_assert.equal(indexjs_note('cbb').chroma(), 10);
    }
  },

  'Scale Degrees': {
    'Eb is scale degree 1 (tonic) in an Eb minor scale': function() {
      var note = indexjs_note('eb');
      ext_assert_assert.equal(note.scaleDegree(indexjs_scale('eb', 'major')), 1);
    },

    'E is scale degree 3 in a C# dorian': function() {
      var note = indexjs_note('e');
      ext_assert_assert.equal(note.scaleDegree(indexjs_scale('c#', 'dorian')), 3);
    },

    'C is scale degree 0 in a D major scale (not in scale)': function() {
      var note = indexjs_note('c');
      ext_assert_assert.equal(note.scaleDegree(indexjs_scale('d', 'major')), 0);
    },

    'Bb is scale degree 7 in a C minor': function() {
      var note = indexjs_note('bb');
      ext_assert_assert.equal(note.scaleDegree(indexjs_scale('c', 'minor')), 7);
    },
    
    'Db is scale degree 4 in an Ab major scale': function() {
      var note = indexjs_note('db');
      ext_assert_assert.equal(note.scaleDegree(indexjs_scale('ab', 'major')), 4);
    },

    'A# is scale degree 0 in a G minor scale': function() {
      var note = indexjs_note('a#');
      ext_assert_assert.equal(note.scaleDegree(indexjs_scale('g', 'minor')), 0);
    }
  },

  'Enharmonics': {
    'c is enharmonic with dbb and b#': function() {
      ext_assert_assert.deepEqual(indexjs_note('c4').enharmonics(),
        ['dbb4', 'b#3'].map(indexjs_note));
    },

    'fb is enharmonic with e and dx': function() {
      ext_assert_assert.deepEqual(indexjs_note('fb4').enharmonics(),
        ['e4', 'dx4'].map(indexjs_note));
    },

    'cb is enharmonic with ax and b': function() {
      ext_assert_assert.deepEqual(indexjs_note('cb4').enharmonics(),
        ['b3', 'ax3'].map(indexjs_note));
    }
  },

  'Enharmonics with only one accidental': {
    'c is enharmonic with b#': function() {
      ext_assert_assert.deepEqual(indexjs_note('c4').enharmonics(true),
        ['b#3'].map(indexjs_note));
    },

    'fb is enharmonic with e': function() {
      ext_assert_assert.deepEqual(indexjs_note('fb4').enharmonics(true),
        ['e4'].map(indexjs_note));
    },

    'cb is enharmonic with b': function() {
      ext_assert_assert.deepEqual(indexjs_note('cb4').enharmonics(true),
        ['b3'].map(indexjs_note));
    }
  }
}).export(module);
