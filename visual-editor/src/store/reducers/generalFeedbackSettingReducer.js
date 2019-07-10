import * as actionTypes from '../actions/action-types';

const initialState = {
    feedbackContent: ""
};

const generalFeedbackSettingReducer = function(state=initialState, action) {
    switch(action.type) {
        case actionTypes.GENERAL_FEEDBACK_CHANGED:
            return Object.assign({}, state, {feedbackContent: action.feedbackContent});
    }
    return state;
};

export default generalFeedbackSettingReducer;
