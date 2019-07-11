import React from 'react';
import './assets/scss/app.scss';
import Select from 'react-select';
import SingleSelectContainer from './containers/SingleSelectContainer';
import MultiSelectContainer from './containers/MultiSelectContainer';

export default class  App extends React.Component {

  constructor(props) {
    super(props);

    this.typeMapping = {
      common: "",
      single: SingleSelectContainer,
      multi: MultiSelectContainer,
      short: ""
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
      <div className="unit-wrapper">
        <div>
          <Select
              id='s'
              className="advanced-settings-select"
              isSearchable={false}
              placeholder="- Select -"
              onChange={this.change.bind(this)}
              value={this.state.selected}
              options={[
                { value: 'common', label: 'Common' },
                { value: 'single', label: 'Single select' },
                { value: 'multi', label: 'Multi select' },
                { value: 'short', label: 'Short answer' },
              ]}
          />
        </div>
        <div className="unit-content-bar">
            <Container/>
        </div>
        <div />
    </div>
    )
  }
}
