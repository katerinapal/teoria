"use strict";

var _vows = require("vows");

var _vows2 = _interopRequireDefault(_vows);

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addSimple(interval1, interval2) {
  return _.teoria.interval(interval1).add(_.teoria.interval(interval2));
}

_vows2.default.describe('Intervals').addBatch({
  'Relative Intervals': {
    topic: function topic() {
      return _.teoria.note('F#,');
    },

    'Doubly diminished second': function DoublyDiminishedSecond(note) {
      _assert2.default.deepEqual(note.interval('dd2'), _.teoria.note('Gbb,'));
    },

    'Diminished second': function DiminishedSecond(note) {
      _assert2.default.deepEqual(note.interval('d2'), _.teoria.note('Gb,'));
    },

    'Diminished second, API method two': function DiminishedSecondAPIMethodTwo(note) {
      _assert2.default.deepEqual(_.teoria.interval(note, _.teoria.interval('d2')), _.teoria.note('Gb,'));
    },

    'Diminished second, API method three': function DiminishedSecondAPIMethodThree(note) {
      _assert2.default.deepEqual(note.interval(_.teoria.interval('d2')), _.teoria.note('Gb,'));
    },

    'Minor second': function MinorSecond(note) {
      _assert2.default.deepEqual(note.interval('m2'), _.teoria.note('G,'));
    },

    'Major second': function MajorSecond(note) {
      _assert2.default.deepEqual(note.interval('M2'), _.teoria.note('G#,'));
    },

    'Augmented second': function AugmentedSecond(note) {
      _assert2.default.deepEqual(note.interval('A2'), _.teoria.note('Gx,'));
    },

    'Doubly diminished third': function DoublyDiminishedThird(note) {
      _assert2.default.deepEqual(note.interval('dd3'), _.teoria.note('Abb,'));
    },

    'Diminished third': function DiminishedThird(note) {
      _assert2.default.deepEqual(note.interval('d3'), _.teoria.note('Ab,'));
    },

    'Minor third': function MinorThird(note) {
      _assert2.default.deepEqual(note.interval('m3'), _.teoria.note('A,'));
    },

    'Major third': function MajorThird(note) {
      _assert2.default.deepEqual(note.interval('M3'), _.teoria.note('A#,'));
    },

    'Augmented third': function AugmentedThird(note) {
      _assert2.default.deepEqual(note.interval('A3'), _.teoria.note('Ax,'));
    },

    'Doubly diminished fourth': function DoublyDiminishedFourth(note) {
      _assert2.default.deepEqual(note.interval('dd4'), _.teoria.note('Bbb,'));
    },

    'Diminished fourth': function DiminishedFourth(note) {
      _assert2.default.deepEqual(note.interval('d4'), _.teoria.note('Bb,'));
    },

    'Perfect fourth': function PerfectFourth(note) {
      _assert2.default.deepEqual(note.interval('P4'), _.teoria.note('B,'));
    },

    'Augmented fourth': function AugmentedFourth(note) {
      _assert2.default.deepEqual(note.interval('A4'), _.teoria.note('B#,'));
    },

    'Doubly augmented fourth': function DoublyAugmentedFourth(note) {
      _assert2.default.deepEqual(note.interval('AA4'), _.teoria.note('Bx,'));
    },

    'Doubly diminished fifth': function DoublyDiminishedFifth(note) {
      _assert2.default.deepEqual(note.interval('dd5'), _.teoria.note('Cb'));
    },

    'Diminished fifth': function DiminishedFifth(note) {
      _assert2.default.deepEqual(note.interval('d5'), _.teoria.note('C'));
    },

    'Perfect fifth': function PerfectFifth(note) {
      _assert2.default.deepEqual(note.interval('P5'), _.teoria.note('C#'));
    },

    'Augmented fifth': function AugmentedFifth(note) {
      _assert2.default.deepEqual(note.interval('A5'), _.teoria.note('Cx'));
    },

    'Doubly diminished sixth': function DoublyDiminishedSixth(note) {
      _assert2.default.deepEqual(note.interval('dd6'), _.teoria.note('Dbb'));
    },

    'Diminished sixth': function DiminishedSixth(note) {
      _assert2.default.deepEqual(note.interval('d6'), _.teoria.note('Db'));
    },

    'Minor sixth': function MinorSixth(note) {
      _assert2.default.deepEqual(note.interval('m6'), _.teoria.note('D'));
    },

    'Major sixth': function MajorSixth(note) {
      _assert2.default.deepEqual(note.interval('M6'), _.teoria.note('D#'));
    },

    'Augmented sixth': function AugmentedSixth(note) {
      _assert2.default.deepEqual(note.interval('A6'), _.teoria.note('Dx'));
    },

    'Doubly diminished seventh': function DoublyDiminishedSeventh(note) {
      _assert2.default.deepEqual(note.interval('dd7'), _.teoria.note('Ebb'));
    },

    'Diminished seventh': function DiminishedSeventh(note) {
      _assert2.default.deepEqual(note.interval('d7'), _.teoria.note('Eb'));
    },

    'Minor seventh': function MinorSeventh(note) {
      _assert2.default.deepEqual(note.interval('m7'), _.teoria.note('E'));
    },

    'Major seventh': function MajorSeventh(note) {
      _assert2.default.deepEqual(note.interval('M7'), _.teoria.note('E#'));
    },

    'Augmented seventh': function AugmentedSeventh(note) {
      _assert2.default.deepEqual(note.interval('A7'), _.teoria.note('Ex'));
    },

    'Doubly diminished octave': function DoublyDiminishedOctave(note) {
      _assert2.default.deepEqual(note.interval('dd8'), _.teoria.note('Fb'));
    },

    'Diminished octave': function DiminishedOctave(note) {
      _assert2.default.deepEqual(note.interval('d8'), _.teoria.note('F'));
    },

    'Perfect octave': function PerfectOctave(note) {
      _assert2.default.deepEqual(note.interval('P8'), _.teoria.note('F#'));
    },

    'Augmented octave': function AugmentedOctave(note) {
      _assert2.default.deepEqual(note.interval('A8'), _.teoria.note('Fx'));
    },

    'Minor ninth': function MinorNinth(note) {
      _assert2.default.deepEqual(note.interval('m9'), _.teoria.note('G'));
    },

    'Major ninth': function MajorNinth(note) {
      _assert2.default.deepEqual(note.interval('M9'), _.teoria.note('G#'));
    },

    'Minor tenth': function MinorTenth(note) {
      _assert2.default.deepEqual(note.interval('m10'), _.teoria.note('A'));
    },

    'Major tenth': function MajorTenth(note) {
      _assert2.default.deepEqual(note.interval('M10'), _.teoria.note('A#'));
    },

    'Perfect eleventh': function PerfectEleventh(note) {
      _assert2.default.deepEqual(note.interval('P11'), _.teoria.note('B'));
    },

    'Diminished twelfth': function DiminishedTwelfth(note) {
      _assert2.default.deepEqual(note.interval('d12'), _.teoria.note('c'));
    },

    'Perfect twelfth': function PerfectTwelfth(note) {
      _assert2.default.deepEqual(note.interval('P12'), _.teoria.note('c#'));
    },

    'Minor thirteenth': function MinorThirteenth(note) {
      _assert2.default.deepEqual(note.interval('m13'), _.teoria.note('d'));
    },

    'Major thirteenth': function MajorThirteenth(note) {
      _assert2.default.deepEqual(note.interval('M13'), _.teoria.note('d#'));
    },

    'Minor fourteenth': function MinorFourteenth(note) {
      _assert2.default.deepEqual(note.interval('m14'), _.teoria.note('e'));
    },

    'Major fourteenth': function MajorFourteenth(note) {
      _assert2.default.deepEqual(note.interval('M14'), _.teoria.note('e#'));
    },

    'Doubly diminished second up': function DoublyDiminishedSecondUp() {
      _assert2.default.deepEqual(_.teoria.note('e').interval(_.teoria.note('fbb')), _.teoria.interval('dd2'));
    },

    'Doubly diminished second down': function DoublyDiminishedSecondDown() {
      _assert2.default.deepEqual(_.teoria.note('f').interval(_.teoria.note('ex')), _.teoria.interval('dd-2'));
    }
  },

  'Interval descending': {
    'A major third down from E4': function AMajorThirdDownFromE4() {
      _assert2.default.deepEqual(_.teoria.note('E4').interval('M-3'), _.teoria.note('C4'));
    },

    'Minor second down from C2': function MinorSecondDownFromC2() {
      _assert2.default.deepEqual(_.teoria.note('C2').interval('m-2'), _.teoria.note('B1'));
    },

    'A diminished fifth down from Eb5': function ADiminishedFifthDownFromEb5() {
      _assert2.default.deepEqual(_.teoria.note('Eb5').interval('d-5'), _.teoria.note('A4'));
    },

    'A major ninth down from G#4': function AMajorNinthDownFromG4() {
      _assert2.default.deepEqual(_.teoria.note('G#4').interval('M-9'), _.teoria.note('F#3'));
    },

    'An augmented sixth down from Bb4': function AnAugmentedSixthDownFromBb4() {
      _assert2.default.deepEqual(_.teoria.note('Bb4').interval('A-6'), _.teoria.note('Dbb4'));
    }
  },

  'Interval inversions': {
    'Invert m2 is M7': function InvertM2IsM7() {
      _assert2.default.equal(_.teoria.interval.invert('m2'), 'M7');
    },

    'Invert M2 is m7': function InvertM2IsM7() {
      _assert2.default.equal(_.teoria.interval.invert('M2'), 'm7');
    },

    'Invert m3 is M6': function InvertM3IsM6() {
      _assert2.default.equal(_.teoria.interval.invert('m3'), 'M6');
    },

    'Invert M3 is m6': function InvertM3IsM6() {
      _assert2.default.equal(_.teoria.interval.invert('M3'), 'm6');
    },

    'Invert P4 is P5': function InvertP4IsP5() {
      _assert2.default.equal(_.teoria.interval.invert('P4'), 'P5');
    },

    'Invert A5 is d4': function InvertA5IsD4() {
      _assert2.default.equal(_.teoria.interval.invert('A5'), 'd4');
    }
  },

  'Interval base': {
    'Base of d5 is a fifth': function BaseOfD5IsAFifth() {
      _assert2.default.equal(_.teoria.interval('d5').base(), 'fifth');
    },

    'Base of A7 is a seventh': function BaseOfA7IsASeventh() {
      _assert2.default.equal(_.teoria.interval('A7').base(), 'seventh');
    },

    'Base of m2 is a second': function BaseOfM2IsASecond() {
      _assert2.default.equal(_.teoria.interval('m2').base(), 'second');
    },

    'Base of M6 is a sixth': function BaseOfM6IsASixth() {
      _assert2.default.equal(_.teoria.interval('M6').base(), 'sixth');
    },

    'Base of dd8 is an octave': function BaseOfDd8IsAnOctave() {
      _assert2.default.equal(_.teoria.interval('dd8').base(), 'octave');
    },

    'Base of AA4 is a fourth': function BaseOfAA4IsAFourth() {
      _assert2.default.equal(_.teoria.interval('AA4').base(), 'fourth');
    },

    'Base of d-5 is a fifth': function BaseOfD5IsAFifth() {
      _assert2.default.equal(_.teoria.interval('d-5').base(), 'fifth');
    },

    'Base of m-9 is a second': function BaseOfM9IsASecond() {
      _assert2.default.equal(_.teoria.interval('m-2').base(), 'second');
    },

    'Base of M-13 is a sixth': function BaseOfM13IsASixth() {
      _assert2.default.equal(_.teoria.interval('M-13').base(), 'sixth');
    },

    'Base of P-11 is a fourth': function BaseOfP11IsAFourth() {
      _assert2.default.equal(_.teoria.interval('P-11').base(), 'fourth');
    },

    'Base of AA-7 is a seventh': function BaseOfAA7IsASeventh() {
      _assert2.default.equal(_.teoria.interval('AA-7').base(), 'seventh');
    }
  },

  'Compound Intervals': {
    'A major seventeenth is a compound interval': function AMajorSeventeenthIsACompoundInterval() {
      _assert2.default.equal(_.teoria.interval('M17').isCompound(), true);
    },

    'A major seventeenth\'s simple part is a major third': function AMajorSeventeenthSSimplePartIsAMajorThird() {
      _assert2.default.equal(_.teoria.interval('M17').simple(), 'M3');
    },

    'A descending major fourteenth\'s simple part is a descending major seventh': function ADescendingMajorFourteenthSSimplePartIsADescendingMajorSeventh() {
      _assert2.default.equal(_.teoria.interval('M-14').simple(), 'M-7');
    },

    'A perfect nineteenth\'s simple part is equal to a perfect fifth': function APerfectNineteenthSSimplePartIsEqualToAPerfectFifth() {
      _assert2.default.equal(_.teoria.interval('P19').simple().equal(_.teoria.interval('P5')), true);
    },

    'A perfect nineteenth\'s simple part is not equal to a major sixth': function APerfectNineteenthSSimplePartIsNotEqualToAMajorSixth() {
      _assert2.default.equal(_.teoria.interval('P19').simple().equal(_.teoria.interval('M6')), false);
    },

    'A descending augmented ninth\'s simple part is equal to a descending augmented second': function ADescendingAugmentedNinthSSimplePartIsEqualToADescendingAugmentedSecond() {
      _assert2.default.equal(_.teoria.interval('A-9').simple().equal(_.teoria.interval('A-2')), true);
    },

    'A 22nd has two compound octaves': function A22ndHasTwoCompoundOctaves() {
      _assert2.default.equal(_.teoria.interval('P22').octaves(), 2);
    },

    'A descending fourth has no compound octaves': function ADescendingFourthHasNoCompoundOctaves() {
      _assert2.default.equal(_.teoria.interval('P-4').octaves(), 0);
    },

    'A descending eleventh has one compound octave': function ADescendingEleventhHasOneCompoundOctave() {
      _assert2.default.equal(_.teoria.interval('P-11').octaves(), 1);
    },

    'A descending augmented third has no compound octaves': function ADescendingAugmentedThirdHasNoCompoundOctaves() {
      _assert2.default.equal(_.teoria.interval('A-3').octaves(), 0);
    },

    'A descending major 16th has two compound octaves': function ADescendingMajor16thHasTwoCompoundOctaves() {
      _assert2.default.equal(_.teoria.interval('M-16').octaves(), 2);
    },

    'A major seventh is greater than a minor seventh': function AMajorSeventhIsGreaterThanAMinorSeventh() {
      _assert2.default.equal(_.teoria.interval('M7').greater(_.teoria.interval('m7')), true);
    },

    'An augmented octave is smaller than a major ninth': function AnAugmentedOctaveIsSmallerThanAMajorNinth() {
      _assert2.default.equal(_.teoria.interval('A8').smaller(_.teoria.interval('M9')), true);
    },

    'A major third is equal to another major third': function AMajorThirdIsEqualToAnotherMajorThird() {
      _assert2.default.equal(_.teoria.interval('M3').equal(_.teoria.interval('M3')), true);
    },

    'An augmented fifth is not equal to a minor sixth': function AnAugmentedFifthIsNotEqualToAMinorSixth() {
      _assert2.default.equal(_.teoria.interval('P5').equal(_.teoria.interval('m6')), false);
    },

    'A perfect fifth is not equal to a perfect octave': function APerfectFifthIsNotEqualToAPerfectOctave() {
      _assert2.default.equal(_.teoria.interval('P5').equal(_.teoria.interval('P8')), false);
    },

    'The simple part of a major 23th is a major second': function TheSimplePartOfAMajor23thIsAMajorSecond() {
      _assert2.default.equal(_.teoria.interval('M23').simple(), 'M2');
    }
  },

  'Interval direction': {
    'A3 to C4 is up': function A3ToC4IsUp() {
      _assert2.default.equal(_.teoria.note('A3').interval(_.teoria.note('C4')).direction(), 'up');
    },

    'Bb5 to Bb5 is up (a unison is always up)': function Bb5ToBb5IsUpAUnisonIsAlwaysUp() {
      _assert2.default.equal(_.teoria.note('Bb5').interval(_.teoria.note('Bb5')).direction(), 'up');
    },

    'G#4 to D4 is down': function G4ToD4IsDown() {
      _assert2.default.equal(_.teoria.note('G#4').interval(_.teoria.note('D4')).direction(), 'down');
    },

    'F6 to E6 is down': function F6ToE6IsDown() {
      _assert2.default.equal(_.teoria.note('F6').interval(_.teoria.note('E6')).direction(), 'down');
    },

    'C4 to A3 is up, w. direction set to up': function C4ToA3IsUpWDirectionSetToUp() {
      _assert2.default.equal(_.teoria.note('C4').interval(_.teoria.note('A3')).direction('up').direction(), 'up');
    },

    'A3 to C4 remains up w. direction set to up': function A3ToC4RemainsUpWDirectionSetToUp() {
      _assert2.default.equal(_.teoria.note('A3').interval(_.teoria.note('C4')).direction('up').direction(), 'up');
    },

    'm2 is up': function m2IsUp() {
      _assert2.default.equal(_.teoria.interval('m2').direction(), 'up');
    },

    'P11 is up': function P11IsUp() {
      _assert2.default.equal(_.teoria.interval('P11').direction(), 'up');
    },

    'P1 is up': function P1IsUp() {
      _assert2.default.equal(_.teoria.interval('P1').direction(), 'up');
    },

    'A1 is up': function A1IsUp() {
      _assert2.default.equal(_.teoria.interval('A1').direction(), 'up');
    },

    'd1 is up': function d1IsUp() {
      _assert2.default.equal(_.teoria.interval('d1').direction(), 'up');
    },

    'm-2 is down': function m2IsDown() {
      _assert2.default.equal(_.teoria.interval('m-2').direction(), 'down');
    },

    'M-17 is down': function M17IsDown() {
      _assert2.default.equal(_.teoria.interval('M-17').direction(), 'down');
    },

    'd-2 is down': function d2IsDown() {
      _assert2.default.equal(_.teoria.interval('d-2').direction(), 'down');
    },

    'dd-2 is down (although it is up)': function dd2IsDownAlthoughItIsUp() {
      _assert2.default.equal(_.teoria.interval('dd-2').direction(), 'down');
    },

    'A-2 is down': function A2IsDown() {
      _assert2.default.equal(_.teoria.interval('A-2').direction(), 'down');
    },

    'd-1 is up (all unison values are up)': function d1IsUpAllUnisonValuesAreUp() {
      _assert2.default.equal(_.teoria.interval('d-1').direction(), 'up');
    },

    'A-1 is up (all unison values are up)': function A1IsUpAllUnisonValuesAreUp() {
      _assert2.default.equal(_.teoria.interval('A-1').direction(), 'up');
    }
  },

  'Interval arithmetic': {
    'm3 + M2 = P4': function m3M2P4() {
      _assert2.default.equal(addSimple('m3', 'M2').toString(), 'P4');
    },

    'P4 + P5 = P8': function P4P5P8() {
      _assert2.default.equal(addSimple('P4', 'P5').toString(), 'P8');
    },

    'M6 + A4 = A9': function M6A4A9() {
      _assert2.default.equal(addSimple('M6', 'A4').toString(), 'A9');
    },

    'M-2 + m-2 = m-3': function M2M2M3() {
      _assert2.default.equal(addSimple('M-2', 'm-2').toString(), 'm-3');
    },

    'A11 + M9 = A19': function A11M9A19() {
      _assert2.default.equal(addSimple('A11', 'M9').toString(), 'A19');
    },

    'm-10 + P4 = m-7': function m10P4M7() {
      _assert2.default.equal(addSimple('m-10', 'P4').toString(), 'm-7');
    }
  },

  'Theoretical intervals - Triple augmented': {
    topic: function topic() {
      return _.teoria.note('F').interval(_.teoria.note('Bx'));
    },

    'F to Bx has quality value = 3 (triple augmented)': function FToBxHasQualityValue3TripleAugmented(interval) {
      _assert2.default.equal(interval.qualityValue(), 3);
    },

    '#simple() works': function simpleWorks(interval) {
      _assert2.default.deepEqual(interval.simple().coord, [-11, 20]);
    }
  }
}).export(module);