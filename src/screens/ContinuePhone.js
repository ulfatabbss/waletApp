import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {headingText, fieldText, textInput, button} from '../utilis/styles';
import React from 'react';
import Back from '../components/Back';

const ContinuePhone = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'white',
          position: 'absolute',
        }}>
        <Back navigation={navigation} />
        <View
          style={{
            width: '95%',
            marginTop: 40,
            marginLeft: 45,
            alignSelf: 'center',
          }}>
          <Text style={[headingText, {marginTop: 40, width: '60%', margin: 0}]}>
            Continue With Phone
          </Text>
          <Text style={{width: '55%', marginVertical: 15}}>
            You'll recieve 4 digit code to verify next
          </Text>
          <Text style={[fieldText, {marginHorizontal: 0, marginTop: 20}]}>
            Phone Number
          </Text>
          <TextInput
            style={[textInput, {alignSelf: 'auto', marginBottom: 60}]}
            placeholder={'123-456-789'}
          />
        </View>
        <TouchableOpacity
          style={[button, {}]}
          onPress={() => navigation.navigate('VerifyPhone')}>
          <Text style={{color: 'white', fontWeight: '600'}}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ContinuePhone;

const styles = StyleSheet.create({});
