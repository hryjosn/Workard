import React, { Component } from 'react'
import { Provider } from "mobx-react";
import { Scene, Router, Stack }  from 'react-native-router-flux'

import * as stores from './store'

import Home from './Container/Home';
class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <Provider {...stores}>
        <Router>
          <Stack key="root">
            <Scene key="home" component={Home} initial/>
          </Stack>
        </Router>
      </Provider>
    )
  }
}

export default App;
