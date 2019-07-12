import React from 'react';
import HintSettingItem from './HintSettingItem';

export default class HintSetting extends React.PureComponent {

    render() {
        console.log(this.props);
        return (
            <div className="advanced-settings-block">
                <div className="advanced-settings-block-title">Hint</div>
                <div className="advanced-settings-block-description">If unsure, a student can check the hint before answering a question.</div>
                <div className="advanced-settings-form">
                    {
                        this.props.hints.map(hint => {
                            return (
                                <HintSettingItem key={hint.id} {...hint} hintChange={this.props.hintChange} hintRemove={this.props.hintRemove}/>
                            )
                        })
                    }
                    <button className="advanced-settings-another-field-btn" type='button' onClick={this.props.hintAdd}>+ add another hint</button>
                    <div className="advanced-settings-note">Note: Hints can be turned off in an assignment.</div>
                </div>
            </div>
        )
    }
};
