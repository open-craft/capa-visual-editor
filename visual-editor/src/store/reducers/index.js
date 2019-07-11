import { combineReducers } from 'redux';
import multiAdvancedSettings from './multiAdvancedSettingReducer';
import singleSelectAnswersReducer from './singleSelectAnswersReducer';
import multiSelectAnswersReducer from './multiSelectAnswersReducer';
import answerTypeSettingReducer from './answerTypeSettingReducer';
import generalFeedbackSettingReducer from './generalFeedbackSettingReducer';
import HintSettingReducer from './HintSettingReducer';
import ScorringSettingReducer from './ScorringSettingReducer';


var reducers = combineReducers({
    multiAdvancedSettings: multiAdvancedSettings,
    singleSelectAnswers: singleSelectAnswersReducer,
    multiSelectAnswers: multiSelectAnswersReducer,
    answerTypeSettings: answerTypeSettingReducer,
    generalFeedbackSettings: generalFeedbackSettingReducer,
    hintSettings: HintSettingReducer,
    scorringSettings: ScorringSettingReducer
});

export default reducers;
