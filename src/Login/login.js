import React, { Component } from 'react';
import { View, Alert, Image, Text, TouchableOpacity } from 'react-native';
import { Content, Container, Input } from 'native-base';
import Styles from './styles';
import styles from './styles';

class Login extends Component{
     constructor(props){
         super(props);
     }

     render(){
         return (
             <View style={Styles.loginContainer}> 
              <View>
               <Image />
                <Text>Name</Text>
              </View>
              <View style={Styles.inputContainer}> 
                 <Input  placeholder={"Please Enter Email Id"}/>
                 <Input  placeholder={"Password"}/>
             </View>
             <TouchableOpacity style={styles.loginBtn}>
                  <View>
                    <Text style={{color: "#ffffff",height: 36, width: "100%", textAlign: "center", paddingTop: 8}}>Log in</Text>
                  </View>
                 </TouchableOpacity>
            </View>         
         )
     }
}

export { Login };