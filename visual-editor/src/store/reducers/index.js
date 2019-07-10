import { combineReducers } from 'redux';
import multiAdvancedSettings from './multiAdvancedSettingReducer';
import singleSelectAnswersReducer from './singleSelectAnswersReducer';
import multiSelectAnswersReducer from './multiSelectAnswersReducer';
import answerTypeSettingReducer from './answerTypeSettingReducer';
import generalFeedbackSettingReducer from './generalFeedbackSettingReducer';


var reducers = combineReducers({
    multiAdvancedSettings: multiAdvancedSettings,
    singleSelectAnswers: singleSelectAnswersReducer,
    multiSelectAnswers: multiSelectAnswersReducer,
    answerTypeSettings: answerTypeSettingReducer,
    generalFeedbackSettings: generalFeedbackSettingReducer
});

export default reducers;
