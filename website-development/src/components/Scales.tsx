import { useDispatch, useSelector } from "react-redux";
import scales from "../data/scales";
import notes from "../data/notes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { GenericAnswersType } from "../types";
import { changeNote } from "../redux/actions";
import findNoteIndex from "../utils/findNoteIndex";
import indexInc from "../utils/indexInc";
import randomIndex from "../utils/randomIndex";

export default function () {
    const dispatch = useDispatch();
    const randomScaleIndex = randomIndex(scales);

    const [scaleIndex, setScaleIndex] = useState<number>(randomScaleIndex());
    const [wrongAnswers, setWrong] = useState<number[]>([]);
    const noteIndex = useSelector((state: number) => state);
    const { register, handleSubmit, reset, setValue, setFocus } = useForm<any>();

    const submit = (result: GenericAnswersType) => {
        const guesses = Object.values(result);
        const scale = scales[scaleIndex].formula;
        let wrong: number[] = [];
        for (let i in guesses)
            if (findNoteIndex(guesses[i]) != indexInc(noteIndex + scale[i]))
                wrong.push(+i);

        setWrong(wrong);
        if (wrong.length < 1) {
            setScaleIndex(old => randomScaleIndex(old));
            dispatch(changeNote());
            setFocus("0");
            reset();
        }
        else
            for (let w of wrong)
                setValue(`${w}`, "");
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1 className="py-20">
                {scales[scaleIndex].name}
            </h1>
            <div className="grid grid-cols-4 gap-4 my-5">
                <div className="text-3xl">
                    {notes[noteIndex].english}
                </div>
                {scales[scaleIndex].formula.map((note, index) =>
                    <div key={`scaleInput${index}`}>
                        <input type="text" {...register(`${index}`)} autoFocus={index == 0}
                            className={`border-solid border-4 rounded-md text-3xl w-20
                            ${wrongAnswers.includes(index) && "border-rose-600"}`} />
                    </div>)}
            </div>
            <button className="border-solid border-3 border-stone-200">Submit</button>
        </form>
    )
}