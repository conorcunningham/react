import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';
import Header from './Header.js';
import Action from './Action.js';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (e) {
      alert('JSON error');
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
  }

  // handleDeleteOptions
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState ((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option)
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter a valid value to add item to list';
    } else if (this.state.options.indexOf(option) > -1 ) {
      return 'this already exists';
    }
    this.setState((prevState) => ({
      options: prevState.options.concat([option])
    }));
  }
  render() {
    const subtitle = "We're going to need more fuel";

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: []
};