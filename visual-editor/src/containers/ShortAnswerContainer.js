import React  from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { connect } from 'react-redux';

import * as actionTypes from '../store/actions/action-types';

import ShortAnswers from '../components/UnitEditorWidget/ShortAnswers';
import {ShortAdvancedSettings} from '../components/AdvancedSettings/ShortAdvancedSettings';

import '../assets/scss/app.scss';


export class ShortAnswerContainer extends React.Component {

    handleEditorChange (e) {
        this.props.tinyEditorContentChange(e.target.getContent());
    }

    render() {
        return (
                <div className="unit-editor-wrapper">
                    <Editor
                        className="advanced-settings-block"
                        apiKey='283hsctoygj8rdat1mccsgurzgph73mg3pdgu0lc7j9wq6vr'
                        onChange={this.handleEditorChange.bind(this)}
                        initialValue={this.props.editorContent}
                        value={this.props.editorContent}
                    />
                    <ShortAnswers
                        shortAnswersList={this.props.shortAnswersList}
                        shortAnswersAddAnswer={this.props.shortAnswersAddAnswer}
                        shortAnswersRemoveAnswer={this.props.shortAnswersRemoveAnswer}
                        shortAnswersChangeAnswer={this.props.shortAnswersChangeAnswer}
                    />
                    <ShortAdvancedSettings
                        feedbackContent={this.props.feedbackContent}

                        groupFeedbackContent={this.props.groupFeedbackContent}
    
                        hints={this.props.hints}
    
                        generalFeedbackChange={this.props.generalFeedbackChange}
    
                        groupFeedbackchange={this.props.groupFeedbackchange}
    
                        hintAdd={this.props.hintAdd}
                        hintRemove={this.props.hintRemove}
                        hintChange={this.props.hintChange}
    
                        answerTypeSelectedOption={this.props.answerTypeSelectedOption}
                        answerTypeOptions={this.props.answerTypeOptions}
                        answerTypeChange={this.props.answerTypeChange}
    
                        scorringSelectedPointOption={this.props.scorringSelectedPointOption}
                        scorringSelectedTemptOption={this.props.scorringSelectedTemptOption}
                        scorringTemptsOptions={this.props.scorringTemptsOptions}
                        scorringPointsOptions={this.props.scorringPointsOptions}
                        scorringTemptsChange={this.props.scorringTemptsChange}
                        scorringPointsChange={this.props.scorringPointsChange}

                    />
                </div>
        );
    }

}

const mapStateToProps = (store) => {
    return {
        shortAnswersList: store.shortAnswersData.shortAnswersList,
        // editor content
        editorContent: store.editorContent.content,
        // single answers feedback 
        feedbackContent: store.generalFeedbackSettings.feedbackContent,
        // group feedback
        groupFeedbackContent: store.groupFeedbackSettings.groupFeedbackContent,
        // hints
        hints: store.hintSettings.hints,
        // answer type
        answerTypeSelectedOption: store.answerTypeSettings.selectedType,
        answerTypeOptions: store.answerTypeSettings.accessibleTypes,
        // scorring
        scorringSelectedPointOption: store.scorringSettings.selectedPointOption,
        scorringSelectedTemptOption: store.scorringSettings.selectedTemptOption,
        scorringTemptsOptions: store.scorringSettings.temptsOptions,
        scorringPointsOptions: store.scorringSettings.pointsOptions
    }
};

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        // editor
        tinyEditorContentChange: (content) => {
            return dispatch({type: actionTypes.EDITOR_CONTENT_CHANGE, content: content});
        },
        shortAnswersAddAnswer: (event) => {
            return dispatch({type: actionTypes.SHORT_ANSWERS_ADD_NEW});
        },
        shortAnswersRemoveAnswer: (id) => {
            return dispatch({type: actionTypes.SHORT_ANSWERS_REMOVE, id: id});
        },
        shortAnswersChangeAnswer: (data) => {
            return dispatch({type: actionTypes.SHORT_ANSWERS_CHANGED, ...data});
        },
        // general Feedback
        generalFeedbackChange: (event) => {
            return dispatch({type: actionTypes.GENERAL_FEEDBACK_CHANGED, feedbackContent: event.target.value});
        },
        // groupFeedback
        groupFeedbackchange: (event) => {
            return dispatch({type: actionTypes.GROUP_FEEDBACK_SETTING_CHANGED, groupFeedbackContent: event.target.value});
        },
        // Hints
        hintAdd: (event) => {
            return dispatch({type: actionTypes.ADVANCED_SETTING_HINT_ADD});
        },
        hintRemove: (id) => {
            return dispatch({type: actionTypes.ADVANCED_SETTING_HINT_REMOVE, id: id});
        },
        hintChange: (data) => {
            return dispatch({type: actionTypes.ADVANCED_SETTING_HINT_CHANGED, ...data});
        },
        // answerType setting
        answerTypeChange: (value) => {
            return dispatch({type: actionTypes.ANSWER_TYPE_SETTING_CHANGED, selectedType: value})
        },
        // scorring settings
        scorringTemptsChange: (value) => {
            return dispatch({type: actionTypes.SCORRING_TEMPTS_CHANGED, ...value})
        },
        scorringPointsChange: (value) => {
            return dispatch({type: actionTypes.SCORRING_POINTS_CHANGED, ...value})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortAnswerContainer);
