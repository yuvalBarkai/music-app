import { SyntheticEvent, useEffect, useState } from "react";
import { Button, Text, View, TextInput, Pressable } from "react-native";
import { changeChord, chord, english, indexInc, rand, random } from "../../Data/notation";
import Styles from "../../Styles";

function Arpeggiator() {
    const [state, setState] = useState({ display: "", guess1: "", guess2: "", guess3: "", wrong: "" });

    const handleInput1 = (text: string) => {
        setState({ display: state.display, guess1: text.toUpperCase(), guess2: state.guess2, guess3: state.guess3, wrong: state.wrong });
    }
    const handleInput2 = (text: string) => {
        setState({ display: state.display, guess1: state.guess1, guess2: text.toUpperCase(), guess3: state.guess3, wrong: state.wrong });
    }
    const handleInput3 = (text: string) => {
        setState({ display: state.display, guess1: state.guess1, guess2: state.guess2, guess3: text.toUpperCase(), wrong: state.wrong });
    }

    const success = () => {
        changeChord();
        random();
        setState({ display: `${english[rand]} ${chord}`, guess1: "", guess2: "", guess3: "", wrong: "" });
    }

    const newGuess = () => {
        if (chord == "major") {
            if (state.guess1 == english[rand] && state.guess2 == english[indexInc(rand + 4)] && state.guess3 == english[indexInc(rand + 7)]) {
                success();
            }
            else {
                setState({ display: state.display, guess1: english[rand], guess2: state.guess2, guess3: state.guess3, wrong: "wrong" });
            }

        }
        else if (chord == "minor") {
            if (state.guess1 == english[rand] && state.guess2 == english[indexInc(rand + 3)] && state.guess3 == english[indexInc(rand + 7)]) {
                success();
            }
            else {
                setState({ display: state.display, guess1: state.guess1, guess2: state.guess2, guess3: state.guess3, wrong: "wrong" });
            }
        }
        else if (chord == "dim") {
            if (state.guess1 == english[rand] && state.guess2 == english[indexInc(rand + 3)] && state.guess3 == english[indexInc(rand + 6)]) {
                success();
            }
            else {
                setState({ display: state.display, guess1: state.guess1, guess2: state.guess2, guess3: state.guess3, wrong: "wrong" });
            }
        }
        else if (chord == "aug") {
            if (state.guess1 == english[rand] && state.guess2 == english[indexInc(rand + 4)] && state.guess3 == english[indexInc(rand + 8)]) {
                success();
            }
            else {
                setState({ display: state.display, guess1: state.guess1, guess2: state.guess2, guess3: state.guess3, wrong: "wrong" });
            }
        }
        else if (chord == "sus2") {
            if (state.guess1 == english[rand] && state.guess2 == english[indexInc(rand + 2)] && state.guess3 == english[indexInc(rand + 7)]) {
                success();
            }
            else {
                setState({ display: state.display, guess1: state.guess1, guess2: state.guess2, guess3: state.guess3, wrong: "wrong" });
            }
        }
        else if (chord == "sus4") {
            if (state.guess1 == english[rand] && state.guess2 == english[indexInc(rand + 5)] && state.guess3 == english[indexInc(rand + 7)]) {
                success();
            }
            else {
                setState({ display: state.display, guess1: state.guess1, guess2: state.guess2, guess3: state.guess3, wrong: "wrong" });
            }
        }
    }

    useEffect(() => {
        setState({ display: `${english[rand]} ${chord}`, guess1: state.guess1, guess2: state.guess2, guess3: state.guess3, wrong: "" });
    }, [])

    return (
        <View>
            <Text style={Styles.question}> {state.display} </Text>
            <TextInput style={Styles.guess} onChangeText={handleInput1} value={state.guess1} autoFocus={true} />
            <TextInput style={Styles.guess} onChangeText={handleInput2} value={state.guess2} />
            <TextInput style={Styles.guess} onChangeText={handleInput3} value={state.guess3} />

            <Text style={Styles.wrong}> {state.wrong} </Text>
            <Pressable onPress={newGuess} style={Styles.button}>
                <Text style={Styles.submit}>Submit</Text>
            </Pressable>
        </View>
    )
}

export default Arpeggiator