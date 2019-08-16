import React  from 'react';
import { defineMessages, injectIntl } from 'react-intl';

import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/code';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';

import { connect } from 'react-redux';

import * as actionTypes from '../store/actions/action-types';

import ShortAnswers from '../components/UnitEditorWidget/ShortAnswers';
import ShortAdvancedSettings from '../components/AdvancedSettings/ShortAdvancedSettings';

import '../assets/scss/app.scss';

const messages = defineMessages({
    title: {
        id: 'ShortAnswerContainer.title',
        defaultMessage: 'Question*'
    },
    description: {
        id: 'ShortAnswerContainer.description',
        defaultMessage: 'Create a question that only has one answer.'
    }
});
class ShortAnswerContainer extends React.Component {

    componentDidMount(){
		tinymce.init({
            selector: '.addAnswerArea',
            menubar: false,
            skin_url: "https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.5.10/skins/lightgray/",
            statusbar: false,
            plugins: 'link code image',
            apply_source_formatting : true,
            toolbar: 'formatselect | bold italic | code blockquote link image | undo redo',
            height: 340,
            content_style: 'body{font-family: BioSans_Regular, Arial, sans-serif; color: #003e6b}' +
'                               div,p{font-size: 16px;} p{margin: 10px 0 0}',
        });
	}

    handleEditorChange (e) {
        this.props.shortAnswerEditorContentChange(e.target.getContent());
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

                        <textarea 
                            className="lxc-advanced-settings-block addAnswerArea" 
                            defaultValue={this.props.editorContent} 
                            onChange={this.handleEditorChange.bind(this)}/>
                    </fieldset>
                    <ShortAnswers
                        shortAnswersList={this.props.shortAnswersList}
                        typeOptions={this.props.typeOptions}
                        shortAnswersAddCorrectAnswer={this.props.shortAnswersAddCorrectAnswer}
                        shortAnswersAddIncorrectAnswer={this.props.shortAnswersAddIncorrectAnswer}
                        shortAnswersRemoveAnswer={this.props.shortAnswersRemoveAnswer}
                        shortAnswersChangeAnswer={this.props.shortAnswersChangeAnswer}
                    />
                    <ShortAdvancedSettings

                        groupFeedbackContent={this.props.groupFeedbackContent}

                        hints={this.props.hints}

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
        );
    }

}

const mapStateToProps = (store) => {
    return {
        shortAnswersList: store.shortAnswersData.shortAnswersList,
        typeOptions: store.shortAnswersData.typeOptions,
        // editor content
        editorContent: store.shortAnswerEditor.content,
        // group feedback
        groupFeedbackData: store.multiSelectAnswers.groupFeedbackData,
        // hints
        hints: store.hintSettings.hints,
        // answer type
        answerTypeSelectedOption: store.singleSelectAnswers.selectedType,
        answerTypeOptions: store.singleSelectAnswers.accessibleTypes,
        // scorring
        scorringSelectedPointOption: store.scorringSettings.selectedPointOption,
        scorringselectedAttemptsOption: store.scorringSettings.selectedAttemptsOption,
        scorringattemptsOptions: store.scorringSettings.attemptsOptions,
        scorringPointsOptions: store.scorringSettings.pointsOptions
    }
};

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        // editor
        shortAnswerEditorContentChange: (content) => {
            return dispatch({type: actionTypes.SHORT_ANSWER_EDITOR_CONTENT_CHANGE, content: content});
        },
        shortAnswersAddCorrectAnswer: (event) => {
            return dispatch({type: actionTypes.SHORT_ANSWERS_ADD_CORRECT});
        },
        shortAnswersAddIncorrectAnswer: (event) => {
            return dispatch({type: actionTypes.SHORT_ANSWERS_ADD_INCORRECT});
        },
        shortAnswersRemoveAnswer: (id) => {
            return dispatch({type: actionTypes.SHORT_ANSWERS_REMOVE, id: id});
        },
        shortAnswersChangeAnswer: (data) => {
            return dispatch({type: actionTypes.SHORT_ANSWERS_CHANGED, ...data});
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ShortAnswerContainer));
