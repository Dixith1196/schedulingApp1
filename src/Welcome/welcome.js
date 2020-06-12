import React, { Component } from 'react';
import { View, Alert, Image, Text, TouchableOpacity } from 'react-native';
import { Content, Container, Input } from 'native-base';
import styles from './styles';

class Welcome extends Component{
     constructor(props){
         super(props);
     }

     render(){
         return (
             <View style={styles.welcomeContainer}>
              <Text>Welcome</Text>
              <View style={styles.welcomeBtnContainer}>
                <TouchableOpacity>
                <View>
                <Text>Log In</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                 <View>
                 <Text>Sign Up</Text>
                 </View>
                </TouchableOpacity>
              </View>
            </View>         
         )
     }
}

export { Welcome };