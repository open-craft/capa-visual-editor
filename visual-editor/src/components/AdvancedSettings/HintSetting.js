import React from 'react';
import { FormattedMessage } from 'react-intl';
import HintSettingItem from './HintSettingItem';

export default class HintSetting extends React.PureComponent {

    render() {
        return (
            <div className='lxc-advanced-settings-block'>
                <div className='lxc-advanced-settings-block-title'>
                    <FormattedMessage
                        id="hintSetting.block.title"
                        defaultMessage="Hint"
                    />
                </div>
                <div className='lxc-advanced-settings-block-description'>
                    <FormattedMessage
                        id="hintSetting.block.description"
                        defaultMessage="If unsure, a student can check the hint before answering a question."
                    />
                </div>
                <div className='lxc-advanced-settings-form'>
                    {
                        this.props.hints.map(hint => {
                            return (
                                <HintSettingItem key={hint.id} {...hint} hintChange={this.props.hintChange} hintRemove={this.props.hintRemove}/>
                            )
                        })
                    }
                    <button className='lxc-advanced-settings-another-field-btn' type='button' onClick={this.props.hintAdd}>
                        <FormattedMessage
                            id="hintSetting.field.btn"
                            defaultMessage="+ add another hint"
                        />
                    </button>
                    <div className='lxc-advanced-settings-note'>
                        <FormattedMessage
                            id="hintSetting.settings.note"
                            defaultMessage="Note: Hints can be turned off in an assignment."
                        />
                    </div>
                </div>
            </div>
        )
    }
};
