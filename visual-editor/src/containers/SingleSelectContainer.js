import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/action-types';

import SingleSelectAnswers from '../components/UnitEditorWidget/SingleSelectAnswers';
import SingleAdvancedSettings from '../components/AdvancedSettings/SingleAdvancedSettings';


export class SingleSelectContainer extends React.Component {
    render() {
        return (
            <div className="unit-editor-wrapper">
                <Editor
                    className="advanced-settings-block"
                    apiKey='283hsctoygj8rdat1mccsgurzgph73mg3pdgu0lc7j9wq6vr'
                    initialValue="<p>This is the initial content of the editor</p>"
                    onChange={this.handleEditorChange}
                />
                <SingleSelectAnswers {...this.props}/>
                <SingleAdvancedSettings {...this.props}/>
            </div>
        )
    }
};

const mapStateToProps = (store) => {
    return {
        answersList: store.multiSelectAnswers.multiSelectAnswersList,
        feedbackContent: store.generalFeedbackSettings.feedbackContent,
        groupFeedbackContent: store.groupFeedbackSettings.groupFeedbackContent,
        hints: store.hintSettings.hints
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        // singleSelect answers
        singleSelectAddAnswer: (event) => {
            return dispatch({type: actionTypes.SINGLE_SELECT_ANSWERS_ADD_NEW});
        },
        singleSelectRemoveAnswer: (id) => {
            return dispatch({type: actionTypes.SINGLE_SELECT_ANSWERS_REMOVE, id: id});
        },
        singleSelectAnswerChange: (event) => {
            return dispatch({type: actionTypes.SINGLE_SELECT_ANSWERS_CHANGED, ...event});
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


    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(SingleSelectContainer);