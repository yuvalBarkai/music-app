import notes from "../data/notes";
import randomIndex from "../utils/randomIndex";

interface QuestionActionType {
    type: string,
}

const randomNoteIndex = randomIndex(notes);

export default (state = randomNoteIndex(), action: QuestionActionType) => {
    switch (action.type) {
        case "CHANGE_NOTE":
            return randomNoteIndex(state);
        default:
            return state;
    }
}