import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Back = ({navigation}) => {
  return (
    <View
      style={{
        height: '12%',
        width: '20%',
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          height: 50,
          width: 50,
          justifyContent: 'center',
          backgroundColor: '#F3F3F3',
          borderRadius: 10,
          top: 30,
          left: 15,
        }}>
        <Image
          source={require('../aseets/back.png')}
          style={{height: 15, width: 8, alignSelf: 'center'}}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default Back;

const styles = StyleSheet.create({});
