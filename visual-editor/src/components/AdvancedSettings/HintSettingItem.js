import React from 'react';

export default class HintSettingItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };
    }

    componentDidMount() {
        this.setState({...this.props});
    }

    change(event) {
        this.setState({
            value: event.target.value
        }, () => this.props.changeHint(this.state));
    }

    remove(event) {
        this.props.removeHint(this.props.id);
    }

    render() {
        return (
            <div>
                <label className="advanced-settings-label" htmlFor={`sas-${this.props.id}`}>Hint</label>
                <input id={`sas-${this.props.id}`} 
                       type='text' 
                       className="advanced-settings-field" 
                       placeholder='Enter a hint' 
                       value={this.props.value}
                       onChange={this.change.bind(this)}/>
            <button className="answers-remove-btn" type='button' aria-label='Remove hint item' onClick={this.remove.bind(this)}/>
            </div>
        )
    }
}
