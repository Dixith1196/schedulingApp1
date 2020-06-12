import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
     loginContainer: {
         backgroundColor: 'red',
         height: '100%',
         display: 'flex',
         flexDirection: 'column',
         alignContent: 'center',
         paddingTop: '35%',
         alignItems: 'center'
     },

inputContainer: {
    display: 'flex',
    flexDirection: 'column' ,
    alignSelf: 'center',
    backgroundColor: 'yellow',
    height: "25%",
    alignContent: 'center',
    justifyContent: 'space-evenly',
    width: '80%',
    marginTop: '20%'
},

loginBtn: {
    width: '60%',
    backgroundColor: 'blue',
    color: 'black',
    height: 32,
    margin: '10%',
    alignSelf: 'center'
}

})