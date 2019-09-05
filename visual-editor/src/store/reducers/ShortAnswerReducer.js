import {SHORT_ANSWERS_ADD_CORRECT, SHORT_ANSWERS_ADD_INCORRECT, SHORT_ANSWERS_REMOVE, SHORT_ANSWERS_CHANGED} from '../actions/action-types';
import { getShortAnswerOptions } from '../../dataParser';

const defaultOption = {id:1, value: 'text', label: 'text'};

const initialState = getShortAnswerOptions();


const ShortAnswerReducer = function(state=initialState, action) {
    switch (action.type) {
        case SHORT_ANSWERS_ADD_CORRECT:
            let emptyCorrectAnswer = {
                id: Math.random(), value: '', currentType: defaultOption, correct: true
            };
            return {
                ...state,
                shortAnswersList: state.shortAnswersList.concat([emptyCorrectAnswer])
            };
        case SHORT_ANSWERS_ADD_INCORRECT:
            let emptyIncorrectAnswer = {
                id: Math.random(), value: '', currentType: defaultOption, correct: false
            };
            return {
                ...state,
                shortAnswersList: state.shortAnswersList.concat([emptyIncorrectAnswer])
            };
        case SHORT_ANSWERS_REMOVE:
            return {
                ...state,
                shortAnswersList: state.shortAnswersList.filter(single => single.id !== action.id)
            };
        case SHORT_ANSWERS_CHANGED:
            return {
                ...state,
                shortAnswersList: state.shortAnswersList.map((single) => {
                    if (single.id === action.id) {
                        return {
                            id: action.id,
                            value: action.value,
                            currentType: action.currentType,
                            correct: action.correct,
                            feedback: action.feedback
                        };
                    } else {
                        return single;
                    }
                })
            };
        default:
            return state;
    }
};

export default ShortAnswerReducer;
