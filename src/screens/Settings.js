import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import Back from '../components/Back';
import {button, headingText} from '../utilis/styles';
import React from 'react';

const Settings = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Back navigation={navigation} />
      <View
        style={{
          height: '90%',
          width: '80%',
          justifyContent: 'space-evenly',
          alignSelf: 'center',
          paddingBottom: 30,
        }}>
        <Text style={[headingText, {right: 20}]}>Settings</Text>
        <TouchableOpacity>
          <Image
            style={{height: 50, width: '100%'}}
            source={require('../aseets/settingsicon1.png')}
            resizeMode={'contain'}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{height: 50, width: '100%'}}
            source={require('../aseets/settingsicon.png')}
            resizeMode={'contain'}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{height: 50, width: '100%'}}
            source={require('../aseets/settingsicon6.png')}
            resizeMode={'contain'}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Image
            style={{height: 50, width: '100%'}}
            source={require('../aseets/settingsicon2.png')}
            resizeMode={'contain'}></Image>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Image
            style={{height: 50, width: '100%'}}
            source={require('../aseets/settingsicon5.png')}
            resizeMode={'contain'}></Image>
        </TouchableOpacity> */}
        <TouchableOpacity>
          <Image
            style={{height: 50, width: '100%'}}
            source={require('../aseets/settingsicon4.png')}
            resizeMode={'contain'}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{height: 50, width: '100%'}}
            source={require('../aseets/settingsicon3.png')}
            resizeMode={'contain'}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            button,
            {
              backgroundColor: 'white',
              borderColor: '#00CC52',
              borderWidth: 2,
              margin: 10,
            },
          ]}>
          <Text style={{color: 'black', fontWeight: '600'}}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
