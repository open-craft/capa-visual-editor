import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import { connect } from 'react-redux';

import { Editor } from '@tinymce/tinymce-react';

import MultiAdvancedSettings from '../components/AdvancedSettings/MultiAdvancedSettings';
import MultiSelectAnswers from '../components/UnitEditorWidget/MultiSelectAnswers';

import * as actionTypes from '../store/actions/action-types';


const messages = defineMessages({
    title: {
        id: 'MultiSelectContainer.title',
        defaultMessage: 'Question*'
    },
    description: {
        id: 'MultiSelectContainer.description',
        defaultMessage: 'Create a question that has more than one answer.'
    }
});


export class MultiSelectContainer extends React.Component {

    handleEditorChange (e) {
        this.props.multiEditorContentChange(e.target.getContent());
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
                <MultiSelectAnswers
                    answersList={this.props.answersList}
                    multiSelectAddAnswer={this.props.multiSelectAddAnswer}
                    multiSelectRemoveAnswer={this.props.multiSelectRemoveAnswer}
                    multiSelectChangeAnswer={this.props.multiSelectChangeAnswer}

                />
                <MultiAdvancedSettings
                    answersList={this.props.answersList}
                    hints={this.props.hints}

                    groupFeedbackList={this.props.groupFeedbackList}
                    groupFeedbackChange={this.props.groupFeedbackChange}
                    groupFeedbackAdd={this.props.groupFeedbackAdd}
                    groupFeedbackRemove={this.props.groupFeedbackRemove}

                    hintAdd={this.props.hintAdd}
                    hintRemove={this.props.hintRemove}
                    hintChange={this.props.hintChange}

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
        editorContent: store.multiSelectEditor.content,
        // multi answers
        answersList: store.multiSelectAnswers.multiSelectAnswersList,
        // group feedback
        groupFeedbackList: store.multiSelectAnswers.groupFeedbackList,
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
        multiEditorContentChange: (content) => {
            return dispatch({type: actionTypes.MULTI_EDITOR_CONTENT_CHANGE, content: content});
        },
        // multiSelect answers
        multiSelectAddAnswer: (event) => {
            return dispatch({type: actionTypes.MULTI_SELECT_ANSWERS_ADD_NEW});
        },
        multiSelectRemoveAnswer: (id) => {
            return dispatch({type: actionTypes.MULTI_SELECT_ANSWERS_REMOVE, id: id});
        },
        multiSelectChangeAnswer: (event) => {
            return dispatch({type: actionTypes.MULTI_SELECT_ANSWERS_CHANGED, ...event});
        },
        // groupFeedback
        groupFeedbackChange: (data) => {
            return dispatch({type: actionTypes.GROUP_FEEDBACK_CHANGE, ...data});
        },
        groupFeedbackAdd: () => {
            return dispatch({type: actionTypes.GROUP_FEEDBACK_ADD});
        },
        groupFeedbackRemove: (id) => {
            return dispatch({type: actionTypes.GROUP_FEEDBACK_REMOVE, id: id});
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
        // scorring settings
        scorringAttemptsChange: (value) => {
            return dispatch({type: actionTypes.SCORRING_TEMPTS_CHANGED, ...value})
        },
        scorringPointsChange: (value) => {
            return dispatch({type: actionTypes.SCORRING_POINTS_CHANGED, ...value})
        }


    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(MultiSelectContainer));
