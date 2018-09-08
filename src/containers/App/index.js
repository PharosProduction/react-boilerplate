import React, { Component } from 'react'
import { Button, Tooltip } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import logo from './assets/logo.svg'

import './App.scss'

// Component

class App extends Component {

  state = {
    tooltipOpen: false
  }

  toggle = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Button color="success">Danger!</Button>

        <FontAwesomeIcon icon={faCoffee} />

        <div>
          <p>Somewhere in here is a <span style={{ textDecoration: "underline", color: "blue" }} href="#" id="TooltipExample">tooltip</span>.</p>
          <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
            Hello world!
          </Tooltip>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
