import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {headingText, textInput, fieldText, button} from '../utilis/styles';
import Back from '../components/Back';

const Reset = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* <Back navigation={navigation} /> */}
      <View
        style={{
          height: '80%',
          width: '80%',
          top: 80,
          alignSelf: 'center',
          position: 'absolute',
        }}>
        <Text style={[headingText, {marginTop: 40, width: '80%', margin: 0}]}>
          Reset Password
        </Text>
        <Text style={{width: '70%', marginVertical: 15}}>
          Enter your phone number associated with your account and we'll send an
          verification code for reset your password
        </Text>
        <Text style={[fieldText, {marginHorizontal: 0, marginTop: 20}]}>
          Phone Number
        </Text>
        <TextInput
          value={''}
          style={[textInput, {marginBottom: 50}]}
          placeholder={'123-456-789'}
        />

        <TouchableOpacity
          style={button}
          onPress={() => navigation.navigate('VerifyCode')}>
          <Text style={{color: 'white', fontWeight: '600'}}>Send Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reset;

const styles = StyleSheet.create({});
