import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/action-types';

import MultiSelectAnswers from '../components/UnitEditorWidget/MultiSelectAnswers';
import MultiAdvancedSettings from '../components/AdvancedSettings/MultiAdvancedSettings';


export class MultiSelectContainer extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className="unit-editor-wrapper">
                <Editor
                    className="advanced-settings-block"
                    apiKey='283hsctoygj8rdat1mccsgurzgph73mg3pdgu0lc7j9wq6vr'
                    initialValue="<p>This is the initial content of the editor</p>"
                    onChange={this.handleEditorChange}
                />
                <MultiSelectAnswers {...this.props}
                />
                <MultiAdvancedSettings {...this.props}
                />
            </div>
        )
    }
};

const mapStateToProps = (store) => {
    console.log(store);
    return {
        answersList: store.multiSelectAnswers.multiSelectAnswersList,
        feedbackContent: store.generalFeedbackSettings.feedbackContent,
        groupFeedbackContent: store.groupFeedbackSettings.groupFeedbackContent,
        hints: store.hintSettings.hints
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        // answers
        addAnswer: (event) => {
            return dispatch({type: actionTypes.MULTI_SELECT_ANSWERS_ADD_NEW});
        },
        removeAnswer: (id) => {
            return dispatch({type: actionTypes.MULTI_SELECT_ANSWERS_REMOVE, id: id});
        },
        answerChange: (event) => {
            return dispatch({type: actionTypes.MULTI_SELECT_ANSWERS_CHANGED, ...event});
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
        add: (event) => {
            return dispatch({type: actionTypes.ADVANCED_SETTING_HINT_ADD});
        },
        remove: (id) => {
            return dispatch({type: actionTypes.ADVANCED_SETTING_HINT_REMOVE, id: id});
        },
        change: (data) => {
            return dispatch({type: actionTypes.ADVANCED_SETTING_HINT_CHANGED, ...data});
        },


    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(MultiSelectContainer);
