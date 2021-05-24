"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sugar = undefined;

var _knowledge = require("./knowledge");

var mod_anonymus = function mod_anonymus(teoria) {
  var Note = teoria.Note;
  var Chord = teoria.Chord;
  var Scale = teoria.Scale;

  Note.prototype.chord = function (chord) {
    chord = chord in _knowledge.knowledgejs.chordShort ? _knowledge.knowledgejs.chordShort[chord] : chord;

    return new Chord(this, chord);
  };

  Note.prototype.scale = function (scale) {
    return new Scale(this, scale);
  };
};

exports.sugar = mod_anonymus = function mod_anonymus(teoria) {
  var Note = teoria.Note;
  var Chord = teoria.Chord;
  var Scale = teoria.Scale;

  Note.prototype.chord = function (chord) {
    chord = chord in _knowledge.knowledgejs.chordShort ? _knowledge.knowledgejs.chordShort[chord] : chord;

    return new Chord(this, chord);
  };

  Note.prototype.scale = function (scale) {
    return new Scale(this, scale);
  };
};
exports.sugar = mod_anonymus;