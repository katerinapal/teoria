"use strict";

var _vows = require("vows");

var _vows2 = _interopRequireDefault(_vows);

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addSimple(interval1, interval2) {
  return (0, _.interval)(interval1).add((0, _.interval)(interval2));
}

_vows2.default.describe('Intervals').addBatch({
  'Relative Intervals': {
    topic: function topic() {
      return (0, _.note)('F#,');
    },

    'Doubly diminished second': function DoublyDiminishedSecond(note) {
      _assert2.default.deepEqual(note.interval('dd2'), (0, _.note)('Gbb,'));
    },

    'Diminished second': function DiminishedSecond(note) {
      _assert2.default.deepEqual(note.interval('d2'), (0, _.note)('Gb,'));
    },

    'Diminished second, API method two': function DiminishedSecondAPIMethodTwo(note) {
      _assert2.default.deepEqual((0, _.interval)(note, (0, _.interval)('d2')), (0, _.note)('Gb,'));
    },

    'Diminished second, API method three': function DiminishedSecondAPIMethodThree(note) {
      _assert2.default.deepEqual(note.interval((0, _.interval)('d2')), (0, _.note)('Gb,'));
    },

    'Minor second': function MinorSecond(note) {
      _assert2.default.deepEqual(note.interval('m2'), (0, _.note)('G,'));
    },

    'Major second': function MajorSecond(note) {
      _assert2.default.deepEqual(note.interval('M2'), (0, _.note)('G#,'));
    },

    'Augmented second': function AugmentedSecond(note) {
      _assert2.default.deepEqual(note.interval('A2'), (0, _.note)('Gx,'));
    },

    'Doubly diminished third': function DoublyDiminishedThird(note) {
      _assert2.default.deepEqual(note.interval('dd3'), (0, _.note)('Abb,'));
    },

    'Diminished third': function DiminishedThird(note) {
      _assert2.default.deepEqual(note.interval('d3'), (0, _.note)('Ab,'));
    },

    'Minor third': function MinorThird(note) {
      _assert2.default.deepEqual(note.interval('m3'), (0, _.note)('A,'));
    },

    'Major third': function MajorThird(note) {
      _assert2.default.deepEqual(note.interval('M3'), (0, _.note)('A#,'));
    },

    'Augmented third': function AugmentedThird(note) {
      _assert2.default.deepEqual(note.interval('A3'), (0, _.note)('Ax,'));
    },

    'Doubly diminished fourth': function DoublyDiminishedFourth(note) {
      _assert2.default.deepEqual(note.interval('dd4'), (0, _.note)('Bbb,'));
    },

    'Diminished fourth': function DiminishedFourth(note) {
      _assert2.default.deepEqual(note.interval('d4'), (0, _.note)('Bb,'));
    },

    'Perfect fourth': function PerfectFourth(note) {
      _assert2.default.deepEqual(note.interval('P4'), (0, _.note)('B,'));
    },

    'Augmented fourth': function AugmentedFourth(note) {
      _assert2.default.deepEqual(note.interval('A4'), (0, _.note)('B#,'));
    },

    'Doubly augmented fourth': function DoublyAugmentedFourth(note) {
      _assert2.default.deepEqual(note.interval('AA4'), (0, _.note)('Bx,'));
    },

    'Doubly diminished fifth': function DoublyDiminishedFifth(note) {
      _assert2.default.deepEqual(note.interval('dd5'), (0, _.note)('Cb'));
    },

    'Diminished fifth': function DiminishedFifth(note) {
      _assert2.default.deepEqual(note.interval('d5'), (0, _.note)('C'));
    },

    'Perfect fifth': function PerfectFifth(note) {
      _assert2.default.deepEqual(note.interval('P5'), (0, _.note)('C#'));
    },

    'Augmented fifth': function AugmentedFifth(note) {
      _assert2.default.deepEqual(note.interval('A5'), (0, _.note)('Cx'));
    },

    'Doubly diminished sixth': function DoublyDiminishedSixth(note) {
      _assert2.default.deepEqual(note.interval('dd6'), (0, _.note)('Dbb'));
    },

    'Diminished sixth': function DiminishedSixth(note) {
      _assert2.default.deepEqual(note.interval('d6'), (0, _.note)('Db'));
    },

    'Minor sixth': function MinorSixth(note) {
      _assert2.default.deepEqual(note.interval('m6'), (0, _.note)('D'));
    },

    'Major sixth': function MajorSixth(note) {
      _assert2.default.deepEqual(note.interval('M6'), (0, _.note)('D#'));
    },

    'Augmented sixth': function AugmentedSixth(note) {
      _assert2.default.deepEqual(note.interval('A6'), (0, _.note)('Dx'));
    },

    'Doubly diminished seventh': function DoublyDiminishedSeventh(note) {
      _assert2.default.deepEqual(note.interval('dd7'), (0, _.note)('Ebb'));
    },

    'Diminished seventh': function DiminishedSeventh(note) {
      _assert2.default.deepEqual(note.interval('d7'), (0, _.note)('Eb'));
    },

    'Minor seventh': function MinorSeventh(note) {
      _assert2.default.deepEqual(note.interval('m7'), (0, _.note)('E'));
    },

    'Major seventh': function MajorSeventh(note) {
      _assert2.default.deepEqual(note.interval('M7'), (0, _.note)('E#'));
    },

    'Augmented seventh': function AugmentedSeventh(note) {
      _assert2.default.deepEqual(note.interval('A7'), (0, _.note)('Ex'));
    },

    'Doubly diminished octave': function DoublyDiminishedOctave(note) {
      _assert2.default.deepEqual(note.interval('dd8'), (0, _.note)('Fb'));
    },

    'Diminished octave': function DiminishedOctave(note) {
      _assert2.default.deepEqual(note.interval('d8'), (0, _.note)('F'));
    },

    'Perfect octave': function PerfectOctave(note) {
      _assert2.default.deepEqual(note.interval('P8'), (0, _.note)('F#'));
    },

    'Augmented octave': function AugmentedOctave(note) {
      _assert2.default.deepEqual(note.interval('A8'), (0, _.note)('Fx'));
    },

    'Minor ninth': function MinorNinth(note) {
      _assert2.default.deepEqual(note.interval('m9'), (0, _.note)('G'));
    },

    'Major ninth': function MajorNinth(note) {
      _assert2.default.deepEqual(note.interval('M9'), (0, _.note)('G#'));
    },

    'Minor tenth': function MinorTenth(note) {
      _assert2.default.deepEqual(note.interval('m10'), (0, _.note)('A'));
    },

    'Major tenth': function MajorTenth(note) {
      _assert2.default.deepEqual(note.interval('M10'), (0, _.note)('A#'));
    },

    'Perfect eleventh': function PerfectEleventh(note) {
      _assert2.default.deepEqual(note.interval('P11'), (0, _.note)('B'));
    },

    'Diminished twelfth': function DiminishedTwelfth(note) {
      _assert2.default.deepEqual(note.interval('d12'), (0, _.note)('c'));
    },

    'Perfect twelfth': function PerfectTwelfth(note) {
      _assert2.default.deepEqual(note.interval('P12'), (0, _.note)('c#'));
    },

    'Minor thirteenth': function MinorThirteenth(note) {
      _assert2.default.deepEqual(note.interval('m13'), (0, _.note)('d'));
    },

    'Major thirteenth': function MajorThirteenth(note) {
      _assert2.default.deepEqual(note.interval('M13'), (0, _.note)('d#'));
    },

    'Minor fourteenth': function MinorFourteenth(note) {
      _assert2.default.deepEqual(note.interval('m14'), (0, _.note)('e'));
    },

    'Major fourteenth': function MajorFourteenth(note) {
      _assert2.default.deepEqual(note.interval('M14'), (0, _.note)('e#'));
    },

    'Doubly diminished second up': function DoublyDiminishedSecondUp() {
      _assert2.default.deepEqual((0, _.note)('e').interval((0, _.note)('fbb')), (0, _.interval)('dd2'));
    },

    'Doubly diminished second down': function DoublyDiminishedSecondDown() {
      _assert2.default.deepEqual((0, _.note)('f').interval((0, _.note)('ex')), (0, _.interval)('dd-2'));
    }
  },

  'Interval descending': {
    'A major third down from E4': function AMajorThirdDownFromE4() {
      _assert2.default.deepEqual((0, _.note)('E4').interval('M-3'), (0, _.note)('C4'));
    },

    'Minor second down from C2': function MinorSecondDownFromC2() {
      _assert2.default.deepEqual((0, _.note)('C2').interval('m-2'), (0, _.note)('B1'));
    },

    'A diminished fifth down from Eb5': function ADiminishedFifthDownFromEb5() {
      _assert2.default.deepEqual((0, _.note)('Eb5').interval('d-5'), (0, _.note)('A4'));
    },

    'A major ninth down from G#4': function AMajorNinthDownFromG4() {
      _assert2.default.deepEqual((0, _.note)('G#4').interval('M-9'), (0, _.note)('F#3'));
    },

    'An augmented sixth down from Bb4': function AnAugmentedSixthDownFromBb4() {
      _assert2.default.deepEqual((0, _.note)('Bb4').interval('A-6'), (0, _.note)('Dbb4'));
    }
  },

  'Interval inversions': {
    'Invert m2 is M7': function InvertM2IsM7() {
      _assert2.default.equal(_.interval.invert('m2'), 'M7');
    },

    'Invert M2 is m7': function InvertM2IsM7() {
      _assert2.default.equal(_.interval.invert('M2'), 'm7');
    },

    'Invert m3 is M6': function InvertM3IsM6() {
      _assert2.default.equal(_.interval.invert('m3'), 'M6');
    },

    'Invert M3 is m6': function InvertM3IsM6() {
      _assert2.default.equal(_.interval.invert('M3'), 'm6');
    },

    'Invert P4 is P5': function InvertP4IsP5() {
      _assert2.default.equal(_.interval.invert('P4'), 'P5');
    },

    'Invert A5 is d4': function InvertA5IsD4() {
      _assert2.default.equal(_.interval.invert('A5'), 'd4');
    }
  },

  'Interval base': {
    'Base of d5 is a fifth': function BaseOfD5IsAFifth() {
      _assert2.default.equal((0, _.interval)('d5').base(), 'fifth');
    },

    'Base of A7 is a seventh': function BaseOfA7IsASeventh() {
      _assert2.default.equal((0, _.interval)('A7').base(), 'seventh');
    },

    'Base of m2 is a second': function BaseOfM2IsASecond() {
      _assert2.default.equal((0, _.interval)('m2').base(), 'second');
    },

    'Base of M6 is a sixth': function BaseOfM6IsASixth() {
      _assert2.default.equal((0, _.interval)('M6').base(), 'sixth');
    },

    'Base of dd8 is an octave': function BaseOfDd8IsAnOctave() {
      _assert2.default.equal((0, _.interval)('dd8').base(), 'octave');
    },

    'Base of AA4 is a fourth': function BaseOfAA4IsAFourth() {
      _assert2.default.equal((0, _.interval)('AA4').base(), 'fourth');
    },

    'Base of d-5 is a fifth': function BaseOfD5IsAFifth() {
      _assert2.default.equal((0, _.interval)('d-5').base(), 'fifth');
    },

    'Base of m-9 is a second': function BaseOfM9IsASecond() {
      _assert2.default.equal((0, _.interval)('m-2').base(), 'second');
    },

    'Base of M-13 is a sixth': function BaseOfM13IsASixth() {
      _assert2.default.equal((0, _.interval)('M-13').base(), 'sixth');
    },

    'Base of P-11 is a fourth': function BaseOfP11IsAFourth() {
      _assert2.default.equal((0, _.interval)('P-11').base(), 'fourth');
    },

    'Base of AA-7 is a seventh': function BaseOfAA7IsASeventh() {
      _assert2.default.equal((0, _.interval)('AA-7').base(), 'seventh');
    }
  },

  'Compound Intervals': {
    'A major seventeenth is a compound interval': function AMajorSeventeenthIsACompoundInterval() {
      _assert2.default.equal((0, _.interval)('M17').isCompound(), true);
    },

    'A major seventeenth\'s simple part is a major third': function AMajorSeventeenthSSimplePartIsAMajorThird() {
      _assert2.default.equal((0, _.interval)('M17').simple(), 'M3');
    },

    'A descending major fourteenth\'s simple part is a descending major seventh': function ADescendingMajorFourteenthSSimplePartIsADescendingMajorSeventh() {
      _assert2.default.equal((0, _.interval)('M-14').simple(), 'M-7');
    },

    'A perfect nineteenth\'s simple part is equal to a perfect fifth': function APerfectNineteenthSSimplePartIsEqualToAPerfectFifth() {
      _assert2.default.equal((0, _.interval)('P19').simple().equal((0, _.interval)('P5')), true);
    },

    'A perfect nineteenth\'s simple part is not equal to a major sixth': function APerfectNineteenthSSimplePartIsNotEqualToAMajorSixth() {
      _assert2.default.equal((0, _.interval)('P19').simple().equal((0, _.interval)('M6')), false);
    },

    'A descending augmented ninth\'s simple part is equal to a descending augmented second': function ADescendingAugmentedNinthSSimplePartIsEqualToADescendingAugmentedSecond() {
      _assert2.default.equal((0, _.interval)('A-9').simple().equal((0, _.interval)('A-2')), true);
    },

    'A 22nd has two compound octaves': function A22ndHasTwoCompoundOctaves() {
      _assert2.default.equal((0, _.interval)('P22').octaves(), 2);
    },

    'A descending fourth has no compound octaves': function ADescendingFourthHasNoCompoundOctaves() {
      _assert2.default.equal((0, _.interval)('P-4').octaves(), 0);
    },

    'A descending eleventh has one compound octave': function ADescendingEleventhHasOneCompoundOctave() {
      _assert2.default.equal((0, _.interval)('P-11').octaves(), 1);
    },

    'A descending augmented third has no compound octaves': function ADescendingAugmentedThirdHasNoCompoundOctaves() {
      _assert2.default.equal((0, _.interval)('A-3').octaves(), 0);
    },

    'A descending major 16th has two compound octaves': function ADescendingMajor16thHasTwoCompoundOctaves() {
      _assert2.default.equal((0, _.interval)('M-16').octaves(), 2);
    },

    'A major seventh is greater than a minor seventh': function AMajorSeventhIsGreaterThanAMinorSeventh() {
      _assert2.default.equal((0, _.interval)('M7').greater((0, _.interval)('m7')), true);
    },

    'An augmented octave is smaller than a major ninth': function AnAugmentedOctaveIsSmallerThanAMajorNinth() {
      _assert2.default.equal((0, _.interval)('A8').smaller((0, _.interval)('M9')), true);
    },

    'A major third is equal to another major third': function AMajorThirdIsEqualToAnotherMajorThird() {
      _assert2.default.equal((0, _.interval)('M3').equal((0, _.interval)('M3')), true);
    },

    'An augmented fifth is not equal to a minor sixth': function AnAugmentedFifthIsNotEqualToAMinorSixth() {
      _assert2.default.equal((0, _.interval)('P5').equal((0, _.interval)('m6')), false);
    },

    'A perfect fifth is not equal to a perfect octave': function APerfectFifthIsNotEqualToAPerfectOctave() {
      _assert2.default.equal((0, _.interval)('P5').equal((0, _.interval)('P8')), false);
    },

    'The simple part of a major 23th is a major second': function TheSimplePartOfAMajor23thIsAMajorSecond() {
      _assert2.default.equal((0, _.interval)('M23').simple(), 'M2');
    }
  },

  'Interval direction': {
    'A3 to C4 is up': function A3ToC4IsUp() {
      _assert2.default.equal((0, _.note)('A3').interval((0, _.note)('C4')).direction(), 'up');
    },

    'Bb5 to Bb5 is up (a unison is always up)': function Bb5ToBb5IsUpAUnisonIsAlwaysUp() {
      _assert2.default.equal((0, _.note)('Bb5').interval((0, _.note)('Bb5')).direction(), 'up');
    },

    'G#4 to D4 is down': function G4ToD4IsDown() {
      _assert2.default.equal((0, _.note)('G#4').interval((0, _.note)('D4')).direction(), 'down');
    },

    'F6 to E6 is down': function F6ToE6IsDown() {
      _assert2.default.equal((0, _.note)('F6').interval((0, _.note)('E6')).direction(), 'down');
    },

    'C4 to A3 is up, w. direction set to up': function C4ToA3IsUpWDirectionSetToUp() {
      _assert2.default.equal((0, _.note)('C4').interval((0, _.note)('A3')).direction('up').direction(), 'up');
    },

    'A3 to C4 remains up w. direction set to up': function A3ToC4RemainsUpWDirectionSetToUp() {
      _assert2.default.equal((0, _.note)('A3').interval((0, _.note)('C4')).direction('up').direction(), 'up');
    },

    'm2 is up': function m2IsUp() {
      _assert2.default.equal((0, _.interval)('m2').direction(), 'up');
    },

    'P11 is up': function P11IsUp() {
      _assert2.default.equal((0, _.interval)('P11').direction(), 'up');
    },

    'P1 is up': function P1IsUp() {
      _assert2.default.equal((0, _.interval)('P1').direction(), 'up');
    },

    'A1 is up': function A1IsUp() {
      _assert2.default.equal((0, _.interval)('A1').direction(), 'up');
    },

    'd1 is up': function d1IsUp() {
      _assert2.default.equal((0, _.interval)('d1').direction(), 'up');
    },

    'm-2 is down': function m2IsDown() {
      _assert2.default.equal((0, _.interval)('m-2').direction(), 'down');
    },

    'M-17 is down': function M17IsDown() {
      _assert2.default.equal((0, _.interval)('M-17').direction(), 'down');
    },

    'd-2 is down': function d2IsDown() {
      _assert2.default.equal((0, _.interval)('d-2').direction(), 'down');
    },

    'dd-2 is down (although it is up)': function dd2IsDownAlthoughItIsUp() {
      _assert2.default.equal((0, _.interval)('dd-2').direction(), 'down');
    },

    'A-2 is down': function A2IsDown() {
      _assert2.default.equal((0, _.interval)('A-2').direction(), 'down');
    },

    'd-1 is up (all unison values are up)': function d1IsUpAllUnisonValuesAreUp() {
      _assert2.default.equal((0, _.interval)('d-1').direction(), 'up');
    },

    'A-1 is up (all unison values are up)': function A1IsUpAllUnisonValuesAreUp() {
      _assert2.default.equal((0, _.interval)('A-1').direction(), 'up');
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
      return (0, _.note)('F').interval((0, _.note)('Bx'));
    },

    'F to Bx has quality value = 3 (triple augmented)': function FToBxHasQualityValue3TripleAugmented(interval) {
      _assert2.default.equal(interval.qualityValue(), 3);
    },

    '#simple() works': function simpleWorks(interval) {
      _assert2.default.deepEqual(interval.simple().coord, [-11, 20]);
    }
  }
}).export(module);