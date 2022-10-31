import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import Back from '../components/Back';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {headingText, textInput, fieldText, button} from '../utilis/styles';

const EditProfile = ({navigation}) => {
  const [img, setImg] = useState(
    'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym9keWJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
  );

  const handleImage = async () => {
    let options = {};
    const resultImg = await launchImageLibrary(options);
    // console.log('image....', resultImg.assets[0].uri);
    setImg(resultImg.assets[0]?.uri);
    // console.log('item....', );
  };

  const handleCamera = async () => {
    let options = {};
    const resultCam = await launchCamera(options);
    // console.log('camera....', resultCam.assets[0].uri);

    setImg(resultCam.assets[0]?.uri);
    // console.log('item', item.uri);
  };
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
            marginTop: 50,
            height: '100%',
            width: '100%',
          }}>
          <Text style={headingText}>Edit Profile</Text>
          <View
            style={{
              height: '20%',
              width: '100%',
              justifyContent: 'center',
            }}>
            <Image
              source={{uri: img}}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderWidth: 5,
                borderColor: '#00CC52',
                alignSelf: 'center',
                margin: 10,
              }}
              resizeMode="contain"></Image>
            <View
              style={{
                height: '80%',
                width: '30%',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                position: 'absolute',
              }}>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                }}
                onPress={handleCamera}>
                <Image
                  source={require('../aseets/add.png')}
                  style={styles.uploadIcon}></Image>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                }}
                onPress={handleImage}>
                <Image
                  source={require('../aseets/gallery.png')}
                  style={styles.uploadIcon}></Image>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={[fieldText, {marginVertical: 0}]}> Email </Text>
          <TextInput style={textInput} placeholder={'www.example.com'} />
          <Text style={fieldText}> Password </Text>
          <TextInput
            style={textInput}
            placeholder={'• • • • • • • • •'}
            secureTextEntry
          />

          <TouchableOpacity style={[button, {marginTop: 30}]}>
            <Text style={{fontWeight: '600', color: 'white'}}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  uploadIcon: {
    height: '80%',
    width: '80%',
    alignSelf: 'center',
    tintColor: '#00CC52',
  },
});
