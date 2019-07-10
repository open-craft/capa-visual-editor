import { combineReducers } from 'redux';

// Reducers
import globalReducer from './globalReducer';
import multiAdvancedSettings from './multiAdvancedSettingReducer';
import singleSelectAnswersReducer from './singleSelectAnswersReducer';

// Combine Reducers
var reducers = combineReducers({
    multiAdvancedSettings: multiAdvancedSettings,
    // globalState: globalReducer,
    singleSelectAnswers: singleSelectAnswersReducer
});

export default reducers;
