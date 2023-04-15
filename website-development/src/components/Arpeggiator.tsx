import { useState } from "react";
import chords from "../data/chords";
import { useDispatch, useSelector } from "react-redux";
import notes from "../data/notes";
import { changeNote } from "../redux/actions";
import { useForm } from "react-hook-form";
import { GenericAnswersType } from "../types";
import findNoteIndex from "../utils/findNoteIndex";
import indexInc from "../utils/indexInc";
import randomIndex from "../utils/randomIndex";

export default () => {
    const dispatch = useDispatch();
    const randomChordIndex = randomIndex(chords);

    const [chordIndex, setChordIndex] = useState<number>(randomChordIndex());
    const [wrongAnswers, setWrong] = useState<number[]>([]);
    const noteIndex = useSelector((state: number) => state);
    const { register, handleSubmit, reset, setValue } = useForm<any>();

    const submit = (result: GenericAnswersType) => {
        const guesses = Object.values(result);
        const chord = chords[chordIndex].formula;
        let wrong: number[] = [];
        for (let i in guesses)
            if (findNoteIndex(guesses[i]) != indexInc(noteIndex + chord[i]))
                wrong.push(+i);

        setWrong(wrong);
        if (wrong.length < 1) {
            setChordIndex(old => randomChordIndex(old));
            dispatch(changeNote());
            reset();
        }
        else
            for (let w of wrong)
                setValue(`${w}`, "");
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1 className="py-20">
                {notes[noteIndex].english} {chords[chordIndex].name}
            </h1>
            <div className="flex gap-5 my-5">
                {chords[chordIndex].formula.map((note, index) =>
                    <div key={`chordInput${index}`}>
                        <input type="text" {...register(`${index}`)} autoFocus={index == 0}
                            className={`border-solid border-4 rounded-md text-3xl w-20
                            ${wrongAnswers.includes(index) && "border-rose-600"}`} />
                    </div>)}
            </div>
            <button className="border-solid border-3 border-stone-200">Submit</button>
        </form>
    )
}