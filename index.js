import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './App';
import 'react-native-gesture-handler';
import { name as appName } from './app.json';
import Splash from './src/screens/Splash';
import Welcome from './src/screens/Welcome';
import { store, persistor } from './store/index';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'Splash',
    };
    setTimeout(() => {
      this.setState({
        currentScreen: 'Welcome',
      });
    }, 2000);//timeout for the splash screen 
  }
  render() {
    const { currentScreen } = this.state;
    let mainScreen =
      currentScreen === 'Splash' ? (
        //splash screen the first screen
        <Splash />
      ) : (
          //storing the favorite GIFSs
          <Provider store={store}>

            <PersistGate loading={null} persistor={persistor}>
              <Welcome />
            </PersistGate>
          </Provider>
        );
    return mainScreen;
  }
}
AppRegistry.registerComponent(appName, () => Main);
