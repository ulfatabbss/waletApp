import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {button, headingText} from '../utilis/styles';
import Back from '../components/Back';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const VerifyCode = ({navigation}) => {
  return (
    <View style={{flex: 1, width: '100%', backgroundColor: 'white'}}>
      <Back navigation={navigation} />
      <View
        style={{
          flex: 1,
          width: '95%',
          marginTop: 100,
          alignSelf: 'center',
          position: 'absolute',
          alignItems: 'center',
          padding: 30,
        }}>
        <Text style={[headingText, {margin: 0}]}>Verify Code</Text>
        <Text style={{marginVertical: 15}}>code is sent to +1234 567 8901</Text>
        <OTPInputView
          style={{width: '90%', height: 150}}
          pinCount={5}
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />

        <Text style={{alignSelf: 'center'}}>Didn't recieve code?</Text>
        <Text style={{color: '#00CC52', alignSelf: 'center', margin: 10}}>
          Resend OTP
        </Text>
        <TouchableOpacity
          style={button}
          onPress={() => navigation.navigate('CreatePassword')}>
          <Text style={{color: 'white'}}>Verify Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyCode;

const styles = StyleSheet.create({});
