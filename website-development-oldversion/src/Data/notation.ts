export const italian = ["DO","DO#","RE","RE#","MI","FA","Fa#","Sol","Sol#","La","La#","Si"];
export const english = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export const indexInc = (num:number) =>{
    if(num > 11)
        return num - 12;
    else 
        return num;
}

export const chords = ["major","minor"];
export let chord = "major";
export const changeChord = () => {
    const tmp = chord;
    while(tmp == chord){
        chord = chords[Math.floor(Math.random()*chords.length)];
    } 
} 

export let rand =  Math.floor(Math.random()*12);
export const random = () => { 
    console.log(rand);
    const tmp = rand;
    rand = Math.floor(Math.random()*12);
    while(tmp == rand)
        rand = Math.floor(Math.random()*12);
}

