import {ADVANCED_SETTING_HINT_ADD, ADVANCED_SETTING_HINT_REMOVE, ADVANCED_SETTING_HINT_CHANGED} from '../actions/action-types';

const initialState = {
    hints: [
        {id: 1, value: 'Hint 1'},
        {id: 2, value: 'Hint 2'},
        {id: 3, value: 'Hint 3'}
    ],
};

const HintSettingReducer = function(state=initialState, action) {
    switch(action.type) {
        case ADVANCED_SETTING_HINT_ADD:
            let lastId = state.hints[state.hints.length-1].id;
            let newOne = {
                id: lastId + 1,
                value: ""
            };
            return Object.assign({}, state, {hints: state.hints.concat([newOne])});
        case ADVANCED_SETTING_HINT_REMOVE:
            return Object.assign({}, state, {
                hints: state.hints.filter(hint => hint.id !== action.id)
            });
        case ADVANCED_SETTING_HINT_CHANGED:
            return Object.assign({}, state, {
                hints: state.hints.map(hint => {
                    if (hint.id === action.id) {
                        let {id, value} = action;
                        return {
                            id: id,
                            value: value
                        }
                    } else {
                        return hint;
                    }
                })
            });
        default:
            return state;
    }
};

export default HintSettingReducer;