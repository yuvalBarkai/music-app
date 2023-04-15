import { SyntheticEvent, useEffect, useState } from "react";
import { english, italian, rand, random  } from "../../Data/notation";


function Notation() {
    const [state, setState] = useState({ display: "", guess: "", wrong: "" });

    const handleInput = (event: SyntheticEvent) => {
        setState({ display: state.display, guess: (event.target as HTMLInputElement).value.toUpperCase(), wrong: state.wrong });
    }

    const newGuess = (event: SyntheticEvent) => {
        event.preventDefault();
        if (english.indexOf(state.guess) == rand) {
            random();
            setState({ display: italian[rand], guess: "", wrong: "" });
        }
        else
            setState({ display: state.display, guess: state.guess, wrong: "Wrong" });
    }

    useEffect(() => {
        setState({ display: italian[rand], guess: state.guess, wrong: "" });
    }, [])

    return (
        <div className="component">
            <h1 className="question">{state.display}</h1>
            <form onSubmit={newGuess}>
                <input type="text" value={state.guess} onChange={handleInput} className="guess" id="notationGuess" /> <br />
                <div className="text-danger">{state.wrong}</div>
                <button className="submit">Submit</button>
            </form>
        </div>
    )
}
export default Notation