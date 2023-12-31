import notes from "../data/notes";

export default (noteName: string) =>
    notes.findIndex(v => v.names.includes(noteName.replace(/\s/g, '').toUpperCase()));