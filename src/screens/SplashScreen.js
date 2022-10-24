import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SplashSecond');
    }, 3000);
    // console.log('SplashScreen');
  });
  return (
    <ImageBackground
      style={{
        flex: 1,
        width: '100%',
      }}
      source={require('../aseets/splashscreen.jpg')}
      resizeMode="cover">
      <View
        style={{
          flex: 1,
          width: '100%',
          alignSelf: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}></View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
