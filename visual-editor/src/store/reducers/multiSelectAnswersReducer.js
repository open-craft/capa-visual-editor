import * as ActionTypes from '../actions/action-types';
import { getMultipleChoiceOptions } from '../../markdownXmlParser';


const initialState = {
    multiSelectAnswersList: getMultipleChoiceOptions()
};

const mutliSelectAnswersReducer = function(state=initialState, action) {
    switch(action.type) {
        case ActionTypes.MULTI_SELECT_ANSWERS_ADD_NEW:
            const lastId = state.multiSelectAnswersList.length ? state.multiSelectAnswersList[state.multiSelectAnswersList.length-1].id : 0;
            const emptyAnswer = {
                id: lastId + 1, title: '', correct: false, selectedFeedback: "", unselectedFeedback: "", answer: ""
            };
            return {
                multiSelectAnswersList: state.multiSelectAnswersList.concat([emptyAnswer])
            };
        case ActionTypes.MULTI_SELECT_ANSWERS_REMOVE:
            return {
                multiSelectAnswersList: state.multiSelectAnswersList.filter(multi => multi.id !== action.id)
            };
        case ActionTypes.MULTI_SELECT_ANSWERS_CHANGED:
            return {
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
        default:
            return state;
    }
}

export default mutliSelectAnswersReducer;
