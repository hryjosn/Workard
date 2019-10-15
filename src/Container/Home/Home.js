import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Text, Badge, Icon } from 'native-base';
import { inject, observer } from 'mobx-react';

@inject('HomeStore')
@observer
class Home extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { click, plus } = this.props['HomeStore'];
    return (
      <Container>
        <Text> {click} </Text>
        <Button onPress={plus}>
          <Text >click</Text>
        </Button>
        {/*<Header />*/}
        {/*<Content>*/}
        {/*  <Badge primary>*/}
        {/*    <Icon name="star" style={{ fontSize: 15, color: "#fff", lineHeight: 20 }}/>*/}
        {/*  </Badge>*/}
        {/*</Content>*/}
      </Container>

    );
  }
};
export default Home;
