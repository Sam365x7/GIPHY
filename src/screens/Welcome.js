import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Button } from '../components/common';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from './Search';
import Favorite from './Favorite';
import Description from './Description';

class Welcome extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  //welcome screen to show the two tabs 
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />

        <View style={styles.container}>
          <View style={{ alignItems: 'center' }}></View>

          <Text style={{ margin: 10, alignSelf: 'center', fontSize: 28 }}>
            Welcome
             </Text>
          <Text style={{ margin: 10, alignSelf: 'center', fontSize: 20 }}>
            Please select one option to continue :)
             </Text>
          <Button
            style={{
              marginTop: '2%',
              alignSelf: 'center',
              marginBottom: '2%',
              width: '98%',
              height: '8%',
            }}
            onPress={() => this.props.navigation.navigate('Search')}>
            Search GIF
          </Button>

          <Button
            style={{ alignSelf: 'center', width: '98%', height: '8%' }}
            onPress={() => this.props.navigation.navigate('Favorite')}>
            Favorite GIF
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: Welcome,
  Search: {
    screen: Search,
    navigationOptions: {
      headerShown: false,
    },
  },
  Favorite: {
    screen: Favorite,
    navigationOptions: {
      headerShown: false,
    },
  },
  Description: {
    screen: Description,
    navigationOptions: {
      headerShown: false,
    },
  }
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff1f3',
    justifyContent: 'flex-start',
  },
  image: {
    marginTop: '2%',
    alignSelf: 'center',
    height: '40%',
    width: '65%',
    marginLeft: 4,
  },
});
