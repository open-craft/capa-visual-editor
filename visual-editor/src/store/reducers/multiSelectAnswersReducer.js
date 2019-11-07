import * as ActionTypes from '../actions/action-types';
import { getMultipleChoiceOptions } from '../../dataParser';


const initialState = getMultipleChoiceOptions();

const mutliSelectAnswersReducer = function(state=initialState, action) {
    switch(action.type) {
        case ActionTypes.MULTI_SELECT_ANSWERS_ADD_NEW:
            const emptyAnswer = {
                id: Math.random(), title: '', correct: false, selectedFeedback: "", unselectedFeedback: "", answer: ""
            };
            return {
                ...state,
                multiSelectAnswersList: state.multiSelectAnswersList.concat([emptyAnswer])
            };
        case ActionTypes.MULTI_SELECT_ANSWERS_REMOVE:
            const newMultiSelectAnswersList = state.multiSelectAnswersList.filter(multi => multi.id !== action.id);
            const newGroupFeedbackList = state.groupFeedbackList.map(feedback => {
                feedback.answers = feedback.answers.filter(ans => {
                    const answerIndex = newMultiSelectAnswersList.filter(el => el.id === ans)[0];
                    return newMultiSelectAnswersList.indexOf(answerIndex) !== -1;
                });
                return feedback;
            })
            return {
                ...state,
                groupFeedbackList: newGroupFeedbackList,
                multiSelectAnswersList: newMultiSelectAnswersList,
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
        // GroupFeedback
        case ActionTypes.GROUP_FEEDBACK_CHANGE:
            let groupFeedbackList = state.groupFeedbackList.map(el => {
                if (el.id === action.id) {
                    return {...action};
                } else {
                    return el;
                }
            });
            return {
                ...state,
                groupFeedbackList: groupFeedbackList
            };
        case ActionTypes.GROUP_FEEDBACK_ADD:
            return {
                ...state,
                groupFeedbackList: state.groupFeedbackList.concat({
                    answers: [],
                    feedback: '',
                    id: state.groupFeedbackList.length
                })
            };
        case ActionTypes.GROUP_FEEDBACK_REMOVE:
            return {
                ...state,
                groupFeedbackList: state.groupFeedbackList.filter(el => {
                    return el.id !== action.id;
                }).map((el, ind) => {el.id = ind; return el;})
            };
        default:
            return state;
    }
}

export default mutliSelectAnswersReducer;
