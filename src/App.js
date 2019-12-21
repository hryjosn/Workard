import React, { Component } from 'react'
import { Provider } from "mobx-react";
import { Scene, Router, Stack }  from 'react-native-router-flux'
import {  Footer, FooterTab, Button, Text } from 'native-base';

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
        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Provider>
    )
  }
}

export default App;
