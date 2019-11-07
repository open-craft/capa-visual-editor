import * as ActionTypes from '../actions/action-types';
import {getSingleChoiceOptions} from '../../dataParser';

const initialState = getSingleChoiceOptions();

const singleSelectAnswersReducer = function(state=initialState, action) {
    switch(action.type) {
        case ActionTypes.SINGLE_SELECT_ANSWERS_ADD_NEW:
            const lastId = state.singleSelectAnswersList.length ? state.singleSelectAnswersList[state.singleSelectAnswersList.length-1].id : 0;
            let emptyAnswer = {
                id: lastId + 1, title: '', correct: false, feedback: ""
            };
            return {
                ...state,
                singleSelectAnswersList: state.singleSelectAnswersList.concat([emptyAnswer])
            };
        case ActionTypes.SINGLE_SELECT_ANSWERS_REMOVE:
            return {
                ...state,
                singleSelectAnswersList: state.singleSelectAnswersList.filter(single => single.id !== action.id).map((el, ind) => {el.id = ind; return el;})
            };
        case ActionTypes.SINGLE_SELECT_ANSWERS_CHANGED:
            return {
                ...state,
                singleSelectAnswersList: state.singleSelectAnswersList.map((single) => {
                    if (single.id === action.id) {
                        return {
                            id: action.id,
                            title: action.title,
                            correct: action.correct,
                            feedback: action.feedback
                        };
                    } else {
                        return {
                            id: single.id,
                            title: single.title,
                            correct: action.correct ? false : single.correct,
                            feedback: single.feedback
                        };
                    }
                })
            };
        case ActionTypes.ANSWER_TYPE_SETTING_CHANGED:
            return Object.assign({}, state, {...state, selectedType: action.selectedType});
        default:
            return state;
    }
}

export default singleSelectAnswersReducer;
