import React from 'react';
import './assets/scss/app.scss';
import Select from 'react-select';
import SingleSelectContainer from './containers/SingleSelectContainer';
import MultiSelectContainer from './containers/MultiSelectContainer';
import ShortAnswerContainer from './containers/ShortAnswerContainer';

export default class  App extends React.Component {

  constructor(props) {
    super(props);

    this.typeMapping = {
      single: SingleSelectContainer,
      multi: MultiSelectContainer,
      short: ShortAnswerContainer
  }

    this.state = {
      selected: { value: 'single', label: 'Single select' }
    }
  }

  change(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    
    const Container = this.typeMapping[this.state.selected.value];

    return (
      <div className="lxc-unit-wrapper">
        <div className="lxc-unit-content-bar">
        <div style={{margin: "20px 0"}}>
          <Select
                id='s'
                className="lxc-advanced-settings-select"
                isSearchable={false}
                placeholder="- Select -"
                onChange={this.change.bind(this)}
                value={this.state.selected}
                options={[
                  { value: 'single', label: 'Single select' },
                  { value: 'multi', label: 'Multi select' },
                  { value: 'short', label: 'Short answer' },
                ]}
            />
        </div>
            <Container/>
        </div>
        <div />
    </div>
    )
  }
}
