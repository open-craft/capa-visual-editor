import React from 'react';
import HintSettingItem from './HintSettingItem';

export default class HintSetting extends React.PureComponent {

    constructor(props) {
        super(props);

        this.addHint = this.addHint.bind(this);

        this.state = {
            hints: [
                {id: 1, value: 'Hint 1'},
                {id: 2, value: 'Hint 2'},
                {id: 3, value: 'Hint 3'}
            ]
        }
    }

    addHint() {
        let newHints = this.state.hints.map(hint => hint);
        let lastHintId = newHints[newHints.length-1].id;
        let newHint = {
            id: ++lastHintId, 
            value: ''
        };
        this.setState({
            hints: newHints.concat([newHint])
        });
    }

    render() {
        return (
            <div className="advanced-settings-block">
                <div className="advanced-settings-block-title">Hint</div>
                <div className="advanced-settings-block-description">If unsure, a student can check the hint before answering a question.</div>
                <div className="advanced-settings-form">
                    {
                        this.state.hints.map(hint => {
                            return (
                                <HintSettingItem key={hint.id} {...hint}/>
                            )
                        })
                    }
                    <button className="advanced-settings-another-field-btn" type='button' onClick={this.addHint}>+ add another hint</button>
                    <div className="advanced-settings-note">Note: Hints can be turned off in an assignment.</div>
                </div>
            </div>
        )
    }
}
