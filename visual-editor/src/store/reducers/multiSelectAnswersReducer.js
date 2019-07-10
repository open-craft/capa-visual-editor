import * as ActionTypes from '../actions/action-types';

const initialState = {
    multiSelectAnswersList: [
        {id: 1, title: 'Cholesterol molecule', correct: false, selectedFeedback: "Example1", unselectedFeedback: "", answer: ""},
        {id: 2, title: 'Protein channel', correct: false, selectedFeedback: "Example2", unselectedFeedback: "", answer: ""},
        {id: 3, title: 'Glycoprotein molecule', correct: true, selectedFeedback: "Example3", unselectedFeedback: "", answer: ""},
        {id: 4, title: 'Phospholipid molecule', correct: false, selectedFeedback: "Example4", unselectedFeedback: "", answer: ""},
    ]
};

const mutliSelectAnswersReducer = function(state=initialState, action) {
    switch(action.type) {
        case ActionTypes.MULTI_SELECT_ANSWERS_ADD_NEW:
            const lastId = state.multiSelectAnswersList[state.multiSelectAnswersList.length-1].id;
            let emptyAnswer = {
                id: lastId + 1, title: '', correct: false, selectedFeedback: "", unselectedFeedback: "", answer: ""
            };
            return {
                multiSelectAnswersList: state.multiSelectAnswersList.concat([emptyAnswer])
            }
        case ActionTypes.MULTI_SELECT_ANSWERS_REMOVE:
            return {
                multiSelectAnswersList: state.multiSelectAnswersList.filter(multi => multi.id !== action.id)
            }
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
            }
    }
    return state;
}

export default mutliSelectAnswersReducer;
