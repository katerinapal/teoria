import ext_vows_vows from "vows";
import ext_assert_assert from "assert";
import { teoria as _teoria } from "../";

function addSimple(interval1, interval2) {
  return _teoria.interval(interval1).add(_teoria.interval(interval2));
}

ext_vows_vows.describe('Intervals').addBatch({
  'Relative Intervals': {
    topic: function() {
      return _teoria.note('F#,');
    },

    'Doubly diminished second': function(note) {
      ext_assert_assert.deepEqual(note.interval('dd2'), _teoria.note('Gbb,'));
    },

    'Diminished second': function(note) {
      ext_assert_assert.deepEqual(note.interval('d2'), _teoria.note('Gb,'));
    },

    'Diminished second, API method two': function(note) {
      ext_assert_assert.deepEqual(_teoria.interval(note, _teoria.interval('d2')), _teoria.note('Gb,'));
    },

    'Diminished second, API method three': function(note) {
      ext_assert_assert.deepEqual(note.interval(_teoria.interval('d2')), _teoria.note('Gb,'));
    },

    'Minor second': function(note) {
      ext_assert_assert.deepEqual(note.interval('m2'), _teoria.note('G,'));
    },

    'Major second': function(note) {
      ext_assert_assert.deepEqual(note.interval('M2'), _teoria.note('G#,'));
    },

    'Augmented second': function(note) {
      ext_assert_assert.deepEqual(note.interval('A2'), _teoria.note('Gx,'));
    },

    'Doubly diminished third': function(note) {
      ext_assert_assert.deepEqual(note.interval('dd3'), _teoria.note('Abb,'));
    },

    'Diminished third': function(note) {
      ext_assert_assert.deepEqual(note.interval('d3'), _teoria.note('Ab,'));
    },

    'Minor third': function(note) {
      ext_assert_assert.deepEqual(note.interval('m3'), _teoria.note('A,'));
    },

    'Major third': function(note) {
      ext_assert_assert.deepEqual(note.interval('M3'), _teoria.note('A#,'));
    },

    'Augmented third': function(note) {
      ext_assert_assert.deepEqual(note.interval('A3'), _teoria.note('Ax,'));
    },

    'Doubly diminished fourth': function(note) {
      ext_assert_assert.deepEqual(note.interval('dd4'), _teoria.note('Bbb,'));
    },

    'Diminished fourth': function(note) {
      ext_assert_assert.deepEqual(note.interval('d4'), _teoria.note('Bb,'));
    },

    'Perfect fourth': function(note) {
      ext_assert_assert.deepEqual(note.interval('P4'), _teoria.note('B,'));
    },

    'Augmented fourth': function(note) {
      ext_assert_assert.deepEqual(note.interval('A4'), _teoria.note('B#,'));
    },

    'Doubly augmented fourth': function(note) {
      ext_assert_assert.deepEqual(note.interval('AA4'), _teoria.note('Bx,'));
    },

    'Doubly diminished fifth': function(note) {
      ext_assert_assert.deepEqual(note.interval('dd5'), _teoria.note('Cb'));
    },

    'Diminished fifth': function(note) {
      ext_assert_assert.deepEqual(note.interval('d5'), _teoria.note('C'));
    },

    'Perfect fifth': function(note) {
      ext_assert_assert.deepEqual(note.interval('P5'), _teoria.note('C#'));
    },

    'Augmented fifth': function(note) {
      ext_assert_assert.deepEqual(note.interval('A5'), _teoria.note('Cx'));
    },

    'Doubly diminished sixth': function(note) {
      ext_assert_assert.deepEqual(note.interval('dd6'), _teoria.note('Dbb'));
    },

    'Diminished sixth': function(note) {
      ext_assert_assert.deepEqual(note.interval('d6'), _teoria.note('Db'));
    },

    'Minor sixth': function(note) {
      ext_assert_assert.deepEqual(note.interval('m6'), _teoria.note('D'));
    },

    'Major sixth': function(note) {
      ext_assert_assert.deepEqual(note.interval('M6'), _teoria.note('D#'));
    },

    'Augmented sixth': function(note) {
      ext_assert_assert.deepEqual(note.interval('A6'), _teoria.note('Dx'));
    },

    'Doubly diminished seventh': function(note) {
      ext_assert_assert.deepEqual(note.interval('dd7'), _teoria.note('Ebb'));
    },

    'Diminished seventh': function(note) {
      ext_assert_assert.deepEqual(note.interval('d7'), _teoria.note('Eb'));
    },

    'Minor seventh': function(note) {
      ext_assert_assert.deepEqual(note.interval('m7'), _teoria.note('E'));
    },

    'Major seventh': function(note) {
      ext_assert_assert.deepEqual(note.interval('M7'), _teoria.note('E#'));
    },

    'Augmented seventh': function(note) {
      ext_assert_assert.deepEqual(note.interval('A7'), _teoria.note('Ex'));
    },

    'Doubly diminished octave': function(note) {
      ext_assert_assert.deepEqual(note.interval('dd8'), _teoria.note('Fb'));
    },

    'Diminished octave': function(note) {
      ext_assert_assert.deepEqual(note.interval('d8'), _teoria.note('F'));
    },

    'Perfect octave': function(note) {
      ext_assert_assert.deepEqual(note.interval('P8'), _teoria.note('F#'));
    },

    'Augmented octave': function(note) {
      ext_assert_assert.deepEqual(note.interval('A8'), _teoria.note('Fx'));
    },

    'Minor ninth': function(note) {
      ext_assert_assert.deepEqual(note.interval('m9'), _teoria.note('G'));
    },

    'Major ninth': function(note) {
      ext_assert_assert.deepEqual(note.interval('M9'), _teoria.note('G#'));
    },

    'Minor tenth': function(note) {
      ext_assert_assert.deepEqual(note.interval('m10'), _teoria.note('A'));
    },

    'Major tenth': function(note) {
      ext_assert_assert.deepEqual(note.interval('M10'), _teoria.note('A#'));
    },

    'Perfect eleventh': function(note) {
      ext_assert_assert.deepEqual(note.interval('P11'), _teoria.note('B'));
    },

    'Diminished twelfth': function(note) {
      ext_assert_assert.deepEqual(note.interval('d12'), _teoria.note('c'));
    },

    'Perfect twelfth': function(note) {
      ext_assert_assert.deepEqual(note.interval('P12'), _teoria.note('c#'));
    },

    'Minor thirteenth': function(note) {
      ext_assert_assert.deepEqual(note.interval('m13'), _teoria.note('d'));
    },

    'Major thirteenth': function(note) {
      ext_assert_assert.deepEqual(note.interval('M13'), _teoria.note('d#'));
    },

    'Minor fourteenth': function(note) {
      ext_assert_assert.deepEqual(note.interval('m14'), _teoria.note('e'));
    },

    'Major fourteenth': function(note) {
      ext_assert_assert.deepEqual(note.interval('M14'), _teoria.note('e#'));
    },

    'Doubly diminished second up': function() {
      ext_assert_assert.deepEqual(_teoria.note('e').interval(_teoria.note('fbb')),
          _teoria.interval('dd2'));
    },

    'Doubly diminished second down': function() {
      ext_assert_assert.deepEqual(_teoria.note('f').interval(_teoria.note('ex')),
          _teoria.interval('dd-2'));
    }
  },

  'Interval descending': {
    'A major third down from E4': function() {
      ext_assert_assert.deepEqual(_teoria.note('E4').interval('M-3'), _teoria.note('C4'));
    },

    'Minor second down from C2': function() {
      ext_assert_assert.deepEqual(_teoria.note('C2').interval('m-2'), _teoria.note('B1'));
    },

    'A diminished fifth down from Eb5': function() {
      ext_assert_assert.deepEqual(_teoria.note('Eb5').interval('d-5'), _teoria.note('A4'));
    },

    'A major ninth down from G#4': function() {
      ext_assert_assert.deepEqual(_teoria.note('G#4').interval('M-9'), _teoria.note('F#3'));
    },

    'An augmented sixth down from Bb4': function() {
      ext_assert_assert.deepEqual(_teoria.note('Bb4').interval('A-6'), _teoria.note('Dbb4'));
    }
  },

  'Interval inversions': {
    'Invert m2 is M7': function() {
      ext_assert_assert.equal(_teoria.interval.invert('m2'), 'M7');
    },

    'Invert M2 is m7': function() {
      ext_assert_assert.equal(_teoria.interval.invert('M2'), 'm7');
    },

    'Invert m3 is M6': function() {
      ext_assert_assert.equal(_teoria.interval.invert('m3'), 'M6');
    },

    'Invert M3 is m6': function() {
      ext_assert_assert.equal(_teoria.interval.invert('M3'), 'm6');
    },

    'Invert P4 is P5': function() {
      ext_assert_assert.equal(_teoria.interval.invert('P4'), 'P5');
    },

    'Invert A5 is d4': function() {
      ext_assert_assert.equal(_teoria.interval.invert('A5'), 'd4');
    }
  },

  'Interval base': {
    'Base of d5 is a fifth': function() {
      ext_assert_assert.equal(_teoria.interval('d5').base(), 'fifth');
    },

    'Base of A7 is a seventh': function() {
      ext_assert_assert.equal(_teoria.interval('A7').base(), 'seventh');
    },

    'Base of m2 is a second': function() {
      ext_assert_assert.equal(_teoria.interval('m2').base(), 'second');
    },

    'Base of M6 is a sixth': function() {
      ext_assert_assert.equal(_teoria.interval('M6').base(), 'sixth');
    },

    'Base of dd8 is an octave': function() {
      ext_assert_assert.equal(_teoria.interval('dd8').base(), 'octave');
    },

    'Base of AA4 is a fourth': function() {
      ext_assert_assert.equal(_teoria.interval('AA4').base(), 'fourth');
    },

    'Base of d-5 is a fifth': function() {
      ext_assert_assert.equal(_teoria.interval('d-5').base(), 'fifth');
    },

    'Base of m-9 is a second': function() {
      ext_assert_assert.equal(_teoria.interval('m-2').base(), 'second');
    },

    'Base of M-13 is a sixth': function() {
      ext_assert_assert.equal(_teoria.interval('M-13').base(), 'sixth');
    },

    'Base of P-11 is a fourth': function() {
      ext_assert_assert.equal(_teoria.interval('P-11').base(), 'fourth');
    },

    'Base of AA-7 is a seventh': function() {
      ext_assert_assert.equal(_teoria.interval('AA-7').base(), 'seventh');
    }
  },

  'Compound Intervals': {
    'A major seventeenth is a compound interval': function() {
      ext_assert_assert.equal(_teoria.interval('M17').isCompound(), true);
    },

    'A major seventeenth\'s simple part is a major third': function() {
      ext_assert_assert.equal(_teoria.interval('M17').simple(), 'M3');
    },

    'A descending major fourteenth\'s simple part is a descending major seventh': function() {
      ext_assert_assert.equal(_teoria.interval('M-14').simple(), 'M-7');
    },

    'A perfect nineteenth\'s simple part is equal to a perfect fifth': function() {
      ext_assert_assert.equal(_teoria.interval('P19').simple().equal(_teoria.interval('P5')), true);
    },

    'A perfect nineteenth\'s simple part is not equal to a major sixth': function() {
      ext_assert_assert.equal(_teoria.interval('P19').simple().equal(_teoria.interval('M6')), false);
    },

    'A descending augmented ninth\'s simple part is equal to a descending augmented second': function() {
      ext_assert_assert.equal(_teoria.interval('A-9').simple().equal(_teoria.interval('A-2')), true);
    },

    'A 22nd has two compound octaves': function() {
      ext_assert_assert.equal(_teoria.interval('P22').octaves(), 2);
    },

    'A descending fourth has no compound octaves': function() {
      ext_assert_assert.equal(_teoria.interval('P-4').octaves(), 0);
    },

    'A descending eleventh has one compound octave': function() {
      ext_assert_assert.equal(_teoria.interval('P-11').octaves(), 1);
    },

    'A descending augmented third has no compound octaves': function() {
      ext_assert_assert.equal(_teoria.interval('A-3').octaves(), 0);
    },

    'A descending major 16th has two compound octaves': function() {
      ext_assert_assert.equal(_teoria.interval('M-16').octaves(), 2);
    },

    'A major seventh is greater than a minor seventh': function() {
      ext_assert_assert.equal(_teoria.interval('M7').greater(_teoria.interval('m7')), true);
    },

    'An augmented octave is smaller than a major ninth': function() {
      ext_assert_assert.equal(_teoria.interval('A8').smaller(_teoria.interval('M9')), true);
    },

    'A major third is equal to another major third': function() {
      ext_assert_assert.equal(_teoria.interval('M3').equal(_teoria.interval('M3')), true);
    },

    'An augmented fifth is not equal to a minor sixth': function() {
      ext_assert_assert.equal(_teoria.interval('P5').equal(_teoria.interval('m6')), false);
    },

    'A perfect fifth is not equal to a perfect octave': function() {
      ext_assert_assert.equal(_teoria.interval('P5').equal(_teoria.interval('P8')), false);
    },

    'The simple part of a major 23th is a major second': function() {
      ext_assert_assert.equal(_teoria.interval('M23').simple(), 'M2');
    }
  },

  'Interval direction': {
    'A3 to C4 is up': function() {
      ext_assert_assert.equal(_teoria.note('A3').interval(_teoria.note('C4')).direction(), 'up');
    },

    'Bb5 to Bb5 is up (a unison is always up)': function() {
      ext_assert_assert.equal(_teoria.note('Bb5').interval(_teoria.note('Bb5')).direction(), 'up');
    },

    'G#4 to D4 is down': function() {
      ext_assert_assert.equal(_teoria.note('G#4').interval(_teoria.note('D4')).direction(), 'down');
    },

    'F6 to E6 is down': function() {
      ext_assert_assert.equal(_teoria.note('F6').interval(_teoria.note('E6')).direction(), 'down');
    },

    'C4 to A3 is up, w. direction set to up': function() {
      ext_assert_assert.equal(_teoria.note('C4').interval(_teoria.note('A3')).direction('up').direction(), 'up');
    },

    'A3 to C4 remains up w. direction set to up': function() {
      ext_assert_assert.equal(_teoria.note('A3').interval(_teoria.note('C4')).direction('up').direction(), 'up');
    },

    'm2 is up': function() {
      ext_assert_assert.equal(_teoria.interval('m2').direction(), 'up');
    },

    'P11 is up': function() {
      ext_assert_assert.equal(_teoria.interval('P11').direction(), 'up');
    },

    'P1 is up': function() {
      ext_assert_assert.equal(_teoria.interval('P1').direction(), 'up');
    },

    'A1 is up': function() {
      ext_assert_assert.equal(_teoria.interval('A1').direction(), 'up');
    },

    'd1 is up': function() {
      ext_assert_assert.equal(_teoria.interval('d1').direction(), 'up');
    },

    'm-2 is down': function() {
      ext_assert_assert.equal(_teoria.interval('m-2').direction(), 'down');
    },

    'M-17 is down': function() {
      ext_assert_assert.equal(_teoria.interval('M-17').direction(), 'down');
    },

    'd-2 is down': function() {
      ext_assert_assert.equal(_teoria.interval('d-2').direction(), 'down');
    },

    'dd-2 is down (although it is up)': function() {
      ext_assert_assert.equal(_teoria.interval('dd-2').direction(), 'down');
    },

    'A-2 is down': function() {
      ext_assert_assert.equal(_teoria.interval('A-2').direction(), 'down');
    },

    'd-1 is up (all unison values are up)': function() {
      ext_assert_assert.equal(_teoria.interval('d-1').direction(), 'up');
    },

    'A-1 is up (all unison values are up)': function() {
      ext_assert_assert.equal(_teoria.interval('A-1').direction(), 'up');
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
      return _teoria.note('F').interval(_teoria.note('Bx'));
    },

    'F to Bx has quality value = 3 (triple augmented)': function(interval) {
      ext_assert_assert.equal(interval.qualityValue(), 3);
    },

    '#simple() works': function(interval) {
      ext_assert_assert.deepEqual(interval.simple().coord, [-11, 20]);
    }
  }
}).export(module);
