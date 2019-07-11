import { combineReducers } from 'redux';
import multiAdvancedSettings from './multiAdvancedSettingReducer';
import singleSelectAnswersReducer from './singleSelectAnswersReducer';
import multiSelectAnswersReducer from './multiSelectAnswersReducer';
import answerTypeSettingReducer from './answerTypeSettingReducer';
import generalFeedbackSettingReducer from './generalFeedbackSettingReducer';
import HintSettingReducer from './HintSettingReducer';
import ScorringSettingReducer from './ScorringSettingReducer';
import GroupFeedbackSettingReducer from './GroupFeedbackSettingReducer';
import ShortAnswerReducer from './ShortAnswerReducer';


var reducers = combineReducers({
    multiAdvancedSettings: multiAdvancedSettings,
    singleSelectAnswers: singleSelectAnswersReducer,
    multiSelectAnswers: multiSelectAnswersReducer,
    answerTypeSettings: answerTypeSettingReducer,
    generalFeedbackSettings: generalFeedbackSettingReducer,
    hintSettings: HintSettingReducer,
    scorringSettings: ScorringSettingReducer,
    groupFeedbackSettings: GroupFeedbackSettingReducer,
    shortAnswersData: ShortAnswerReducer
});

export default reducers;
