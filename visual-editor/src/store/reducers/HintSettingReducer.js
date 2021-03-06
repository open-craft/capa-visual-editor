import {ADVANCED_SETTING_HINT_ADD, ADVANCED_SETTING_HINT_REMOVE, ADVANCED_SETTING_HINT_CHANGED} from '../actions/action-types';
import { getHints } from '../../dataParser';

const initialState = {
    hints: getHints(),
};

const HintSettingReducer = function(state=initialState, action) {
    switch(action.type) {
        case ADVANCED_SETTING_HINT_ADD:
            let newOne = {
                id: Math.random(),
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