import { useDispatch, useSelector } from "react-redux";
import intervals from "../data/intervals";
import notes from "../data/notes";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { changeNote } from "../redux/actions";
import findNoteIndex from "../utils/findNoteIndex";
import indexInc from "../utils/indexInc";
import randomIndex from "../utils/randomIndex";

export default () => {
    const dispatch = useDispatch();
    const randomIntervalIndex = randomIndex(intervals);

    const [intervalIndex, setIntervalIndex] = useState<number>(randomIntervalIndex());
    const [isWrong, setWrong] = useState(false);
    const noteIndex = useSelector((state: number) => state);
    const { register, handleSubmit, reset, setValue } = useForm<any>();

    const submit = (result: { answer: string }) => {
        const semiTones = intervals[intervalIndex].halfSteps;
        if (findNoteIndex(result.answer) != indexInc(noteIndex + semiTones)) {
            setValue("answer", "");
            setWrong(true);
        }
        else {
            setWrong(false);
            setIntervalIndex(old => randomIntervalIndex(old));
            dispatch(changeNote());
            reset();
        }
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1 className="py-20">
                {notes[noteIndex].english}<br />
                {intervals[intervalIndex].name}
            </h1>
            <div className="my-5">
                <input type="text" {...register(`answer`)} autoFocus
                    className={`border-solid border-4 rounded-md text-3xl w-20
                    ${isWrong && "border-rose-600"}`} />
            </div>
            <button className="border-solid border-3 border-stone-200">Submit</button>
        </form>)
}