import {SINGLE_EDITOR_CONTENT_CHANGE} from '../actions/action-types';
import { getEditorData } from '../../dataParser';


const initialState = {
    content: getEditorData()
};

const SingleSelectEditorReducer = function(state=initialState, action) {
    switch(action.type) {
        case SINGLE_EDITOR_CONTENT_CHANGE:
            return Object.assign({}, state, {content: action.content});
        default:
            return state;
    }
};

export default SingleSelectEditorReducer;
