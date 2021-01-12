import { ActionSequence } from "protractor";
import { SetFormationsAction } from "../actions/formations.actions";

type FormationsActions = SetFormationsAction;
export function formationsReducer(state, action: FormationsActions){
    if(action.type === "SET_FORMATIONS"){
        return {
            ...state,
            formations: action.payload,
        };
    }
    return state;
}