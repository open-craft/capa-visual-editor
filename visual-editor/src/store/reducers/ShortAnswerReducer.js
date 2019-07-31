import {SHORT_ANSWERS_ADD_NEW, SHORT_ANSWERS_REMOVE, SHORT_ANSWERS_CHANGED} from '../actions/action-types';
import { getShortAnswerOptions } from '../../dataParser';

const defaultOption = {id:1, value: 'text', label: 'text'};

const initialState = getShortAnswerOptions();


const ShortAnswerReducer = function(state=initialState, action) {
    switch (action.type) {
        case SHORT_ANSWERS_ADD_NEW:
            const lastId = state.shortAnswersList[state.shortAnswersList.length-1].id;
            let emptyAnswer = {
                id: lastId + 1, value: '', currentType: defaultOption
            };
            return {
                ...state,
                shortAnswersList: state.shortAnswersList.concat([emptyAnswer])
            };
        case SHORT_ANSWERS_REMOVE:
            return {
                ...state,
                shortAnswersList: state.shortAnswersList.filter(
                    single => single.id !== action.id
                )
            };
        case SHORT_ANSWERS_CHANGED:
            return {
                ...state,
                shortAnswersList: state.shortAnswersList.map((single) => {
                    if (single.id === action.id) {
                        return {
                            id: action.id,
                            value: action.value,
                            currentType: action.currentType
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
