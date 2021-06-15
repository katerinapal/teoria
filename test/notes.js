"use strict";

var _vows = require("vows");

var _vows2 = _interopRequireDefault(_vows);

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vows2.default.describe('TeoriaNote class').addBatch({
  'A4 - a\'': {
    topic: function topic() {
      return (0, _.note)('A4');
    },

    'Octave should be 4': function OctaveShouldBe4(note) {
      _assert2.default.equal(note.octave(), 4);
    },

    'Note name is lower case': function NoteNameIsLowerCase(note) {
      _assert2.default.equal(note.name(), 'a');
    },

    'A4 is the 49th piano key': function A4IsThe49thPianoKey(note) {
      _assert2.default.equal(note.key(), 49);
    },

    'A4 is expressed a\' in Helmholtz notation': function A4IsExpressedAInHelmholtzNotation(note) {
      _assert2.default.equal(note.helmholtz(), 'a\'');
    },

    'A4 is expressed A4 in scientific notation': function A4IsExpressedA4InScientificNotation(note) {
      _assert2.default.equal(note.scientific(), 'A4');
    },

    'The frequency of A4 is 440hz': function TheFrequencyOfA4Is440hz(note) {
      _assert2.default.equal(note.fq(), 440);
    }
  },

  'C#5 - c#\'\'': {
    topic: function topic() {
      return (0, _.note)('c#\'\'');
    },

    'Octave should be 5': function OctaveShouldBe5(note) {
      _assert2.default.equal(note.octave(), 5);
    },

    'The name attribute of c# is just c': function TheNameAttributeOfCIsJustC(note) {
      _assert2.default.equal(note.name(), 'c');
    },

    'The accidental.sign attribute is #': function TheAccidentalSignAttributeIs(note) {
      _assert2.default.equal(note.accidental(), '#');
    },

    'The accidental.value attribute is 1': function TheAccidentalValueAttributeIs1(note) {
      _assert2.default.equal(note.accidentalValue(), 1);
    },

    'C#5 is the 53rd piano key': function C5IsThe53rdPianoKey(note) {
      _assert2.default.equal(note.key(), 53);
    },

    'C#5 is c#\'\' in Helmholtz notation': function C5IsCInHelmholtzNotation(note) {
      _assert2.default.equal(note.helmholtz(), 'c#\'\'');
    },

    'c#\'\' is C#5 in scientific notation': function cIsC5InScientificNotation(note) {
      _assert2.default.equal(note.scientific(), 'C#5');
    },

    'The frequency of C#5 is approximately 554.365': function TheFrequencyOfC5IsApproximately554365(note) {
      _assert2.default.equal(note.fq(), 554.3652619537442);
    },

    'The interval between C#5 and A4 is a major third': function TheIntervalBetweenC5AndA4IsAMajorThird(note) {
      var a4 = (0, _.note)('A4');

      _assert2.default.deepEqual(note.interval(a4), (0, _.interval)('M-3'));
    },

    'The interval between C#5 and Eb6 is diminished tenth': function TheIntervalBetweenC5AndEb6IsDiminishedTenth(note) {
      var eb6 = (0, _.note)('Eb6');

      _assert2.default.deepEqual(note.interval(eb6), (0, _.interval)('d10'));
    },

    'An diminished fifth away from C#5 is G5': function AnDiminishedFifthAwayFromC5IsG5(note) {
      var g5 = (0, _.note)('G5');

      _assert2.default.deepEqual(note.interval('d5'), g5);
    },

    'The interval between C#4 and Db4 is a diminished second': function TheIntervalBetweenC4AndDb4IsADiminishedSecond() {
      var cis4 = (0, _.note)('c#4');
      var db4 = (0, _.note)('db4');

      _assert2.default.deepEqual(cis4.interval(db4), (0, _.interval)('d2'));
    }
  },

  'Instantiate with coords': {
    '[0, 0] is A4': function isA4() {
      _assert2.default.equal((0, _.note)([0, 0]).scientific(), 'A4');
    },

    '[-4, 4] is C#3': function isC3() {
      _assert2.default.equal((0, _.note)([-4, 4]).scientific(), 'C#3');
    },

    '[3, -4] is F5': function isF5() {
      _assert2.default.equal((0, _.note)([3, -4]).scientific(), 'F5');
    },

    '[4, -7] is Ab4': function isAb4() {
      _assert2.default.equal((0, _.note)([4, -7]).scientific(), 'Ab4');
    }
  },

  'Instantiate from key': {
    '#49 is A4': function isA4() {
      _assert2.default.equal(_.note.fromKey(49).scientific(), 'A4');
    },

    '#20 is E2': function isE2() {
      _assert2.default.equal(_.note.fromKey(20).scientific(), 'E2');
    },

    '#57 is F5': function isF5() {
      _assert2.default.equal(_.note.fromKey(57).scientific(), 'F5');
    },

    '#72 is G#6': function isG6() {
      _assert2.default.equal(_.note.fromKey(72).scientific(), 'G#6');
    }
  },

  'Instantiate from frequency': {
    '391.995Hz is G4': function HzIsG4() {
      _assert2.default.equal(_.note.fromFrequency(391.995).note.scientific(), 'G4');
    },

    '220.000Hz is A3': function HzIsA3() {
      _assert2.default.equal(_.note.fromFrequency(220.000).note.scientific(), 'A3');
    },

    '155.563Hz is Eb3': function HzIsEb3() {
      _assert2.default.equal(_.note.fromFrequency(155.563).note.scientific(), 'Eb3');
    },

    '2959.96Hz is F#7': function HzIsF7() {
      _assert2.default.equal(_.note.fromFrequency(2959.96).note.scientific(), 'F#7');
    }
  },

  'Instantiate from MIDI': {
    'MIDI#36 is C2': function MIDI36IsC2() {
      _assert2.default.equal(_.note.fromMIDI(36).scientific(), 'C2');
    },

    'MIDI#77 is F5': function MIDI77IsF5() {
      _assert2.default.equal(_.note.fromMIDI(77).scientific(), 'F5');
    },

    'MIDI#61 is Db4': function MIDI61IsDb4() {
      _assert2.default.equal(_.note.fromMIDI(61).scientific(), 'Db4');
    },

    'MIDI#80 is G#5': function MIDI80IsG5() {
      _assert2.default.equal(_.note.fromMIDI(80).scientific(), 'G#5');
    }
  },

  'Return MIDI note number': {
    'MIDI#36 is C2': function MIDI36IsC2() {
      _assert2.default.equal((0, _.note)('C2').midi(), 36);
    },

    'MIDI#77 is F5': function MIDI77IsF5() {
      _assert2.default.equal((0, _.note)('F5').midi(), 77);
    },

    'MIDI#61 is Db4': function MIDI61IsDb4() {
      _assert2.default.equal((0, _.note)('Db4').midi(), 61);
    },

    'MIDI#80 is G#5': function MIDI80IsG5() {
      _assert2.default.equal((0, _.note)('G#5').midi(), 80);
    }
  },

  'Chroma': {
    'C has chroma 0': function CHasChroma0() {
      _assert2.default.equal((0, _.note)('c').chroma(), 0);
    },

    'C# has chroma 1': function CHasChroma1() {
      _assert2.default.equal((0, _.note)('c#').chroma(), 1);
    },

    'B has chroma 11': function BHasChroma11() {
      _assert2.default.equal((0, _.note)('b').chroma(), 11);
    },

    'Db has chroma 1': function DbHasChroma1() {
      _assert2.default.equal((0, _.note)('db').chroma(), 1);
    },

    'Dbb has chroma 0': function DbbHasChroma0() {
      _assert2.default.equal((0, _.note)('dbb').chroma(), 0);
    },

    'E has chroma 4': function EHasChroma4() {
      _assert2.default.equal((0, _.note)('e').chroma(), 4);
    },

    'F has chroma 5': function FHasChroma5() {
      _assert2.default.equal((0, _.note)('f').chroma(), 5);
    },

    'Fb has chroma 4': function FbHasChroma4() {
      _assert2.default.equal((0, _.note)('fb').chroma(), 4);
    },

    'H# has chroma 0': function HHasChroma0() {
      _assert2.default.equal((0, _.note)('h#').chroma(), 0);
    },

    'Bx has chroma 1': function BxHasChroma1() {
      _assert2.default.equal((0, _.note)('bx').chroma(), 1);
    },

    'Cbb has chroma 10': function CbbHasChroma10() {
      _assert2.default.equal((0, _.note)('cbb').chroma(), 10);
    }
  },

  'Scale Degrees': {
    'Eb is scale degree 1 (tonic) in an Eb minor scale': function EbIsScaleDegree1TonicInAnEbMinorScale() {
      var note = (0, _.note)('eb');
      _assert2.default.equal(note.scaleDegree((0, _.scale)('eb', 'major')), 1);
    },

    'E is scale degree 3 in a C# dorian': function EIsScaleDegree3InACDorian() {
      var note = (0, _.note)('e');
      _assert2.default.equal(note.scaleDegree((0, _.scale)('c#', 'dorian')), 3);
    },

    'C is scale degree 0 in a D major scale (not in scale)': function CIsScaleDegree0InADMajorScaleNotInScale() {
      var note = (0, _.note)('c');
      _assert2.default.equal(note.scaleDegree((0, _.scale)('d', 'major')), 0);
    },

    'Bb is scale degree 7 in a C minor': function BbIsScaleDegree7InACMinor() {
      var note = (0, _.note)('bb');
      _assert2.default.equal(note.scaleDegree((0, _.scale)('c', 'minor')), 7);
    },

    'Db is scale degree 4 in an Ab major scale': function DbIsScaleDegree4InAnAbMajorScale() {
      var note = (0, _.note)('db');
      _assert2.default.equal(note.scaleDegree((0, _.scale)('ab', 'major')), 4);
    },

    'A# is scale degree 0 in a G minor scale': function AIsScaleDegree0InAGMinorScale() {
      var note = (0, _.note)('a#');
      _assert2.default.equal(note.scaleDegree((0, _.scale)('g', 'minor')), 0);
    }
  },

  'Enharmonics': {
    'c is enharmonic with dbb and b#': function cIsEnharmonicWithDbbAndB() {
      _assert2.default.deepEqual((0, _.note)('c4').enharmonics(), ['dbb4', 'b#3'].map(_.note));
    },

    'fb is enharmonic with e and dx': function fbIsEnharmonicWithEAndDx() {
      _assert2.default.deepEqual((0, _.note)('fb4').enharmonics(), ['e4', 'dx4'].map(_.note));
    },

    'cb is enharmonic with ax and b': function cbIsEnharmonicWithAxAndB() {
      _assert2.default.deepEqual((0, _.note)('cb4').enharmonics(), ['b3', 'ax3'].map(_.note));
    }
  },

  'Enharmonics with only one accidental': {
    'c is enharmonic with b#': function cIsEnharmonicWithB() {
      _assert2.default.deepEqual((0, _.note)('c4').enharmonics(true), ['b#3'].map(_.note));
    },

    'fb is enharmonic with e': function fbIsEnharmonicWithE() {
      _assert2.default.deepEqual((0, _.note)('fb4').enharmonics(true), ['e4'].map(_.note));
    },

    'cb is enharmonic with b': function cbIsEnharmonicWithB() {
      _assert2.default.deepEqual((0, _.note)('cb4').enharmonics(true), ['b3'].map(_.note));
    }
  }
}).export(module);