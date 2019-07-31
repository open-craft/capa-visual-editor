import {SHORT_ANSWER_EDITOR_CONTENT_CHANGE} from '../actions/action-types';
import { getEditorData } from '../../dataParser';

const initialState = {
    content: getEditorData()
};

const ShortAnswerEditorReducer = function(state=initialState, action) {
    switch(action.type) {
        case SHORT_ANSWER_EDITOR_CONTENT_CHANGE:
            return Object.assign({}, state, {content: action.content});
        default:
            return state;
    }
};

export default ShortAnswerEditorReducer;
