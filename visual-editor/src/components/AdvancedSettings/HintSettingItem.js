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
        }, () => this.props.hintChange(this.state));
    }

    remove(event) {
        this.props.hintRemove(this.props.id);
    }

    render() {
        return (
            <div>
                <label className="lxc-advanced-settings-label" htmlFor={`sas-${this.props.id}`}>Hint</label>
                <input id={`sas-${this.props.id}`} 
                       type='text' 
                       className="lxc-advanced-settings-field"
                       placeholder='Enter a hint' 
                       value={this.props.value}
                       onChange={this.change.bind(this)}/>
            <button className="lxc-answers-remove-btn" type='button' aria-label='Remove hint item' onClick={this.remove.bind(this)}/>
            </div>
        )
    }
}
