"use strict";

var _vows = require("vows");

var _vows2 = _interopRequireDefault(_vows);

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vows2.default.describe('Chords').addBatch({
  'Chord parser': {
    'Emaj7': function Emaj7() {
      _assert2.default.deepEqual(_.teoria.chord('Emaj7').simple(), ['e', 'g#', 'b', 'd#']);
    },

    'A+': function A() {
      _assert2.default.deepEqual(_.teoria.chord('A+').simple(), ['a', 'c#', 'e#']);
    },

    'Bb+': function Bb() {
      _assert2.default.deepEqual(_.teoria.chord('Bb+').simple(), ['bb', 'd', 'f#']);
    },

    'F#maj7': function FMaj7() {
      _assert2.default.deepEqual(_.teoria.chord('F#maj7').simple(), ['f#', 'a#', 'c#', 'e#']);
    },

    'Hmaj7': function Hmaj7() {
      _assert2.default.deepEqual(_.teoria.chord('Hmaj7').simple(), ['b', 'd#', 'f#', 'a#']);
    },

    'H#maj7': function HMaj7() {
      _assert2.default.deepEqual(_.teoria.chord('H#maj7').simple(), ['b#', 'dx', 'fx', 'ax']);
    },

    'C7b5': function C7b5() {
      _assert2.default.deepEqual(_.teoria.chord('C7b5').simple(), ['c', 'e', 'gb', 'bb']);
    },

    'Eb7b5': function Eb7b5() {
      _assert2.default.deepEqual(_.teoria.chord('Eb7b5').simple(), ['eb', 'g', 'bbb', 'db']);
    },

    'D#7b5': function D7b5() {
      _assert2.default.deepEqual(_.teoria.chord('D#7b5').simple(), ['d#', 'fx', 'a', 'c#']);
    },

    'C9': function C9() {
      _assert2.default.deepEqual(_.teoria.chord('C9').simple(), ['c', 'e', 'g', 'bb', 'd']);
    },

    'Eb9': function Eb9() {
      _assert2.default.deepEqual(_.teoria.chord('Eb9').simple(), ['eb', 'g', 'bb', 'db', 'f']);
    },

    'G#(#9)': function G9() {
      _assert2.default.deepEqual(_.teoria.chord('G#(#9)').simple(), ['g#', 'b#', 'd#', 'f#', 'ax']);
    },

    'Ab(b9)': function AbB9() {
      _assert2.default.deepEqual(_.teoria.chord('Ab(b9)').simple(), ['ab', 'c', 'eb', 'gb', 'bbb']);
    },

    'F#(#11)': function F11() {
      _assert2.default.deepEqual(_.teoria.chord('F#(#11)').simple(), ['f#', 'a#', 'c#', 'e', 'g#', 'b#']);
    },

    'Ab13': function Ab13() {
      _assert2.default.deepEqual(_.teoria.chord('Ab13').simple(), ['ab', 'c', 'eb', 'gb', 'bb', 'db', 'f']);
    },

    'C7sus4': function C7sus4() {
      _assert2.default.deepEqual(_.teoria.chord('C7sus4').simple(), ['c', 'f', 'g', 'bb']);
    },

    'Cmaj9': function Cmaj9() {
      _assert2.default.deepEqual(_.teoria.chord('Cmaj9').simple(), ['c', 'e', 'g', 'b', 'd']);
    },

    'Dmb6': function Dmb6() {
      _assert2.default.deepEqual(_.teoria.chord('Dmb6').simple(), ['d', 'f', 'a', 'bb']);
    },

    'C#(#5#9)': function C59() {
      _assert2.default.deepEqual(_.teoria.chord('C#(#5#9)').simple(), ['c#', 'e#', 'gx', 'b', 'dx']);
    },

    'Cm(maj7)': function CmMaj7() {
      _assert2.default.deepEqual(_.teoria.chord('Cm(maj7)').simple(), ['c', 'eb', 'g', 'b']);
    },

    'F#m(11b5b9)': function FM11b5b9() {
      _assert2.default.deepEqual(_.teoria.chord('F#m(11b5b9)').simple(), ['f#', 'a', 'c', 'e', 'g', 'b']);
    },

    'C/e': function CE() {
      _assert2.default.deepEqual(_.teoria.chord('C/e').simple(), ['e', 'c', 'g']);
    },

    'A7/g': function A7G() {
      _assert2.default.deepEqual(_.teoria.chord('A7/g').simple(), ['g', 'a', 'c#', 'e']);
    },

    'G/f#': function GF() {
      _assert2.default.deepEqual(_.teoria.chord('G/f#').simple(), ['f#', 'g', 'b', 'd']);
    },

    'C6': function C6() {
      _assert2.default.deepEqual(_.teoria.chord('C6').simple(), ['c', 'e', 'g', 'a']);
    },

    'A#6': function A6() {
      _assert2.default.deepEqual(_.teoria.chord('A#6').simple(), ['a#', 'cx', 'e#', 'fx']);
    },

    'Bb6': function Bb6() {
      _assert2.default.deepEqual(_.teoria.chord('Bb6').simple(), ['bb', 'd', 'f', 'g']);
    },

    'Am6': function Am6() {
      _assert2.default.deepEqual(_.teoria.chord('Am6').simple(), ['a', 'c', 'e', 'f#']);
    },

    'D(#6)': function D6() {
      _assert2.default.deepEqual(_.teoria.chord('D(#6)').simple(), ['d', 'f#', 'a', 'b#']);
    },

    'Eo': function Eo() {
      _assert2.default.deepEqual(_.teoria.chord('Eo').simple(), ['e', 'g', 'bb']);
    },

    'Eø': function E() {
      _assert2.default.deepEqual(_.teoria.chord('Eø').simple(), ['e', 'g', 'bb', 'd']);
    },

    'Do': function Do() {
      _assert2.default.deepEqual(_.teoria.chord('Do').simple(), ['d', 'f', 'ab']);
    },

    'Dø': function D() {
      _assert2.default.deepEqual(_.teoria.chord('Dø').simple(), ['d', 'f', 'ab', 'c']);
    },

    'Fo7': function Fo7() {
      _assert2.default.deepEqual(_.teoria.chord('Fo7').simple(), ['f', 'ab', 'cb', 'ebb']);
    },

    'G#ø7': function G7() {
      _assert2.default.deepEqual(_.teoria.chord('G#ø7').simple(), ['g#', 'b', 'd', 'f#']);
    },

    'Cmin': function Cmin() {
      _assert2.default.deepEqual(_.teoria.chord('Cmin').simple(), ['c', 'eb', 'g']);
    },

    'Bmin11': function Bmin11() {
      _assert2.default.deepEqual(_.teoria.chord('Bmin11').simple(), ['b', 'd', 'f#', 'a', 'c#', 'e']);
    },

    'C+M7': function CM7() {
      _assert2.default.deepEqual(_.teoria.chord('C+M7').simple(), ['c', 'e', 'g#', 'b']);
    },

    'Bbdom7b5': function Bbdom7b5() {
      _assert2.default.deepEqual(_.teoria.chord('Bbdom7b5').simple(), ['bb', 'd', 'fb', 'ab']);
    },

    'E5': function E5() {
      _assert2.default.deepEqual(_.teoria.chord('E5').simple(), ['e', 'b']);
    },

    'A5': function A5() {
      _assert2.default.deepEqual(_.teoria.chord('A5').simple(), ['a', 'e']);
    },

    'C13#9b5': function C139b5() {
      _assert2.default.deepEqual(_.teoria.chord('C13#9b5').simple(), ['c', 'e', 'gb', 'bb', 'd#', 'f', 'a']);
    },

    'D13#5b9': function D135b9() {
      _assert2.default.deepEqual(_.teoria.chord('D13#5b9').simple(), ['d', 'f#', 'a#', 'c', 'eb', 'g', 'b']);
    },

    'C6/9': function C69() {
      _assert2.default.deepEqual(_.teoria.chord('C6/9').simple(), ['c', 'e', 'g', 'a', 'd']);
    },

    'Ab6/9': function Ab69() {
      _assert2.default.deepEqual(_.teoria.chord('Ab6/9').simple(), ['ab', 'c', 'eb', 'f', 'bb']);
    },

    'CM7': function CM7() {
      _assert2.default.deepEqual(_.teoria.chord('CM7').simple(), ['c', 'e', 'g', 'b']);
    },

    'CmM7': function CmM7() {
      _assert2.default.deepEqual(_.teoria.chord('CmM7').simple(), ['c', 'eb', 'g', 'b']);
    },

    'DM': function DM() {
      _assert2.default.deepEqual(_.teoria.chord('DM').simple(), ['d', 'f#', 'a']);
    },

    'EM#5': function EM5() {
      _assert2.default.deepEqual(_.teoria.chord('EM#5').simple(), ['e', 'g#', 'b#']);
    },

    'FM9': function FM9() {
      _assert2.default.deepEqual(_.teoria.chord('FM9').simple(), ['f', 'a', 'c', 'e', 'g']);
    },

    'Dmi': function Dmi() {
      _assert2.default.deepEqual(_.teoria.chord('Dmi').simple(), ['d', 'f', 'a']);
    },

    'Emi7': function Emi7() {
      _assert2.default.deepEqual(_.teoria.chord('Emi7').simple(), ['e', 'g', 'b', 'd']);
    },

    'Dma': function Dma() {
      _assert2.default.deepEqual(_.teoria.chord('Dma').simple(), ['d', 'f#', 'a']);
    },

    'Ema9': function Ema9() {
      _assert2.default.deepEqual(_.teoria.chord('Ema9').simple(), ['e', 'g#', 'b', 'd#', 'f#']);
    }
  },

  'Case doesn\'t matter': {
    'BbDom': function BbDom() {
      _assert2.default.deepEqual(_.teoria.chord('BbDom').simple(), _.teoria.chord('Bbdom').simple());
    },

    'EbMaj9': function EbMaj9() {
      _assert2.default.deepEqual(_.teoria.chord('EbMaj9').simple(), _.teoria.chord('Ebmaj9').simple());
    },

    'ASus4': function ASus4() {
      _assert2.default.deepEqual(_.teoria.chord('ASus4').simple(), _.teoria.chord('Asus4').simple());
    },

    'EAdd9': function EAdd9() {
      _assert2.default.deepEqual(_.teoria.chord('EAdd9').simple(), _.teoria.chord('Eadd9').simple());
    }
  },

  'Chord Methods': {
    '#bass of Cmaj7': function bassOfCmaj7() {
      _assert2.default.equal(_.teoria.chord('Cmaj7').bass().toString(true), 'c');
    },

    '#bass of A/C#': function bassOfAC() {
      _assert2.default.equal(_.teoria.chord('A/C#').bass().toString(true), 'c#');
    },

    '#bass of D6/9': function bassOfD69() {
      _assert2.default.equal(_.teoria.chord('D6/9').bass().toString(true), 'd');
    },

    '#quality() of Bmaj7': function qualityOfBmaj7() {
      _assert2.default.equal(_.teoria.chord('Bmaj7').quality(), 'major');
    },

    '#quality() of E7': function qualityOfE7() {
      _assert2.default.equal(_.teoria.chord('E7').quality(), 'dominant');
    },

    '#quality() of Dbm7b5': function qualityOfDbm7b5() {
      _assert2.default.equal(_.teoria.chord('Dbm7b5').quality(), 'half-diminished');
    },

    '#quality() of Cmin11': function qualityOfCmin11() {
      _assert2.default.equal(_.teoria.chord('Cmin11').quality(), 'minor');
    },

    '#quality() of A+': function qualityOfA() {
      _assert2.default.equal(_.teoria.chord('A+').quality(), 'augmented');
    },

    '#quality() of A#(b13)': function qualityOfAB13() {
      _assert2.default.equal(_.teoria.chord('A#(b13)').quality(), 'dominant');
    },

    '#quality() of Gmb5': function qualityOfGmb5() {
      _assert2.default.equal(_.teoria.chord('Gmb5').quality(), 'diminished');
    },

    '#quality() of Asus4': function qualityOfAsus4() {
      _assert2.default.equal(_.teoria.chord('Asus4').quality(), undefined);
    },

    '#quality() of Fm#5': function qualityOfFm5() {
      _assert2.default.equal(_.teoria.chord('Fm#5').quality(), 'minor');
    }
  }
}).export(module);