import {EDITOR_CONTENT_CHANGE} from '../actions/action-types';

const initialState = {
    content: "<p>This is the initial content of the dddddeditor</p>"
};

const editorContent = function(state=initialState, action) {
    switch(action.type) {
        case EDITOR_CONTENT_CHANGE:
            return Object.assign({}, state, {content: action.content});
        default:
            return state;
    }
};

export default editorContent;