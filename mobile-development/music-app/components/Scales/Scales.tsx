import { SyntheticEvent, useEffect, useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import { changeScale, english, indexInc, majorIntervals, minorIntervals, rand, random, scale } from "../../Data/notation";
import Styles from "../../Styles"


function Scales() {
    const [display, setDisplay] = useState("");
    const [inputs, setInputs] = useState<string[]>(["", "", "", "", "", "", ""]);
    const [wrong, setWrong] = useState("");

    const handleInput1 = (text: string) => {
        setInputs([text.toUpperCase(), inputs[1], inputs[2], inputs[3], inputs[4], inputs[5], inputs[6]]);
    }
    const handleInput2 = (text: string) => {
        setInputs([inputs[0], text.toUpperCase(), inputs[2], inputs[3], inputs[4], inputs[5], inputs[6]]);
    }
    const handleInput3 = (text: string) => {
        setInputs([inputs[0], inputs[1], text.toUpperCase(), inputs[3], inputs[4], inputs[5], inputs[6]]);
    }
    const handleInput4 = (text: string) => {
        setInputs([inputs[0], inputs[1], inputs[2], text.toUpperCase(), inputs[4], inputs[5], inputs[6]]);
    }
    const handleInput5 = (text: string) => {
        setInputs([inputs[0], inputs[1], inputs[2], inputs[3], text.toUpperCase(), inputs[5], inputs[6]]);
    }
    const handleInput6 = (text: string) => {
        setInputs([inputs[0], inputs[1], inputs[2], inputs[3], inputs[4], text.toUpperCase(), inputs[6]]);
    }
    const handleInput7 = (text: string) => {
        setInputs([inputs[0], inputs[1], inputs[2], inputs[3], inputs[4], inputs[5], text.toUpperCase()]);
    }


    const newGuess = () => {
        setWrong("");
        if (scale == "major") {
            let wrong = false;
            for (let i in inputs) {
                if (inputs[i] != english[indexInc(rand + majorIntervals[i])])
                    wrong = true;
            }
            if (wrong) {
                inputs[0] != "" && setWrong("Wrong");
            }
            else {
                random();
                changeScale();
                setInputs(["", "", "", "", "", "", ""]);
                setDisplay(`${english[rand]} ${scale}`);
            }

        }
        else if (scale == "minor") {
            let wrong = false;
            for (let i in inputs) {
                if (inputs[i] != english[indexInc(rand + minorIntervals[i])])
                    wrong = true;
            }
            if (wrong) {
                inputs[0] != "" && setWrong("Wrong");
            }
            else {
                random();
                changeScale();
                setInputs(["", "", "", "", "", "", ""]);
                setDisplay(`${english[rand]} ${scale}`);
            }
        }
    }

    useEffect(() => {
        setDisplay(`${english[rand]} ${scale}`);
    },[]);

    return (
        <View>
            <Text style={Styles.question}> {display} </Text>
            <View style={Styles.guessGrid}>
                <TextInput style={Styles.guess} onChangeText={handleInput1} value={inputs[0]} autoFocus={true} />
                <TextInput style={Styles.guess} onChangeText={handleInput2} value={inputs[1]} />
                <TextInput style={Styles.guess} onChangeText={handleInput3} value={inputs[2]} />
                <TextInput style={Styles.guess} onChangeText={handleInput4} value={inputs[3]} />
                <TextInput style={Styles.guess} onChangeText={handleInput5} value={inputs[4]} />
                <TextInput style={Styles.guess} onChangeText={handleInput6} value={inputs[5]} />
                <TextInput style={Styles.guess} onChangeText={handleInput7} value={inputs[6]} />
            </View>
            <Text style={Styles.wrong}> {wrong && wrong} </Text>
            <Pressable onPress={newGuess} style={Styles.button}>
                <Text style={Styles.submit}>Submit</Text>
            </Pressable>
        </View>
    )
}

export default Scales