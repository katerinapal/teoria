import ext_vows_vows from "vows";
import ext_assert_assert from "assert";
import { note as indexjs_note, interval as indexjs_interval } from "../";

function addSimple(interval1, interval2) {
  return indexjs_interval(interval1).add(indexjs_interval(interval2));
}

ext_vows_vows.describe('Intervals').addBatch({
  'Relative Intervals': {
    topic: function() {
      return indexjs_note('F#,');
    },

    'Doubly diminished second': function(note) {
      ext_assert_assert.deepEqual(note.interval('dd2'), indexjs_note('Gbb,'));
    },

    'Diminished second': function(note) {
      ext_assert_assert.deepEqual(note.interval('d2'), indexjs_note('Gb,'));
    },

    'Diminished second, API method two': function(note) {
      ext_assert_assert.deepEqual(indexjs_interval(note, indexjs_interval('d2')), indexjs_note('Gb,'));
    },

    'Diminished second, API method three': function(note) {
      ext_assert_assert.deepEqual(note.interval(indexjs_interval('d2')), indexjs_note('Gb,'));
    },

    'Minor second': function(note) {
      ext_assert_assert.deepEqual(note.interval('m2'), indexjs_note('G,'));
    },

    'Major second': function(note) {
      ext_assert_assert.deepEqual(note.interval('M2'), indexjs_note('G#,'));
    },

    'Augmented second': function(note) {
      ext_assert_assert.deepEqual(note.interval('A2'), indexjs_note('Gx,'));
    },

    'Doubly diminished third': function(note) {
      ext_assert_assert.deepEqual(note.interval('dd3'), indexjs_note('Abb,'));
    },

    'Diminished third': function(note) {
      ext_assert_assert.deepEqual(note.interval('d3'), indexjs_note('Ab,'));
    },

    'Minor third': function(note) {
      ext_assert_assert.deepEqual(note.interval('m3'), indexjs_note('A,'));
    },

    'Major third': function(note) {
      ext_assert_assert.deepEqual(note.interval('M3'), indexjs_note('A#,'));
    },

    'Augmented third': function(note) {
      ext_assert_assert.deepEqual(note.interval('A3'), indexjs_note('Ax,'));
    },

    'Doubly diminished fourth': function(note) {
      ext_assert_assert.deepEqual(note.interval('dd4'), indexjs_note('Bbb,'));
    },

    'Diminished fourth': function(note) {
      ext_assert_assert.deepEqual(note.interval('d4'), indexjs_note('Bb,'));
    },

    'Perfect fourth': function(note) {
      ext_assert_assert.deepEqual(note.interval('P4'), indexjs_note('B,'));
    },

    'Augmented fourth': function(note) {
      ext_assert_assert.deepEqual(note.interval('A4'), indexjs_note('B#,'));
    },

    'Doubly augmented fourth': function(note) {
      ext_assert_assert.deepEqual(note.interval('AA4'), indexjs_note('Bx,'));
    },

    'Doubly diminished fifth': function(note) {
      ext_assert_assert.deepEqual(note.interval('dd5'), indexjs_note('Cb'));
    },

    'Diminished fifth': function(note) {
      ext_assert_assert.deepEqual(note.interval('d5'), indexjs_note('C'));
    },

    'Perfect fifth': function(note) {
      ext_assert_assert.deepEqual(note.interval('P5'), indexjs_note('C#'));
    },

    'Augmented fifth': function(note) {
      ext_assert_assert.deepEqual(note.interval('A5'), indexjs_note('Cx'));
    },

    'Doubly diminished sixth': function(note) {
      ext_assert_assert.deepEqual(note.interval('dd6'), indexjs_note('Dbb'));
    },

    'Diminished sixth': function(note) {
      ext_assert_assert.deepEqual(note.interval('d6'), indexjs_note('Db'));
    },

    'Minor sixth': function(note) {
      ext_assert_assert.deepEqual(note.interval('m6'), indexjs_note('D'));
    },

    'Major sixth': function(note) {
      ext_assert_assert.deepEqual(note.interval('M6'), indexjs_note('D#'));
    },

    'Augmented sixth': function(note) {
      ext_assert_assert.deepEqual(note.interval('A6'), indexjs_note('Dx'));
    },

    'Doubly diminished seventh': function(note) {
      ext_assert_assert.deepEqual(note.interval('dd7'), indexjs_note('Ebb'));
    },

    'Diminished seventh': function(note) {
      ext_assert_assert.deepEqual(note.interval('d7'), indexjs_note('Eb'));
    },

    'Minor seventh': function(note) {
      ext_assert_assert.deepEqual(note.interval('m7'), indexjs_note('E'));
    },

    'Major seventh': function(note) {
      ext_assert_assert.deepEqual(note.interval('M7'), indexjs_note('E#'));
    },

    'Augmented seventh': function(note) {
      ext_assert_assert.deepEqual(note.interval('A7'), indexjs_note('Ex'));
    },

    'Doubly diminished octave': function(note) {
      ext_assert_assert.deepEqual(note.interval('dd8'), indexjs_note('Fb'));
    },

    'Diminished octave': function(note) {
      ext_assert_assert.deepEqual(note.interval('d8'), indexjs_note('F'));
    },

    'Perfect octave': function(note) {
      ext_assert_assert.deepEqual(note.interval('P8'), indexjs_note('F#'));
    },

    'Augmented octave': function(note) {
      ext_assert_assert.deepEqual(note.interval('A8'), indexjs_note('Fx'));
    },

    'Minor ninth': function(note) {
      ext_assert_assert.deepEqual(note.interval('m9'), indexjs_note('G'));
    },

    'Major ninth': function(note) {
      ext_assert_assert.deepEqual(note.interval('M9'), indexjs_note('G#'));
    },

    'Minor tenth': function(note) {
      ext_assert_assert.deepEqual(note.interval('m10'), indexjs_note('A'));
    },

    'Major tenth': function(note) {
      ext_assert_assert.deepEqual(note.interval('M10'), indexjs_note('A#'));
    },

    'Perfect eleventh': function(note) {
      ext_assert_assert.deepEqual(note.interval('P11'), indexjs_note('B'));
    },

    'Diminished twelfth': function(note) {
      ext_assert_assert.deepEqual(note.interval('d12'), indexjs_note('c'));
    },

    'Perfect twelfth': function(note) {
      ext_assert_assert.deepEqual(note.interval('P12'), indexjs_note('c#'));
    },

    'Minor thirteenth': function(note) {
      ext_assert_assert.deepEqual(note.interval('m13'), indexjs_note('d'));
    },

    'Major thirteenth': function(note) {
      ext_assert_assert.deepEqual(note.interval('M13'), indexjs_note('d#'));
    },

    'Minor fourteenth': function(note) {
      ext_assert_assert.deepEqual(note.interval('m14'), indexjs_note('e'));
    },

    'Major fourteenth': function(note) {
      ext_assert_assert.deepEqual(note.interval('M14'), indexjs_note('e#'));
    },

    'Doubly diminished second up': function() {
      ext_assert_assert.deepEqual(indexjs_note('e').interval(indexjs_note('fbb')),
          indexjs_interval('dd2'));
    },

    'Doubly diminished second down': function() {
      ext_assert_assert.deepEqual(indexjs_note('f').interval(indexjs_note('ex')),
          indexjs_interval('dd-2'));
    }
  },

  'Interval descending': {
    'A major third down from E4': function() {
      ext_assert_assert.deepEqual(indexjs_note('E4').interval('M-3'), indexjs_note('C4'));
    },

    'Minor second down from C2': function() {
      ext_assert_assert.deepEqual(indexjs_note('C2').interval('m-2'), indexjs_note('B1'));
    },

    'A diminished fifth down from Eb5': function() {
      ext_assert_assert.deepEqual(indexjs_note('Eb5').interval('d-5'), indexjs_note('A4'));
    },

    'A major ninth down from G#4': function() {
      ext_assert_assert.deepEqual(indexjs_note('G#4').interval('M-9'), indexjs_note('F#3'));
    },

    'An augmented sixth down from Bb4': function() {
      ext_assert_assert.deepEqual(indexjs_note('Bb4').interval('A-6'), indexjs_note('Dbb4'));
    }
  },

  'Interval inversions': {
    'Invert m2 is M7': function() {
      ext_assert_assert.equal(indexjs_interval.invert('m2'), 'M7');
    },

    'Invert M2 is m7': function() {
      ext_assert_assert.equal(indexjs_interval.invert('M2'), 'm7');
    },

    'Invert m3 is M6': function() {
      ext_assert_assert.equal(indexjs_interval.invert('m3'), 'M6');
    },

    'Invert M3 is m6': function() {
      ext_assert_assert.equal(indexjs_interval.invert('M3'), 'm6');
    },

    'Invert P4 is P5': function() {
      ext_assert_assert.equal(indexjs_interval.invert('P4'), 'P5');
    },

    'Invert A5 is d4': function() {
      ext_assert_assert.equal(indexjs_interval.invert('A5'), 'd4');
    }
  },

  'Interval base': {
    'Base of d5 is a fifth': function() {
      ext_assert_assert.equal(indexjs_interval('d5').base(), 'fifth');
    },

    'Base of A7 is a seventh': function() {
      ext_assert_assert.equal(indexjs_interval('A7').base(), 'seventh');
    },

    'Base of m2 is a second': function() {
      ext_assert_assert.equal(indexjs_interval('m2').base(), 'second');
    },

    'Base of M6 is a sixth': function() {
      ext_assert_assert.equal(indexjs_interval('M6').base(), 'sixth');
    },

    'Base of dd8 is an octave': function() {
      ext_assert_assert.equal(indexjs_interval('dd8').base(), 'octave');
    },

    'Base of AA4 is a fourth': function() {
      ext_assert_assert.equal(indexjs_interval('AA4').base(), 'fourth');
    },

    'Base of d-5 is a fifth': function() {
      ext_assert_assert.equal(indexjs_interval('d-5').base(), 'fifth');
    },

    'Base of m-9 is a second': function() {
      ext_assert_assert.equal(indexjs_interval('m-2').base(), 'second');
    },

    'Base of M-13 is a sixth': function() {
      ext_assert_assert.equal(indexjs_interval('M-13').base(), 'sixth');
    },

    'Base of P-11 is a fourth': function() {
      ext_assert_assert.equal(indexjs_interval('P-11').base(), 'fourth');
    },

    'Base of AA-7 is a seventh': function() {
      ext_assert_assert.equal(indexjs_interval('AA-7').base(), 'seventh');
    }
  },

  'Compound Intervals': {
    'A major seventeenth is a compound interval': function() {
      ext_assert_assert.equal(indexjs_interval('M17').isCompound(), true);
    },

    'A major seventeenth\'s simple part is a major third': function() {
      ext_assert_assert.equal(indexjs_interval('M17').simple(), 'M3');
    },

    'A descending major fourteenth\'s simple part is a descending major seventh': function() {
      ext_assert_assert.equal(indexjs_interval('M-14').simple(), 'M-7');
    },

    'A perfect nineteenth\'s simple part is equal to a perfect fifth': function() {
      ext_assert_assert.equal(indexjs_interval('P19').simple().equal(indexjs_interval('P5')), true);
    },

    'A perfect nineteenth\'s simple part is not equal to a major sixth': function() {
      ext_assert_assert.equal(indexjs_interval('P19').simple().equal(indexjs_interval('M6')), false);
    },

    'A descending augmented ninth\'s simple part is equal to a descending augmented second': function() {
      ext_assert_assert.equal(indexjs_interval('A-9').simple().equal(indexjs_interval('A-2')), true);
    },

    'A 22nd has two compound octaves': function() {
      ext_assert_assert.equal(indexjs_interval('P22').octaves(), 2);
    },

    'A descending fourth has no compound octaves': function() {
      ext_assert_assert.equal(indexjs_interval('P-4').octaves(), 0);
    },

    'A descending eleventh has one compound octave': function() {
      ext_assert_assert.equal(indexjs_interval('P-11').octaves(), 1);
    },

    'A descending augmented third has no compound octaves': function() {
      ext_assert_assert.equal(indexjs_interval('A-3').octaves(), 0);
    },

    'A descending major 16th has two compound octaves': function() {
      ext_assert_assert.equal(indexjs_interval('M-16').octaves(), 2);
    },

    'A major seventh is greater than a minor seventh': function() {
      ext_assert_assert.equal(indexjs_interval('M7').greater(indexjs_interval('m7')), true);
    },

    'An augmented octave is smaller than a major ninth': function() {
      ext_assert_assert.equal(indexjs_interval('A8').smaller(indexjs_interval('M9')), true);
    },

    'A major third is equal to another major third': function() {
      ext_assert_assert.equal(indexjs_interval('M3').equal(indexjs_interval('M3')), true);
    },

    'An augmented fifth is not equal to a minor sixth': function() {
      ext_assert_assert.equal(indexjs_interval('P5').equal(indexjs_interval('m6')), false);
    },

    'A perfect fifth is not equal to a perfect octave': function() {
      ext_assert_assert.equal(indexjs_interval('P5').equal(indexjs_interval('P8')), false);
    },

    'The simple part of a major 23th is a major second': function() {
      ext_assert_assert.equal(indexjs_interval('M23').simple(), 'M2');
    }
  },

  'Interval direction': {
    'A3 to C4 is up': function() {
      ext_assert_assert.equal(indexjs_note('A3').interval(indexjs_note('C4')).direction(), 'up');
    },

    'Bb5 to Bb5 is up (a unison is always up)': function() {
      ext_assert_assert.equal(indexjs_note('Bb5').interval(indexjs_note('Bb5')).direction(), 'up');
    },

    'G#4 to D4 is down': function() {
      ext_assert_assert.equal(indexjs_note('G#4').interval(indexjs_note('D4')).direction(), 'down');
    },

    'F6 to E6 is down': function() {
      ext_assert_assert.equal(indexjs_note('F6').interval(indexjs_note('E6')).direction(), 'down');
    },

    'C4 to A3 is up, w. direction set to up': function() {
      ext_assert_assert.equal(indexjs_note('C4').interval(indexjs_note('A3')).direction('up').direction(), 'up');
    },

    'A3 to C4 remains up w. direction set to up': function() {
      ext_assert_assert.equal(indexjs_note('A3').interval(indexjs_note('C4')).direction('up').direction(), 'up');
    },

    'm2 is up': function() {
      ext_assert_assert.equal(indexjs_interval('m2').direction(), 'up');
    },

    'P11 is up': function() {
      ext_assert_assert.equal(indexjs_interval('P11').direction(), 'up');
    },

    'P1 is up': function() {
      ext_assert_assert.equal(indexjs_interval('P1').direction(), 'up');
    },

    'A1 is up': function() {
      ext_assert_assert.equal(indexjs_interval('A1').direction(), 'up');
    },

    'd1 is up': function() {
      ext_assert_assert.equal(indexjs_interval('d1').direction(), 'up');
    },

    'm-2 is down': function() {
      ext_assert_assert.equal(indexjs_interval('m-2').direction(), 'down');
    },

    'M-17 is down': function() {
      ext_assert_assert.equal(indexjs_interval('M-17').direction(), 'down');
    },

    'd-2 is down': function() {
      ext_assert_assert.equal(indexjs_interval('d-2').direction(), 'down');
    },

    'dd-2 is down (although it is up)': function() {
      ext_assert_assert.equal(indexjs_interval('dd-2').direction(), 'down');
    },

    'A-2 is down': function() {
      ext_assert_assert.equal(indexjs_interval('A-2').direction(), 'down');
    },

    'd-1 is up (all unison values are up)': function() {
      ext_assert_assert.equal(indexjs_interval('d-1').direction(), 'up');
    },

    'A-1 is up (all unison values are up)': function() {
      ext_assert_assert.equal(indexjs_interval('A-1').direction(), 'up');
    }
  },

  'Interval arithmetic': {
    'm3 + M2 = P4': function() {
      ext_assert_assert.equal(addSimple('m3', 'M2').toString(), 'P4');
    },

    'P4 + P5 = P8': function() {
      ext_assert_assert.equal(addSimple('P4', 'P5').toString(), 'P8');
    },

    'M6 + A4 = A9': function() {
      ext_assert_assert.equal(addSimple('M6', 'A4').toString(), 'A9');
    },

    'M-2 + m-2 = m-3': function() {
      ext_assert_assert.equal(addSimple('M-2', 'm-2').toString(), 'm-3');
    },

    'A11 + M9 = A19': function() {
      ext_assert_assert.equal(addSimple('A11', 'M9').toString(), 'A19');
    },

    'm-10 + P4 = m-7': function() {
      ext_assert_assert.equal(addSimple('m-10', 'P4').toString(), 'm-7');
    }
  },

  'Theoretical intervals - Triple augmented': {
    topic: function() {
      return indexjs_note('F').interval(indexjs_note('Bx'));
    },

    'F to Bx has quality value = 3 (triple augmented)': function(interval) {
      ext_assert_assert.equal(interval.qualityValue(), 3);
    },

    '#simple() works': function(interval) {
      ext_assert_assert.deepEqual(interval.simple().coord, [-11, 20]);
    }
  }
}).export(module);
