import React from 'react';

export default class HintSettingItem extends React.PureComponent {

    render() {
        return (
            <div>
                <label className="advanced-settings-label" htmlFor={`sas-${this.props.id}`}>Hint</label>
                <input id={`sas-${this.props.id}`} type='text' className="advanced-settings-field" placeholder='Enter a hint' value={this.props.value}/>
            </div>
        )
    }
}
