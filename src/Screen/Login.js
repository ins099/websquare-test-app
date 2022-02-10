
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


function Login() {
    const navigation = useNavigation();
    const [username,setEmail] = useState('');
    const [password,setPassword] = useState('')

    const {UsersData} = useSelector((state)=>({
        UsersData:state.UserReducers
    }))

    const onPressLogin = () => {
      const user =  UsersData.find((item)=>{
        if(item.username == username && item.password == password){
          return item
        }
      })
      if(user){
        Alert.alert('Welcome', `Hi! ${username}`)
      }else{
        Alert.alert("Invalid Credentials","Your username or password might be wrong")
      }
    }

  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Login</Text>
      </View>
      <View style={styles.text2}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")} ><Text style={styles.signupText}> Sign up</Text></TouchableOpacity>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        
        <View style={styles.usernameInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-alt" />}
                size="sm"
                m={2}
              />
            }
            variant="outline"
            onChangeText = {(val)=>{
              setEmail(val)
            }}
            placeholder="Username"
            value = {username}

          />
        </View>
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        
        <View style={styles.usernameInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
              />
            }
            variant="outline"
            onChangeText = {(val)=>{
              setPassword(val)
            }}
            secureTextEntry={true}
            placeholder="Password"
            value = {password}
          />
        </View>
      </View>

      {/* Button */}
      <View style={styles.buttonStyle}>
        <Button onPress = {onPressLogin} style={styles.buttonDesign}>
            LOGIN
        </Button>
      </View>

     

     
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Login />
      
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LoginText: {
    marginTop:100,
    fontSize:30,
    fontWeight:'bold',
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center',
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:5
  },
  signupText:{
    fontWeight:'bold'
  },
  emailField:{
    marginTop:30,
    marginLeft:15
  },
  usernameInput:{
    marginTop:10,
    marginRight:5
  },
  buttonStyle:{
    marginTop:30,
    marginLeft:15,
    marginRight:15
  },
  buttonStyleX:{
    marginTop:12,
    marginLeft:15,
    marginRight:15
  },
  buttonDesign:{
    backgroundColor:'#026efd'}

});