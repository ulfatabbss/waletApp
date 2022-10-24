import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {button} from '../utilis/styles';
const SplashSecond = ({navigation}) => {
  return (
    <ImageBackground
      style={{
        top: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        width: '100%',
        position: 'absolute',
      }}
      source={require('../aseets/splashsecond.jpg')}
      resizeMode="cover">
      <View
        style={{
          height: '90%',
          width: '100%',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={() => navigation.replace('Login')}
          style={button}>
          <Text style={{color: 'white', fontWeight: '600'}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SplashSecond;

const styles = StyleSheet.create({});
