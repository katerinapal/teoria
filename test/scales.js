"use strict";

var _vows = require("vows");

var _vows2 = _interopRequireDefault(_vows);

var _assert = require("assert");

var _assert2 = _interopRequireDefault(_assert);

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vows2.default.describe('Scales').addBatch({
    'Ab2': {
        topic: function topic() {
            return _.teoria.note('Ab2');
        },

        'Blues': function Blues(note) {
            _assert2.default.deepEqual(_.teoria.note('g#').scale('blues').simple(), ['g#', 'b', 'c#', 'd', 'd#', 'f#']);
        },

        'Ionian/Major': function IonianMajor(note) {
            _assert2.default.deepEqual(note.scale('ionian').simple(), ['ab', 'bb', 'c', 'db', 'eb', 'f', 'g']);
        },

        'Dorian': function Dorian(note) {
            _assert2.default.deepEqual(note.scale('dorian').simple(), ['ab', 'bb', 'cb', 'db', 'eb', 'f', 'gb']);
        },

        'Phrygian': function Phrygian(note) {
            _assert2.default.deepEqual(note.scale('phrygian').simple(), ["ab", "bbb", "cb", "db", "eb", "fb", "gb"]);
        },

        'Lydian': function Lydian(note) {
            _assert2.default.deepEqual(note.scale('lydian').simple(), ["ab", "bb", "c", "d", "eb", "f", "g"]);
        },

        'Mixolydian': function Mixolydian(note) {
            _assert2.default.deepEqual(note.scale('mixolydian').simple(), ["ab", "bb", "c", "db", "eb", "f", "gb"]);
        },

        'Aeolian/Minor': function AeolianMinor(note) {
            _assert2.default.deepEqual(note.scale('aeolian').simple(), ["ab", "bb", "cb", "db", "eb", "fb", "gb"]);
        },

        'Locrian': function Locrian(note) {
            _assert2.default.deepEqual(note.scale('locrian').simple(), ["ab", "bbb", "cb", "db", "ebb", "fb", "gb"]);
        },

        'Major Pentatonic': function MajorPentatonic(note) {
            _assert2.default.deepEqual(note.scale('majorpentatonic').simple(), ["ab", "bb", "c", "eb", "f"]);
        },

        'Minor Pentatonic': function MinorPentatonic(note) {
            _assert2.default.deepEqual(note.scale('minorpentatonic').simple(), ["ab", "cb", "db", "eb", "gb"]);
        },

        'Chromatic': function Chromatic(note) {
            _assert2.default.deepEqual(note.scale('chromatic').simple(), ["ab", "bbb", "bb", "cb", "c", "db", "d", "eb", "fb", "f", "gb", "g"]);
        },

        'Whole Tone': function WholeTone(note) {
            _assert2.default.deepEqual(_.teoria.note('c').scale('wholetone').simple(), ["c", "d", "e", "f#", "g#", "a#"]);
        }
    }
}).export(module);