import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React from 'react';

const Header = ({navigation}) => {
  return (
    <View style={styles.headerView}>
      <View
        style={{
          height: '70%',
          width: '70%',
          marginLeft: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../aseets/drawer.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#00CC52',
            marginRight: 10,
          }}>
          Dashboard
        </Text>
      </View>
      <View
        style={{
          height: '70%',
          width: '15%',
          marginRight: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity style={{marginRight: 10}}>
          <Image style={styles.icon} source={require('../aseets/help.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image style={styles.icon} source={require('../aseets/bell.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    borderBottomWidth: 3,
    // borderRadius: 10,
    borderColor: '#00CC52',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icon: {
    height: 25,
    width: 25,
    tintColor: '#00CC52',
    alignSelf: 'center',
  },
});
