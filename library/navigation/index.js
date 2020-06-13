/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { StatusBar, View, StyleSheet, NetInfo, AsyncStorage } from 'react-native';
import  Login  from '../../src/Login'
// import NoInternet from '../components/NoInternetScreen';

// import PrefConstants from '../PrefConstants';
import NavigationStack from './navigationStack.js';
import NavigationService from './navigationService.js';

// import colors from '../../res/colors';

const styles = StyleSheet.create({

});

export default class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
      isLoggedIn: false,
    };
  }


//   async checkUserLoggedIn() {
//     const authToken = await AsyncStorage.getItem(PrefConstants.USER_AUTH);
//     this.setState({ isLoggedIn: !!authToken });
//   }

  render() {
    // this.checkUserLoggedIn();
    const { isConnected, isLoggedIn } = this.state;
    return (
      <View style={styles.container}>
          <Login />
      
      </View>
    );
  }
}
