import { combineReducers } from 'redux';

import singleSelectAnswersReducer from './singleSelectAnswersReducer';
import multiSelectAnswersReducer from './multiSelectAnswersReducer';
import HintSettingReducer from './HintSettingReducer';
import ScorringSettingReducer from './ScorringSettingReducer';

import ShortAnswerReducer from './ShortAnswerReducer';
import MultiSelectEditorReducer from './MultiSelectEditorReducer';
import SingleSelectEditorReducer from './SingleSelectEditorReducer';
import ShortAnswerEditorReducer from './ShortAnswerEditorReducer';


var reducers = combineReducers({
    singleSelectAnswers: singleSelectAnswersReducer,
    multiSelectAnswers: multiSelectAnswersReducer,
    hintSettings: HintSettingReducer,
    scorringSettings: ScorringSettingReducer,
    shortAnswersData: ShortAnswerReducer,
    multiSelectEditor: MultiSelectEditorReducer,
    singleSelectEditor: SingleSelectEditorReducer,
    shortAnswerEditor: ShortAnswerEditorReducer
});

export default reducers;
