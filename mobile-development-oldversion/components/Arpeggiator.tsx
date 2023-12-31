import { Text, View, TextInput, Pressable, Button } from "react-native";
import Styles from "../Styles";
import { useState } from "react";
import chords from "../data/chords";
import notes from "../data/notes";
import { useDispatch, useSelector } from "react-redux";
import { changeNote } from "../redux/actions";
import { useForm } from "react-hook-form";
import { GenericAnswersType } from "../types";
import findNoteIndex from "../utils/findNoteIndex";
import indexInc from "../utils/indexInc";
import randomIndex from "../utils/randomIndex";
import { Form } from "react-native-form-component";

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
        <Form onButtonPress={handleSubmit(submit)}>
            <Text style={Styles.question}> {notes[noteIndex].english} {chords[chordIndex].name}</Text>
            {chords[chordIndex].formula.map((note, index) =>
                <TextInput style={Styles.guess} {...register(`${index}`)} autoFocus={index == 0} />)}

            {/*             <Text style={Styles.wrong}> {state.wrong} </Text> */}
            <Pressable style={Styles.button}>
                <Text style={Styles.submit}>Submit</Text>
            </Pressable>
        </Form>
    )
}