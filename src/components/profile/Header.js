import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,Image, ImageBackground } from 'react-native';

export default class ProfileScreen extends Component {
  render()  {
    return (
      <ImageBackground style={styles.headerBackgound} source={require('../../img/img1.jpg' )}>
        <View style={styles.header}>
          <View style={styles.profilepicWrap}>
            <Image style={styles.profilepic} source={require('../../img/img3.jpg')} />
          </View>
          <Text style={styles.name}>Alessanda Bau</Text>
          <Text style={styles.pos}>Makeup, gels, nails, facial treatment</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerBackgound: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  profilepicWrap: {
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0,0.9)',
    borderWidth: 16,
  },
  profilepic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 70,
    borderColor: '#fff',
    borderWidth: 4,
  },
  name: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  pos: {
    fontSize: 14,
    color: '#0394c0',
    fontWeight: '300',
    fontStyle: 'italic'
  },
})
