import React from 'react';
import HintSettingItem from './HintSettingItem';
import { defineMessages, injectIntl } from 'react-intl';

const messages = defineMessages({
    title: {
        id: 'HintSettings.label',
        defaultMessage: 'Hint'
    },
    description: {
        id: 'HintSettings.description',
        defaultMessage: 'If unsure, a student can check the hint before answering a question.'
    },
    note: {
        id: 'HintSettings.note',
        defaultMessage: 'Note: Hints can be turned off in an assignment.'
    },
    btnNewHint: {
        id: 'HintSettings.btnNewHint',
        defaultMessage: '+ add hint'
    },
    btnAnotherHint: {
        id: 'HintSettings.btnAnotherHint',
        defaultMessage: '+ add another hint'
    }
})

class HintSetting extends React.PureComponent {

    render() {
        const { formatMessage } = this.props.intl;

        return (
            <div className='lxc-advanced-settings-block'>
                <div className='lxc-advanced-settings-block-title'>
                    {formatMessage(messages.title)}
                </div>
                <div className='lxc-advanced-settings-block-description'>
                    {formatMessage(messages.description)}
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
                        {
                            this.props.hints.length ?
                            formatMessage(messages.btnAnotherHint) :
                            formatMessage(messages.btnNewHint)
                        }
                    </button>
                    <div className='lxc-advanced-settings-note'>
                        {formatMessage(messages.note)}
                    </div>
                </div>
            </div>
        )
    }
};

export default injectIntl(HintSetting);
