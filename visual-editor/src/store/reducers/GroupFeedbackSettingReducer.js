import {GROUP_FEEDBACK_SETTING_CHANGED} from '../actions/action-types';

const initialState = {
    groupFeedbackContent: ""
};

const GroupFeedbackSettingReducer = function(state=initialState, action) {
    switch(action.type) {
        case GROUP_FEEDBACK_SETTING_CHANGED:
            return {
                groupFeedbackContent: action.groupFeedbackContent
            };
        default:
            return state;
    }
};

export default GroupFeedbackSettingReducer;