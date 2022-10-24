import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  card,
  fieldText,
  button,
  textInput,
  headingText,
} from '../utilis/styles';
import {useState} from 'react';
import React from 'react';

const Register = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            marginTop: '20%',
          }}>
          <Text style={headingText}>Register</Text>
          <Text style={fieldText}>Full Name</Text>
          <TextInput style={textInput} placeholder="Full name"></TextInput>
          <Text style={fieldText}>E-mail</Text>
          <TextInput
            style={textInput}
            placeholder="www.example.com"></TextInput>

          <Text style={fieldText}>Phone number</Text>

          <TextInput style={textInput} placeholder="password"></TextInput>

          <Text style={fieldText}>Password</Text>
          <TextInput style={textInput} placeholder="password"></TextInput>

          <TouchableOpacity
            style={[button, {marginTop: 30}]}
            onPress={() => navigation.navigate('ContinuePhone')}>
            <Text style={{color: 'white', fontWeight: '600'}}>Register</Text>
          </TouchableOpacity>
          <View
            style={{
              height: 20,
              width: '100%',
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: '400', color: 'black'}}>
              Already have an account
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '700',
                  color: '#00CC52',
                  left: 5,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});
