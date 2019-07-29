import * as ActionTypes from '../actions/action-types';
import {getSingleChoiceOptions} from '../../markdownXmlParser';

const initialState = {
    singleSelectAnswersList: getSingleChoiceOptions()
};

const singleSelectAnswersReducer = function(state=initialState, action) {
    switch(action.type) {
        case ActionTypes.SINGLE_SELECT_ANSWERS_ADD_NEW:
            const lastId = state.singleSelectAnswersList.length ? state.singleSelectAnswersList[state.singleSelectAnswersList.length-1].id : 0;
            let emptyAnswer = {
                id: lastId + 1, title: '', correct: false, feedback: ""
            };
            return {
                singleSelectAnswersList: state.singleSelectAnswersList.concat([emptyAnswer])
            };
        case ActionTypes.SINGLE_SELECT_ANSWERS_REMOVE:
            return {
                singleSelectAnswersList: state.singleSelectAnswersList.filter(single => single.id !== action.id)
            };
        case ActionTypes.SINGLE_SELECT_ANSWERS_CHANGED:
            return {
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
        default:
            return state;
    }
}

export default singleSelectAnswersReducer;
