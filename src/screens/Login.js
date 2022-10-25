import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {fieldText, textInput, button, headingText} from '../utilis/styles';
import {useState} from 'react';
import React from 'react';

const Login = ({navigation}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [icon, setIcon] = useState(require('../aseets/eyevisible.png'));
  const [color, setcolor] = useState('green');
  const [email, setEmail] = useState('Salim');
  const [password, setPassword] = useState('123');
  const TogglePassword = () => {
    if (icon === require('../aseets/eyevisible.png')) {
      {
        setIcon(require('../aseets/eyeinvisible.png'));
        setPasswordVisibility(false);
        setcolor('red');
      }
    } else if (icon === require('../aseets/eyeinvisible.png')) {
      {
        setIcon(require('../aseets/eyevisible.png'));
        setPasswordVisibility(true);
        setcolor('green');
      }
    }
  };

  const Check = () => {
    if (email == null || password == null) {
      alert('all fields are required ');
    } else {
      navigation.replace('Tabs');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          height: 90,
          width: '50%',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Image
          source={require('../aseets/mono.png')}
          style={{
            height: '60%',
            alignSelf: 'center',
            width: '100%',
          }}
          resizeMode={'contain'}
        />
      </View>
      <View
        style={{
          flex: 1,
          width: '100%',
        }}>
        <Text style={headingText}>Login</Text>
        <Text style={fieldText}>User Name</Text>
        <TextInput
          style={textInput}
          placeholder={'example@email.com'}
          placeholderTextColor="black"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={[fieldText, {marginVertical: 10}]}>Password</Text>
        <View
          style={{
            height: 50,
            width: '85%',
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#F3F3F3',
            borderWidth: 1,
            borderRadius: 12,
            borderColor: '#DEDEDE',
          }}>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={passwordVisibility}
            placeholderTextColor="black"
            style={{width: '100%', height: '100%'}}
            placeholder={'• • • • • • • • •'}
          />
          <TouchableOpacity
            style={{
              height: 20,
              width: 20,
              right: 30,
            }}
            onPress={TogglePassword}>
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: color,
              }}
              source={icon}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 30,
            marginTop: 10,
            width: '80%',
            justifyContent: 'flex-end',
            alignSelf: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              marginBottom: 20,
              height: '60%',
              width: '35%',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('Reset')}>
            <Text
              style={{
                fontWeight: '500',
                color: 'black',
                fontSize: 12,
              }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={button} onPress={() => Check()}>
          <Text style={{color: 'white', fontWeight: '600'}}> Login </Text>
        </TouchableOpacity>
        <View
          style={{
            height: '20%',
            width: '60%',
            alignSelf: 'center',
          }}>
          <TouchableOpacity>
            <Image
              source={require('../aseets/facebooklogin.png')}
              style={{
                height: 50,
                width: '100%',
                alignSelf: 'center',
                marginTop: 25,
              }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../aseets/gmail.png')}
              style={{
                height: 50,
                width: '100%',
                marginTop: 5,
                alignSelf: 'center',
              }}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 30,
            width: '60%',
            alignSelf: 'center',
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={[fieldText, {marginHorizontal: 0}]}>
            Don't have an account
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#00CC52'}}> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
