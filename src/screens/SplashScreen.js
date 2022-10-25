import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SplashSecond');
    }, 3000);
    console.log('SplashScreen');
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
          justifyContent: 'flex-end',
          // backgroundColor: 'rgba(0,0,0,0.3)',
        }}>
        <View
          style={{
            flex: 0.2,
            height: 80,
            width: '100%',
            justifyContent: 'center',
            // backgroundColor: 'red',
          }}>
          <Image
            style={{
              height: 50,
              width: Dimensions.get('window').width - 80,
              alignSelf: 'center',
            }}
            source={require('../aseets/webevis.png')}
            resizeMode={'contain'}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
