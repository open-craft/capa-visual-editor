import {SHORT_ANSWERS_ADD_NEW, SHORT_ANSWERS_REMOVE, SHORT_ANSWERS_CHANGED} from '../actions/action-types';

const initialState = {
    shortAnswersList: [
        {id: 1, value: 'Value 1'},
        {id: 2, value: 'Value 2'},
        {id: 3, value: 'Value 3'},
    ]
};

const ShortAnswerReducer = function(state=initialState, action) {
    switch (action.type) {
        case SHORT_ANSWERS_ADD_NEW:
            const lastId = state.shortAnswersList[state.shortAnswersList.length-1].id;
            let emptyAnswer = {
                id: lastId + 1, value: ''
            };
            return {
                shortAnswersList: state.shortAnswersList.concat([emptyAnswer])
            };
        case SHORT_ANSWERS_REMOVE:
            return {
                shortAnswersList: state.shortAnswersList.filter(single => single.id !== action.id)
            };
        case SHORT_ANSWERS_CHANGED:
            return {
                shortAnswersList: state.shortAnswersList.map((single) => {
                    if (single.id === action.id) {
                        return {
                            id: action.id,
                            value: action.value
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
