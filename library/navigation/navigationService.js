/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation';


let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function navigateAndClosePrevious(routeName, params) {
  navigator.dispatch(
    StackActions.replace({
      routeName,
      params,
    })
  );
}

function goBack(key = null) {
  navigator.dispatch(
    NavigationActions.back({
      key,
    })
  );
}

function defaultNavigationOptions(
  title,
  iconLeft = {},
  iconRight = {},
  iconLeftOnPress,
  iconRightOnPress
) {
  const styles = {
    headerRightIconContainerStyle: {
      marginRight: 16,
      height: 44,
      width: 44,
      justifyContent: 'center',
    },
    headerLeftIconContainerStyle: {
      marginLeft: 16,
      height: 44,
      width: 44,
      justifyContent: 'center',
    },
    iconRightIcon: {
      fontSize: 24,
      color: 'white',
      textAlign: 'center',
    },
    iconLeftIcon: {
      fontSize: 24,
      color: 'white',
      textAlign: 'center',
    },
  };
  return {
    title,
    headerTitleStyle: {
      fontSize: 20,
      flex: 1,
      textAlign: 'center',
      ...fontMaker({ weight: 'SemiBold' }),
    },
    headerRight: iconRight && Object.keys(iconRight).length > 0 && (
      <TouchableOpacity style={styles.headerRightIconContainerStyle} onPress={iconRightOnPress}>
        <Icon name={iconRight.name} type={iconRight.type} style={styles.iconRightIcon} />
      </TouchableOpacity>
    ),
    headerLeft: iconLeft && Object.keys(iconLeft).length > 0 && (
      <TouchableOpacity style={styles.headerLeftIconContainerStyle} onPress={iconLeftOnPress}>
        <Icon name={iconLeft.name} type={iconLeft.type} style={styles.iconLeftIcon} />
      </TouchableOpacity>
    ),
  };
}

function navigationOptions(title, icon = { name: 'ios-arrow-back', type: 'Ionicons' }) {
  const styles = {
    headerIconContainerStyle: {
      marginLeft: 16,
      height: 44,
      width: 44,
      justifyContent: 'center',
    },
    headerIconStyle: {
      fontSize: 24,
      color: 'white',
      textAlign: 'center',
    },
  };
  return {
    title,
    headerTitleStyle: {
      fontSize: 20,
      flex: 1,
      textAlign: 'center',
      paddingRight: 24,
      ...fontMaker({ weight: 'SemiBold' }),
    },
    headerLeft: (
      <TouchableOpacity style={styles.headerIconContainerStyle} onPress={() => goBack()}>
        <Icon name={icon.name} type={icon.type} style={styles.headerIconStyle} />
      </TouchableOpacity>
    ),
    headerRight: null,
  };
}

export default {
  navigate,
  navigateAndClosePrevious,
  goBack,
  setTopLevelNavigator,
  navigationOptions,
  defaultNavigationOptions,
};
