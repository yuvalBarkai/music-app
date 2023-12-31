import { SyntheticEvent, useEffect, useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import Styles from "../Styles"
import { useDispatch, useSelector } from "react-redux";
import scales from "../data/scales";
import notes from "../data/notes";
import { useForm } from "react-hook-form";
import { GenericAnswersType } from "../types";
import { changeNote } from "../redux/actions";
import findNoteIndex from "../utils/findNoteIndex";
import indexInc from "../utils/indexInc";
import randomIndex from "../utils/randomIndex";
import { Form } from "react-native-form-component";

export default () => {
    const dispatch = useDispatch();
    const randomScaleIndex = randomIndex(scales);

    const [scaleIndex, setScaleIndex] = useState<number>(randomScaleIndex());
    const [wrongAnswers, setWrong] = useState<number[]>([]);
    const noteIndex = useSelector((state: number) => state);
    const { register, handleSubmit, reset, setValue } = useForm<any>();

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
            reset();
        }
        else
            for (let w of wrong)
                setValue(`${w}`, "");
    }
    return (
        <Form onButtonPress={handleSubmit(submit)}>
            <Text style={Styles.question}> {scales[scaleIndex].name} </Text>
            <View style={Styles.guessGrid}>
                <Text>
                    {notes[noteIndex].english}
                </Text>
                {scales[scaleIndex].formula.map((note, index) =>
                    <TextInput style={Styles.guess} {...register(`${index}`)} autoFocus={index == 0} />)}
            </View>
            {/* <Text style={Styles.wrong}> {wrong && wrong} </Text> */}
            <Pressable style={Styles.button}>
                <Text style={Styles.submit}>Submit</Text>
            </Pressable>
        </Form>
    )
}