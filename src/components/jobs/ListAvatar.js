import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import { StyleSheet } from 'react-native'

export default class ListAvatar extends Component {
  
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 60,
    flexDirection: 'column'
  }
});
