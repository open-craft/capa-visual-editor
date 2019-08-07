import * as ActionTypes from '../actions/action-types';
import { getMultipleChoiceOptions } from '../../dataParser';


const initialState = getMultipleChoiceOptions();

const mutliSelectAnswersReducer = function(state=initialState, action) {
    switch(action.type) {
        case ActionTypes.MULTI_SELECT_ANSWERS_ADD_NEW:
            const lastId = state.multiSelectAnswersList.length ? state.multiSelectAnswersList[state.multiSelectAnswersList.length-1].id : 0;
            const emptyAnswer = {
                id: lastId + 1, title: '', correct: false, selectedFeedback: "", unselectedFeedback: "", answer: ""
            };
            return {
                ...state,
                multiSelectAnswersList: state.multiSelectAnswersList.concat([emptyAnswer])
            };
        case ActionTypes.MULTI_SELECT_ANSWERS_REMOVE:
            return {
                ...state,
                multiSelectAnswersList: state.multiSelectAnswersList.filter(multi => multi.id !== action.id)
            };
        case ActionTypes.MULTI_SELECT_ANSWERS_CHANGED:
            return {
                ...state,
                multiSelectAnswersList: state.multiSelectAnswersList.map((multi) => {
                    if (multi.id === action.id) {
                        return {
                            id: action.id,
                            title: action.title,
                            correct: action.correct,
                            selectedFeedback: action.selectedFeedback, 
                            unselectedFeedback: action.unselectedFeedback, 
                            answer: action.answer
                        }
                    } else {
                        return multi;
                    }
                })
            };
        case ActionTypes.GROUP_FEEDBACK_SETTING_CHANGED:
            return {
                ...state,
                groupFeedbackContent: action.groupFeedbackContent
            };
        default:
            return state;
    }
}

export default mutliSelectAnswersReducer;
