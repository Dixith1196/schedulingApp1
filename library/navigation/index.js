/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { StatusBar, View, StyleSheet, NetInfo, AsyncStorage } from 'react-native';
// import NoInternet from '../components/NoInternetScreen';

// import PrefConstants from '../PrefConstants';
import NavigationStack from './navigationStack.js';
import NavigationService from './navigationService.js';

// import colors from '../../res/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
      isLoggedIn: false,
    };
    this.checkUserLoggedIn = this.checkUserLoggedIn.bind(this);
    this.handleConnectivityChange = this.handleConnectivityChange.bind(this);
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
        {!isConnected && <NoInternet />}
        {isLoggedIn && <StatusBar backgroundColor={colors.primaryColor} barStyle="light-content" />}
        {!isLoggedIn && <StatusBar backgroundColor={colors.transparent} translucent />}
        {isConnected && (
          <NavigationStack
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        )}
      </View>
    );
  }
}
