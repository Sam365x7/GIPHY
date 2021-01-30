import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
export default class Splash extends Component {
  render() {
    return (
      //custom splash screen for the text and images can be enhanced using animated transitions effects
      <View style={styles.container}>
        <StatusBar hidden />
        <Image
          style={styles.image}
          source={require('../images/giphy.jpg')} />
        <Text style={styles.textView}>
          Project Saami
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff1f3',
    flex: 1,
    marginTop: 10,
  },
  image: {
    marginTop: '2%',
    height: '30%',
    width: '98%',
    marginLeft: 4,
  },
  textView: {
    color: '#483d8b',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
});
