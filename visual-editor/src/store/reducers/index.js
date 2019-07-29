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
import MultiSelectEditorReducer from './MultiSelectEditorReducer';
import SingleSelectEditorReducer from './SingleSelectEditorReducer';
import ShortAnswerEditorReducer from './ShortAnswerEditorReducer';


var reducers = combineReducers({
    multiAdvancedSettings: multiAdvancedSettings,
    singleSelectAnswers: singleSelectAnswersReducer,
    multiSelectAnswers: multiSelectAnswersReducer,
    answerTypeSettings: answerTypeSettingReducer,
    generalFeedbackSettings: generalFeedbackSettingReducer,
    hintSettings: HintSettingReducer,
    scorringSettings: ScorringSettingReducer,
    groupFeedbackSettings: GroupFeedbackSettingReducer,
    shortAnswersData: ShortAnswerReducer,
    multiSelectEditor: MultiSelectEditorReducer,
    singleSelectEditor: SingleSelectEditorReducer,
    shortAnswerEditor: ShortAnswerEditorReducer
    // todo: refactor reducers in such way, to store all data related to one question type
    // in one place
    // multiSelectSettings: multiSelectSettingsReducer
    // singleSelectSettings: singleSelectSettingsReducer
});

export default reducers;
