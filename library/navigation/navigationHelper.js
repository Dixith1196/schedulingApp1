/*
 * Actions related with navigation
 * Every navigation action should be defined here
 * Avoid using this.props.navigation inside the code
 */
import NavigationService from './NavigationService';

export function navigateToHome(params) {
  NavigationService.navigateAndClosePrevious('Home', params);
}

export function navigateToLogin(params) {
  NavigationService.navigateAndClosePrevious('Login', params);
}

export function navigateToSignUp(params) {
  NavigationService.navigate('CreateKindEvent', params);
}
