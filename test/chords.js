import ext_vows_vows from "vows";
import ext_assert_assert from "assert";
import { teoria as _teoria } from "../";

ext_vows_vows.describe('Chords').addBatch({
  'Chord parser': {
    'Emaj7': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Emaj7').simple(), ['e', 'g#', 'b', 'd#']);
    },

    'A+': function() {
      ext_assert_assert.deepEqual(_teoria.chord('A+').simple(), ['a', 'c#', 'e#']);
    },

    'Bb+': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Bb+').simple(), ['bb', 'd', 'f#']);
    },

    'F#maj7': function() {
      ext_assert_assert.deepEqual(_teoria.chord('F#maj7').simple(), ['f#', 'a#', 'c#', 'e#']);
    },

    'Hmaj7': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Hmaj7').simple(), ['b', 'd#', 'f#', 'a#']);
    },

    'H#maj7': function() {
      ext_assert_assert.deepEqual(_teoria.chord('H#maj7').simple(), ['b#', 'dx', 'fx', 'ax']);
    },

    'C7b5': function() {
      ext_assert_assert.deepEqual(_teoria.chord('C7b5').simple(), ['c', 'e', 'gb', 'bb']);
    },

    'Eb7b5': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Eb7b5').simple(), ['eb', 'g', 'bbb', 'db']);
    },

    'D#7b5': function() {
      ext_assert_assert.deepEqual(_teoria.chord('D#7b5').simple(), ['d#', 'fx', 'a', 'c#']);
    },

    'C9': function() {
      ext_assert_assert.deepEqual(_teoria.chord('C9').simple(), ['c', 'e', 'g', 'bb', 'd']);
    },

    'Eb9': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Eb9').simple(), ['eb', 'g', 'bb', 'db', 'f']);
    },

    'G#(#9)': function() {
      ext_assert_assert.deepEqual(_teoria.chord('G#(#9)').simple(), ['g#', 'b#', 'd#', 'f#', 'ax']);
    },

    'Ab(b9)': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Ab(b9)').simple(), ['ab', 'c', 'eb', 'gb', 'bbb']);
    },

    'F#(#11)': function() {
      ext_assert_assert.deepEqual(_teoria.chord('F#(#11)').simple(), ['f#', 'a#', 'c#', 'e', 'g#', 'b#']);
    },

    'Ab13': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Ab13').simple(), ['ab', 'c', 'eb', 'gb', 'bb', 'db', 'f']);
    },

    'C7sus4': function() {
      ext_assert_assert.deepEqual(_teoria.chord('C7sus4').simple(), ['c', 'f', 'g', 'bb']);
    },

    'Cmaj9': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Cmaj9').simple(), ['c', 'e', 'g', 'b', 'd']);
    },

    'Dmb6': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Dmb6').simple(), ['d', 'f', 'a', 'bb']);
    },

    'C#(#5#9)': function() {
      ext_assert_assert.deepEqual(_teoria.chord('C#(#5#9)').simple(), ['c#', 'e#', 'gx', 'b', 'dx']);
    },

    'Cm(maj7)': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Cm(maj7)').simple(), ['c', 'eb', 'g', 'b']);
    },

    'F#m(11b5b9)': function() {
      ext_assert_assert.deepEqual(_teoria.chord('F#m(11b5b9)').simple(), ['f#', 'a', 'c', 'e', 'g', 'b']);
    },

    'C/e': function() {
      ext_assert_assert.deepEqual(_teoria.chord('C/e').simple(), ['e', 'c', 'g']);
    },

    'A7/g': function() {
      ext_assert_assert.deepEqual(_teoria.chord('A7/g').simple(), ['g', 'a', 'c#', 'e']);
    },

    'G/f#': function() {
      ext_assert_assert.deepEqual(_teoria.chord('G/f#').simple(), ['f#', 'g', 'b', 'd']);
    },

    'C6': function() {
      ext_assert_assert.deepEqual(_teoria.chord('C6').simple(), ['c', 'e', 'g', 'a']);
    },

    'A#6': function() {
      ext_assert_assert.deepEqual(_teoria.chord('A#6').simple(), ['a#', 'cx', 'e#', 'fx']);
    },

    'Bb6': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Bb6').simple(), ['bb', 'd', 'f', 'g']);
    },

    'Am6': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Am6').simple(), ['a', 'c', 'e', 'f#']);
    },

    'D(#6)': function() {
      ext_assert_assert.deepEqual(_teoria.chord('D(#6)').simple(), ['d', 'f#', 'a', 'b#']);
    },

    'Eo': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Eo').simple(), ['e', 'g', 'bb']);
    },

    'Eø': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Eø').simple(), ['e', 'g', 'bb', 'd']);
    },

    'Do': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Do').simple(), ['d', 'f', 'ab']);
    },

    'Dø': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Dø').simple(), ['d', 'f', 'ab', 'c']);
    },

    'Fo7': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Fo7').simple(), ['f', 'ab', 'cb', 'ebb']);
    },

    'G#ø7': function() {
      ext_assert_assert.deepEqual(_teoria.chord('G#ø7').simple(), ['g#', 'b', 'd', 'f#']);
    },

    'Cmin': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Cmin').simple(), ['c', 'eb', 'g']);
    },

    'Bmin11': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Bmin11').simple(), ['b', 'd', 'f#', 'a', 'c#', 'e']);
    },

    'C+M7': function() {
      ext_assert_assert.deepEqual(_teoria.chord('C+M7').simple(), ['c', 'e', 'g#', 'b']);
    },

    'Bbdom7b5': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Bbdom7b5').simple(), ['bb', 'd', 'fb', 'ab']);
    },

    'E5': function() {
      ext_assert_assert.deepEqual(_teoria.chord('E5').simple(), ['e', 'b']);
    },

    'A5': function() {
      ext_assert_assert.deepEqual(_teoria.chord('A5').simple(), ['a', 'e']);
    },

    'C13#9b5': function() {
      ext_assert_assert.deepEqual(_teoria.chord('C13#9b5').simple(), ['c', 'e', 'gb', 'bb', 'd#', 'f', 'a']);
    },

    'D13#5b9': function() {
      ext_assert_assert.deepEqual(_teoria.chord('D13#5b9').simple(), ['d', 'f#', 'a#', 'c', 'eb', 'g', 'b']);
    },

    'C6/9': function() {
      ext_assert_assert.deepEqual(_teoria.chord('C6/9').simple(), ['c', 'e', 'g', 'a', 'd']);
    },

    'Ab6/9': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Ab6/9').simple(), ['ab', 'c', 'eb', 'f', 'bb']);
    },

    'CM7': function() {
      ext_assert_assert.deepEqual(_teoria.chord('CM7').simple(), ['c', 'e', 'g', 'b']);
    },

    'CmM7': function() {
      ext_assert_assert.deepEqual(_teoria.chord('CmM7').simple(), ['c', 'eb', 'g', 'b']);
    },

    'DM': function() {
      ext_assert_assert.deepEqual(_teoria.chord('DM').simple(), ['d', 'f#', 'a']);
    },

    'EM#5': function() {
      ext_assert_assert.deepEqual(_teoria.chord('EM#5').simple(), ['e', 'g#', 'b#']);
    },

    'FM9': function() {
      ext_assert_assert.deepEqual(_teoria.chord('FM9').simple(), ['f', 'a', 'c', 'e', 'g']);
    },

    'Dmi': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Dmi').simple(), ['d', 'f', 'a']);

    },

    'Emi7': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Emi7').simple(), ['e', 'g', 'b', 'd']);
    },

    'Dma': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Dma').simple(), ['d', 'f#', 'a']);
    },

    'Ema9': function() {
      ext_assert_assert.deepEqual(_teoria.chord('Ema9').simple(), ['e', 'g#', 'b', 'd#', 'f#']);
    }
  },

  'Case doesn\'t matter': {
    'BbDom': function() {
      ext_assert_assert.deepEqual(_teoria.chord('BbDom').simple(), _teoria.chord('Bbdom').simple());
    },

    'EbMaj9': function() {
      ext_assert_assert.deepEqual(_teoria.chord('EbMaj9').simple(), _teoria.chord('Ebmaj9').simple());
    },

    'ASus4': function() {
      ext_assert_assert.deepEqual(_teoria.chord('ASus4').simple(), _teoria.chord('Asus4').simple());
    },

    'EAdd9': function() {
      ext_assert_assert.deepEqual(_teoria.chord('EAdd9').simple(), _teoria.chord('Eadd9').simple());
    }
  },

  'Chord Methods': {
    '#bass of Cmaj7': function() {
      ext_assert_assert.equal(_teoria.chord('Cmaj7').bass().toString(true), 'c');
    },

    '#bass of A/C#': function() {
      ext_assert_assert.equal(_teoria.chord('A/C#').bass().toString(true), 'c#');
    },

    '#bass of D6/9': function() {
      ext_assert_assert.equal(_teoria.chord('D6/9').bass().toString(true), 'd');
    },

    '#quality() of Bmaj7': function() {
      ext_assert_assert.equal(_teoria.chord('Bmaj7').quality(), 'major');
    },

    '#quality() of E7': function() {
      ext_assert_assert.equal(_teoria.chord('E7').quality(), 'dominant');
    },

    '#quality() of Dbm7b5': function() {
      ext_assert_assert.equal(_teoria.chord('Dbm7b5').quality(), 'half-diminished');
    },

    '#quality() of Cmin11': function() {
      ext_assert_assert.equal(_teoria.chord('Cmin11').quality(), 'minor');
    },

    '#quality() of A+': function() {
      ext_assert_assert.equal(_teoria.chord('A+').quality(), 'augmented');
    },

    '#quality() of A#(b13)': function() {
      ext_assert_assert.equal(_teoria.chord('A#(b13)').quality(), 'dominant');
    },

    '#quality() of Gmb5': function() {
      ext_assert_assert.equal(_teoria.chord('Gmb5').quality(), 'diminished');
    },

    '#quality() of Asus4': function() {
      ext_assert_assert.equal(_teoria.chord('Asus4').quality(), undefined);
    },

    '#quality() of Fm#5': function() {
      ext_assert_assert.equal(_teoria.chord('Fm#5').quality(), 'minor');
    },
  }
}).export(module);
