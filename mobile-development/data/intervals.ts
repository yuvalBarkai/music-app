import Interval from "../models/Interval";
const intervals = [
    new Interval("Unison", 0, "8th (Octave)"),
    new Interval("Minor 2nd", 1, "Minor 9th"),
    new Interval("Major 2nd", 2, "9th"),
    new Interval("Minor 3rd", 3, "Minor 10th"),
    new Interval("Major 3rd", 4, "Major 10th"),
    new Interval("Perfect 4th", 5, "11th"),
    new Interval("Tritone", 6, "sharp 11th"),
    new Interval("Perfect 5th", 7, "12th"),
    new Interval("Minor 6th", 8, "Minor 13th"),
    new Interval("Major 6th", 9, "13th"),
    new Interval("Minor 7th", 10, "Minor 14th"),
    new Interval("Major 7th", 11, "Major 14th"),
    new Interval("Octave", 12, "15th (2 Octaves)"),
];
intervals.shift();
intervals.pop();
export default intervals;