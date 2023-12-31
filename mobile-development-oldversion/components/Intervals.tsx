import { SyntheticEvent, useEffect, useState } from "react";
import { Button, Text, View, TextInput, Pressable } from "react-native";
import Styles from "../Styles";
import { useDispatch, useSelector } from "react-redux";
import intervals from "../data/intervals";
import notes from "../data/notes";
import { useForm } from "react-hook-form";
import { changeNote } from "../redux/actions";
import findNoteIndex from "../utils/findNoteIndex";
import indexInc from "../utils/indexInc";
import randomIndex from "../utils/randomIndex";
import { Form } from "react-native-form-component";

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
        <Form onButtonPress={handleSubmit(submit)}>
            <Text style={Styles.question}>
                {notes[noteIndex].english}<br />
                {intervals[intervalIndex].name}
            </Text>
            <TextInput style={Styles.guess} {...register(`answer`)} autoFocus={true} />
            {/* <Text style={Styles.wrong}> {state.wrong} </Text> */}
            <Pressable style={Styles.button}>
                <Text style={Styles.submit}>Submit</Text>
            </Pressable>
        </Form>
    )
}