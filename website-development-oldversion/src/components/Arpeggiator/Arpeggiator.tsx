import { SyntheticEvent, useEffect, useState } from "react";
import { changeChord, chord, english, indexInc, rand, random } from "../../Data/notation";

function Arpeggiator(){
    const [state, setState] = useState({ display: "", guess1: "", guess2:"", guess3:"", wrong: "" });

    const handleInput1 = (event: SyntheticEvent) => {
        setState({ display: state.display, guess1: (event.target as HTMLInputElement).value.toUpperCase(), guess2:state.guess2 ,guess3:state.guess3, wrong: state.wrong });
    }
    const handleInput2 = (event: SyntheticEvent) => {
        setState({ display: state.display, guess1:state.guess1 ,guess2: (event.target as HTMLInputElement).value.toUpperCase(), guess3:state.guess3, wrong: state.wrong });
    }
    const handleInput3 = (event: SyntheticEvent) => {
        setState({ display: state.display, guess1:state.guess1 ,guess2: state.guess2,guess3: (event.target as HTMLInputElement).value.toUpperCase(), wrong: state.wrong });
    }

    const success = () =>{
        changeChord();
        random();
        setState({ display: `${english[rand]} ${chord}`, guess1: "",guess2: "", guess3: "", wrong: "" });
    }

    const newGuess = (event: SyntheticEvent) => {
        event.preventDefault();
        if(chord == "major"){
            if(state.guess1 == english[rand] && state.guess2 == english[indexInc(rand+4)] && state.guess3 == english[indexInc(rand+7)]){
                success();
            }
            else{
                setState({ display: state.display, guess1: state.guess1,guess2: state.guess2, guess3:state.guess3, wrong: "wrong" });
            }
                
        } 
        else if(chord == "minor"){
            if(state.guess1 == english[rand] && state.guess2 == english[indexInc(rand+3)] && state.guess3 == english[indexInc(rand+7)]){
                success();
            }
            else{
                setState({ display: state.display, guess1: state.guess1,guess2: state.guess2, guess3:state.guess3, wrong: "wrong" });
            }
        }
    }

    useEffect(() => {
        setState({ display: `${english[rand]} ${chord}`, guess1: state.guess1,guess2: state.guess2, guess3:state.guess3, wrong: "" });
    }, [])

    return(
        <div className="component">
            <h1 className="question">{state.display}</h1>
            <form onSubmit={newGuess}>
                <input type="text" value={state.guess1} onChange={handleInput1} className="guess"/> <br /> <br />
                <input type="text" value={state.guess2} onChange={handleInput2} className="guess"/> <br /> <br />
                <input type="text" value={state.guess3} onChange={handleInput3} className="guess"/> <br />
                <div className="text text-danger">{state.wrong}</div>
                <button className="submit">Submit</button>
            </form>
        </div>
    )
}

export default Arpeggiator