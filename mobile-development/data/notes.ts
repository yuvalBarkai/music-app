import Note from "../models/Note";
const mixArrays = (first: string[], second: string[]) => {
    const newArray = [];
    for (let f of first)
        for (let s of second)
            newArray.push(`${f}${s}`);
    return newArray;
}

const sharps = ["#", "SHARP", "DIEZ"];
const flats = ["B", "FLAT", "BEMOL"];

const c = ["C", "DO", "DOE", "UT"];
const d = ["D", "RE", "REY", "RAY"];
const e = ["E", "MI", "ME"];
const f = ["F", "FA", "FAR"];
const g = ["G", "SOL"];
const a = ["A", "LA"];
const b = ["B", "SI"];

const cSharp = mixArrays(c, sharps).concat(mixArrays(d, flats));
const dSharp = mixArrays(d, sharps).concat(mixArrays(e, flats));
const fSharp = mixArrays(f, sharps).concat(mixArrays(g, flats));
const gSharp = mixArrays(g, sharps).concat(mixArrays(a, flats));
const aSharp = mixArrays(a, sharps).concat(mixArrays(b, flats));

export default [
    new Note("C", c),
    new Note("C#", cSharp, true),
    new Note("D", d),
    new Note("D#", dSharp, true),
    new Note("E", e),
    new Note("F", f),
    new Note("F#", fSharp, true),
    new Note("G", g),
    new Note("G#", gSharp, true),
    new Note("A", a),
    new Note("A#", aSharp, true),
    new Note("B", b),
];