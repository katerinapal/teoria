import { Note as note_Note } from "./lib/note";
import { Interval as interval_Interval } from "./lib/interval";
import { Chord as chord_Chord } from "./lib/chord";
import { Scale as scale_Scale } from "./lib/scale";
import { sugar as libsugar_sugar } from "./lib/sugar";

// never thought I would write this, but: Legacy support
function intervalConstructor(from, to) {
  // Construct a Interval object from string representation
  if (typeof from === 'string')
    return interval_Interval.toCoord(from);

  if (typeof to === 'string' && from instanceof note_Note)
    return interval_Interval.from(from, interval_Interval.toCoord(to));

  if (to instanceof interval_Interval && from instanceof note_Note)
    return interval_Interval.from(from, to);

  if (to instanceof note_Note && from instanceof note_Note)
    return interval_Interval.between(from, to);

  throw new Error('Invalid parameters');
}

intervalConstructor.toCoord = interval_Interval.toCoord;
intervalConstructor.from = interval_Interval.from;
intervalConstructor.between = interval_Interval.between;
intervalConstructor.invert = interval_Interval.invert;

function noteConstructor(name, duration) {
  if (typeof name === 'string')
    return note_Note.fromString(name, duration);
  else
    return new note_Note(name, duration);
}

noteConstructor.fromString = note_Note.fromString;
noteConstructor.fromKey = note_Note.fromKey;
noteConstructor.fromFrequency = note_Note.fromFrequency;
noteConstructor.fromMIDI = note_Note.fromMIDI;

function chordConstructor(name, symbol) {
  if (typeof name === 'string') {
    var root, octave;
    root = name.match(/^([a-h])(x|#|bb|b?)/i);
    if (root && root[0]) {
      octave = typeof symbol === 'number' ? symbol.toString(10) : '4';
      return new chord_Chord(note_Note.fromString(root[0].toLowerCase() + octave),
                            name.substr(root[0].length));
    }
  } else if (name instanceof note_Note)
    return new chord_Chord(name, symbol);

  throw new Error('Invalid Chord. Couldn\'t find note name');
}

function scaleConstructor(tonic, scale) {
  tonic = (tonic instanceof note_Note) ? tonic : teoria.note(tonic);
  return new scale_Scale(tonic, scale);
}

var teoria = {
  note: noteConstructor,

  chord: chordConstructor,

  interval: intervalConstructor,

  scale: scaleConstructor,

  Note: note_Note,
  Chord: chord_Chord,
  Scale: scale_Scale,
  Interval: interval_Interval
};

libsugar_sugar(teoria);
var mod_teoria;
mod_teoria = teoria;
export { mod_teoria as teoria };
