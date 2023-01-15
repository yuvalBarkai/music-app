import { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native"
import { english, indexInc, rand, random } from "../../Data/notation";
import Styles from "../../Styles"

function Fifths() {
    const [display, setDisplay] = useState("");
    const [inputs, setInputs] = useState<string[]>(["", "", "", ""]);
    const [wrong, setWrong] = useState("");

    const handleInput1 = (text: string) => {
        setInputs([text.toUpperCase(), inputs[1], inputs[2], inputs[3]]);
    }
    const handleInput2 = (text: string) => {
        setInputs([inputs[0], text.toUpperCase(), inputs[2], inputs[3]]);
    }
    const handleInput3 = (text: string) => {
        setInputs([inputs[0], inputs[1], text.toUpperCase(), inputs[3]]);
    }
    const handleInput4 = (text: string) => {
        setInputs([inputs[0], inputs[1], inputs[2], text.toUpperCase()]);
    }

    const newGuess = () => {
        setWrong("");
        if (inputs[0] == english[indexInc(rand + 7)] && inputs[1] == english[indexInc(rand + 2)]
            && inputs[2] == english[indexInc(rand + 9)] && inputs[3] == english[indexInc(rand + 4)]) {
                random();
                setDisplay(`${english[rand]}`);
                setInputs(["","","",""]);
        }
        else
            setWrong("Wrong");
    }

    useEffect(() => {
        setDisplay(`${english[rand]}`);
    }, []);

    return (
        <View>
            <Text style={Styles.question}> {display} </Text>
            <Text style={Styles.question}> Next: </Text>
            <View style={Styles.guessGrid}>
                <TextInput style={Styles.guess} onChangeText={handleInput1} value={inputs[0]} autoFocus={true} />
                <TextInput style={Styles.guess} onChangeText={handleInput2} value={inputs[1]} />
                <TextInput style={Styles.guess} onChangeText={handleInput3} value={inputs[2]} />
                <TextInput style={Styles.guess} onChangeText={handleInput4} value={inputs[3]} />
            </View>
            <Text style={Styles.wrong}> {wrong} </Text>
            <Pressable onPress={newGuess} style={Styles.button}>
                <Text style={Styles.submit}>Submit</Text>
            </Pressable>
        </View>
    )
}

export default Fifths