import * as ActionTypes from '../actions/action-types';

const initialState = {
    singleSelectAnswersList: [
        {id: 1, title: 'Cholesterol molecule', correct: false, feedback: "Example1"},
        {id: 2, title: 'Protein channel', correct: false, feedback: "Example2"},
        {id: 3, title: 'Glycoprotein molecule', correct: true, feedback: "Example3"},
        {id: 4, title: 'Phospholipid molecule', correct: false, feedback: "Example4"},
    ]
};

const singleSelectAnswersReducer = function(state=initialState, action) {
    switch(action.type) {
        case ActionTypes.SINGLE_SELECT_ANSWERS_ADD_NEW:
            const lastId = state.singleSelectAnswersList[state.singleSelectAnswersList.length-1].id;
            let emptyAnswer = {
                id: lastId + 1, title: '', correct: false, feedback: ""
            };
            return {
                singleSelectAnswersList: state.singleSelectAnswersList.concat([emptyAnswer])
            }
        case ActionTypes.SINGLE_SELECT_ANSWERS_REMOVE:
            return {
                singleSelectAnswersList: state.singleSelectAnswersList.filter(single => single.id !== action.id)
            }
        case ActionTypes.SINGLE_SELECT_ANSWERS_CHANGED:
            console.log('ACTION - SINGLE_SELECT_ANSWERS_CHANGED - action', action);
            return {
                singleSelectAnswersList: state.singleSelectAnswersList.map((single) => {
                    if (single.id === action.id) {
                        return {
                            id: action.id,
                            title: action.title,
                            correct: action.correct,
                            feedback: action.feedback
                        }
                    } else {
                        return single;
                    }
                })
            }
    }
    return state;
}

export default singleSelectAnswersReducer;
