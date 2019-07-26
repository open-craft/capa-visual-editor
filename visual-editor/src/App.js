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
    };

    this.state = {
      selected: { value: 'single', label: 'Single select' }
    };
  }

  getType() {
    const defaults = {
      single: { value: 'single', label: 'Single select' },
      multi: { value: 'multi', label: 'Multi select' },
      short: { value: 'short', label: 'Short answer' }
    };
    return defaults[window.editorType||this.state.selected.value];
  }

  change(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    console.log(new Date());
    console.log('GOT DATA - ', window.LXCData);
    const Container = this.typeMapping[this.getType().value];

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
