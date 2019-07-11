import * as React from 'react';
import {MultiSelectItem} from './MultiSelectItem';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/action-types';

import '../../assets/scss/app.scss';


export class MultiSelectAnswers extends React.PureComponent {

    render() {
        return (
            <fieldset className="answers-wrapper">
                <legend className="answers-title">Answers*</legend>
                <div className="answers-description">
                    Enter the answers below and select whether an answer is correct or incorrect.
                    Remember, you can have more than one correct answer.
                </div>
                <div className="answers-list answers-list_multi">
                    {
                        this.props.answersList.map((answer) => {
                            return <MultiSelectItem key={answer.id} {...answer} answerChanged={this.props.answerChanged} />
                        })
                    }
                    <div className="answers-another-option">
                        <button className="answers-another-option-btn" type='button'>
                            + Add <span className="hide-mobile">another</span> answer
                        </button>
                    </div>
                </div>
            </fieldset>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        answersList: store.multiSelectAnswers.multiSelectAnswersList
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        addAnswer: (event) => {
            return dispatch({type: actionTypes.MULTI_SELECT_ANSWERS_ADD_NEW});
        },
        removeAnswer: (id) => {
            return dispatch({type: actionTypes.MULTI_SELECT_ANSWERS_REMOVE, id: id});
        },
        answerChanged: (event) => {
            return dispatch({type: actionTypes.MULTI_SELECT_ANSWERS_CHANGED, ...event});
        }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(MultiSelectAnswers);
