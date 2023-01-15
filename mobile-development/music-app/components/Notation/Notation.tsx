import { SyntheticEvent, useEffect, useState } from "react";
import { Button, Text, View, TextInput, Pressable } from "react-native";
import { english, italian, rand, random } from "../../Data/notation";
import Styles from "../../Styles";


function Notation() {
    const [state, setState] = useState({ display: "", guess: "", wrong: "" });

    const handleInput = (text:string) => {
        setState({ display: state.display, guess: text.toUpperCase(), wrong: state.wrong });
    }

    const newGuess = () => {
        if (english.indexOf(state.guess) == rand) {
            random();
            setState({ display: italian[rand], guess: "", wrong: "" });
        }
        else 
            setState({ display: state.display, guess: state.guess, wrong: "Wrong"});
    }

    useEffect(() => {
        setState({ display: italian[rand], guess: state.guess, wrong: "" });
    }, [])

    return (
        <View>
            <Text style={Styles.question}> {state.display} </Text>
            <TextInput style={Styles.guess} onChangeText={handleInput} value={state.guess} autoFocus={true} /> 
            <Text style={Styles.wrong}> {state.wrong} </Text>
            <Pressable onPress={newGuess} style={Styles.button}>
                <Text style={Styles.submit}>Submit</Text>
            </Pressable>
        </View>
    )
}
export default Notation