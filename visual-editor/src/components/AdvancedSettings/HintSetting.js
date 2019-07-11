import React from 'react';
import HintSettingItem from './HintSettingItem';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/action-types';

export class HintSetting extends React.PureComponent {

    render() {
        return (
            <div className="advanced-settings-block">
                <div className="advanced-settings-block-title">Hint</div>
                <div className="advanced-settings-block-description">If unsure, a student can check the hint before answering a question.</div>
                <div className="advanced-settings-form">
                    {
                        this.props.hints.map(hint => {
                            return (
                                <HintSettingItem key={hint.id} {...hint} changeHint={this.props.change} removeHint={this.props.remove}/>
                            )
                        })
                    }
                    <button className="advanced-settings-another-field-btn" type='button' onClick={this.props.add}>+ add another hint</button>
                    <div className="advanced-settings-note">Note: Hints can be turned off in an assignment.</div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = function(store) {
    return {
        hints: store.hintSettings.hints
    }
};

const mapDispatchToProps = function(dispatch) {
    return {
        add: (event) => {
            return dispatch({type: actionTypes.ADVANCED_SETTING_HINT_ADD});
        },
        remove: (id) => {
            return dispatch({type: actionTypes.ADVANCED_SETTING_HINT_REMOVE, id: id});
        },
        change: (data) => {
            return dispatch({type: actionTypes.ADVANCED_SETTING_HINT_CHANGED, ...data});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HintSetting);
