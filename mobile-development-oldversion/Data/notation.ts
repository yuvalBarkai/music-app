export const italian = ["DO", "DO#", "RE", "RE#", "MI", "FA", "Fa#", "Sol", "Sol#", "La", "La#", "Si"];
export const english = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export const indexInc = (num: number) => {
    if (num > 11)
        return num - 12;
    else
        return num;
}

export let rand = Math.floor(Math.random() * 12);
export const random = () => {
    const tmp = rand;
    rand = Math.floor(Math.random() * 12);
    while (tmp == rand)
        rand = Math.floor(Math.random() * 12);
}

export const chords = ["major", "minor", "dim", "aug", "sus2", "sus4"];
export let chord = "major";
export const changeChord = () => {
    const tmp = chord;
    while (tmp == chord) {
        chord = chords[Math.floor(Math.random() * chords.length)];
    }
}

export const minorIntervals = [0, 2, 3, 5, 7, 8, 10];
export const majorIntervals = [0, 2, 4, 5, 7, 9, 11];
export const scales = ["major", "minor"];
export let scale = "major";
export const changeScale = () => {
    const tmp = scale;
    while (tmp == scale) {
        scale = scales[Math.floor(Math.random() * scales.length)];
    }
}