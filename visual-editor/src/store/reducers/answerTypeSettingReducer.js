import * as actionTypes from '../actions/action-types';

const initialState = {
    selectedType: "",
    accessibleTypes: [
        { value: 'radio', label: 'Radio button' },
        { value: 'select', label: 'Select list' },
    ]
}

const answerTypeSettingReducer = function(state=initialState, action) {
    switch(action.type) {
        case actionTypes.ANSWER_TYPE_SETTING_CHANGED:
            return Object.assign({}, state, {selectedType: action.selectedType});
        default:
            return state;
    }
};

export default answerTypeSettingReducer;
