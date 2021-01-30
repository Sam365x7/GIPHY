import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import FavoriteForm from './FavoriteForm';

export default class Favorite extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#ffa5b1', margin: 5, }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.text1}>Go Back</Text>
          </TouchableOpacity>


        </View>
        <Text style={styles.text}>Favorite GIFs</Text>
        <ScrollView>

          <FavoriteForm navigation={navigation} />
        </ScrollView>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff1f3',
    padding: 20,

  },
  text: {
    color: '#483d8b',
    fontWeight: 'bold',
    fontSize: 28,
    alignSelf: 'center',
    paddingBottom: 10
  }, text1: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white'
  },

});
