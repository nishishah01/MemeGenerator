import { combineReducers } from 'redux';
import { NEW_MEME, RECIEVE_MEMES } from '../actions';
//reducer is of your function that takes the previous state and an action returns the next state
function memes(state=[],action){
    switch(action.type){
        case RECIEVE_MEMES:
            return action.memes;
        default:
            return state;
    }
}
function myMemes(state=[],action){
    switch(action.type){
        case NEW_MEME:
            state=[...state,action.meme];
            return state;
        default:
            return state;
    }
}
const rootReducer=combineReducers({memes, myMemes});
export default rootReducer;
