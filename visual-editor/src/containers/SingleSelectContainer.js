import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { defineMessages, injectIntl } from 'react-intl';

import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/action-types';

import SingleSelectAnswers from '../components/UnitEditorWidget/SingleSelectAnswers';
import SingleAdvancedSettings from '../components/AdvancedSettings/SingleAdvancedSettings';

const messages = defineMessages({
    title: {
        id: 'SingleSelectContainer.title',
        defaultMessage: 'Question*'
    },
    description: {
        id: 'SingleSelectContainer.description',
        defaultMessage: 'Create a question that only has one answer.'
    }
});

export class SingleSelectContainer extends React.Component {

    handleEditorChange (e) {
        this.props.singleEditorContentChange(e.target.getContent());
    }

    render() {
        const { formatMessage } = this.props.intl;
        return (
            <div className='lxc-unit-editor-wrapper'>
                <fieldset className='lxc-answers-wrapper'>
                    <legend className='lxc-answers-title'>
                        {formatMessage(messages.title)}
                    </legend>
                    <div className='lxc-answers-description'>
                        {formatMessage(messages.description)}
                    </div>
                    <Editor
                        init={{
                            menubar: false,
                            statusbar: false,
                            plugins: 'link code image advcode',
                            apply_source_formatting : true,
                            toolbar: 'formatselect | bold italic | code blockquote link image | undo redo',
                            height: 340,
                            content_style: 'body{font-family: BioSans_Regular, Arial, sans-serif; color: #003e6b}' +
            '                               div,p{font-size: 16px;} p{margin: 10px 0 0}',
                        }}
                        className='lxc-advanced-settings-block'
                        onChange={this.handleEditorChange.bind(this)}
                        initialValue={this.props.editorContent}
                    />
                </fieldset>
                <SingleSelectAnswers
                    answersList={this.props.answersList}
                    singleSelectChangeAnswer={this.props.singleSelectChangeAnswer}
                    singleSelectRemoveAnswer={this.props.singleSelectRemoveAnswer}
                    singleSelectAddAnswer={this.props.singleSelectAddAnswer}
                />
                <SingleAdvancedSettings

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
                    scorringselectedAttemptsOption={this.props.scorringselectedAttemptsOption}
                    scorringattemptsOptions={this.props.scorringattemptsOptions}
                    scorringPointsOptions={this.props.scorringPointsOptions}
                    scorringAttemptsChange={this.props.scorringAttemptsChange}
                    scorringPointsChange={this.props.scorringPointsChange}
                />
            </div>
        )
    }
};

const mapStateToProps = (store) => {
    return {
        // editor content
        editorContent: store.singleSelectEditor.content,
        // single answers
        answersList: store.singleSelectAnswers.singleSelectAnswersList,
        // answer type
        answerTypeSelectedOption: store.singleSelectAnswers.selectedType,
        answerTypeOptions: store.singleSelectAnswers.accessibleTypes,
        // group feedback
        groupFeedbackContent: store.multiSelectAnswers.groupFeedbackContent,
        // hints
        hints: store.hintSettings.hints,
        // scorring
        scorringSelectedPointOption: store.scorringSettings.selectedPointOption,
        scorringselectedAttemptsOption: store.scorringSettings.selectedAttemptsOption,
        scorringattemptsOptions: store.scorringSettings.attemptsOptions,
        scorringPointsOptions: store.scorringSettings.pointsOptions
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        // editor
        singleEditorContentChange: (content) => {
            return dispatch({type: actionTypes.SINGLE_EDITOR_CONTENT_CHANGE, content: content});
        },
        // singleSelect answers
        singleSelectAddAnswer: (event) => {
            return dispatch({type: actionTypes.SINGLE_SELECT_ANSWERS_ADD_NEW});
        },
        singleSelectRemoveAnswer: (id) => {
            return dispatch({type: actionTypes.SINGLE_SELECT_ANSWERS_REMOVE, id: id});
        },
        singleSelectChangeAnswer: (event) => {
            return dispatch({type: actionTypes.SINGLE_SELECT_ANSWERS_CHANGED, ...event});
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
        scorringAttemptsChange: (value) => {
            return dispatch({type: actionTypes.SCORRING_TEMPTS_CHANGED, ...value})
        },
        scorringPointsChange: (value) => {
            return dispatch({type: actionTypes.SCORRING_POINTS_CHANGED, ...value})
        }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(SingleSelectContainer));
