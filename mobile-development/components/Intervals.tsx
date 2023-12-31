import { useState } from "react";
import { Text, TextInput, View, Button, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import intervals from "../data/intervals";
import notes from "../data/notes";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { changeNote } from "../redux/actions";
import findNoteIndex from "../utils/findNoteIndex";
import indexInc from "../utils/indexInc";
import randomIndex from "../utils/randomIndex";
import styles from "../styles";
import { ReduxStoreType } from "../redux/store";
import { CheckBox } from "react-native-elements";
import Field from "./Field";

interface FormValues {
    answer: string;
}

export default () => {
    const dispatch = useDispatch();
    const randomIntervalIndex = randomIndex(intervals);

    const [intervalIndex, setIntervalIndex] = useState<number>(randomIntervalIndex());
    const [isWrong, setWrong] = useState(false);
    const [compound, setCompound] = useState(false);
    const noteIndex = useSelector((state: ReduxStoreType) => state.note);
    const { setValue, handleSubmit, reset, control } = useForm({
        defaultValues: {
            answer: ""
        }
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        const semiTones = intervals[intervalIndex].halfSteps;
        if (findNoteIndex(data.answer) != indexInc(noteIndex + semiTones)) {
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
        <View>
            <CheckBox
            containerStyle={styles.checkbox}
                title='Compund'
                onPress={() => setCompound(!compound)}
                checked={compound}
            />
            <Text style={styles.question}>
                <Text style={styles.note}>{notes[noteIndex].english}</Text>{`\n`}
                {compound ? intervals[intervalIndex].compoundName : intervals[intervalIndex].name}
            </Text>
            <Field handleSubmit={handleSubmit} control={control} isWrong={isWrong} onSubmit={onSubmit}  />
            <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.submit}>Submit</Text>
            </Pressable>
        </View>
    )
}