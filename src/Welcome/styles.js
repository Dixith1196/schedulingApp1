import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
     welcomeContainer: {
         backgroundColor: 'blue',
         height: '100%',
         display: 'flex',
         flexDirection: 'column',
         alignContent: 'center',
         justifyContent: 'space-between',
         paddingTop: '35%',
         alignItems: 'center'
     },

     welcomeBtnContainer: {
         display: 'flex',
         flexDirection: 'row',
         width: '100%',
         backgroundColor: 'white',
         justifyContent: 'space-evenly',
         height: 32,
         alignItems: 'center',
     }

})
