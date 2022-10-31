import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Back from '../components/Back';
import {expense} from './AllExpense';
import React from 'react';
const {height, width} = Dimensions.get('window');
const NewTransaction = ({navigation, route}) => {
  const {name, cardIcons} = route.params;

  return (
    <View
      style={{
        height: height,
        backgroundColor: 'white',
      }}>
      <Back navigation={navigation} />

      <View
        style={{
          height: height,
          width: width,
          alignItems: 'center',
        }}>
        <View style={styles.imageView}>
          <Image
            style={styles.mainImage}
            resizeMode={'contain'}
            source={cardIcons}
          />
        </View>
        <Text style={styles.text}>{name}</Text>

        {/* SecondView */}
        <View style={styles.view2nd}>
          <View
            style={[styles.inputTextView, {justifyContent: 'space-between'}]}>
            <Text style={styles.text}>Item:</Text>
            <TextInput style={styles.inputText} />
          </View>
          <View style={styles.inputTextView}>
            <Text style={styles.text}>Amount:</Text>
            <TextInput
              style={[styles.inputText, {width: '40%', marginLeft: 30}]}
              keyboardType={'numeric'}
            />
            <TouchableOpacity style={styles.buttonDefault}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '400',
                  alignSelf: 'center',
                }}>
                Set Default
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputTextView}>
            <Text style={styles.text}>Quantity:</Text>
            <TextInput
              style={[styles.inputText, {width: '40%', marginLeft: 26}]}
              keyboardType={'numeric'}
              maxLength={3}
            />
            <View
              style={{
                top: 10,
                width: '29%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Image
                  style={styles.plusMinus}
                  source={require('../aseets/plus2.png')}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={[styles.plusMinus, {height: 22, width: 22}]}
                  source={require('../aseets/minus2.png')}
                  resizeMode={'contain'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Image
            style={{height: 50, width: 200}}
            source={require('../aseets/savebutton.png')}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewTransaction;

const styles = StyleSheet.create({
  imageView: {
    height: 120,
    width: width - 240,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.3,
    borderColor: '#06BA39',
    elevation: 5,
    alignSelf: 'center',
  },
  mainImage: {
    height: 60,
    width: 60,
  },
  view2nd: {
    height: 300,
    width: width - 40,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  inputText: {
    height: 44,
    width: '70%',
    borderBottomWidth: 2,
    borderBottomColor: '#06BA39',
    fontSize: 18,
    paddingTop: 10,
  },
  inputTextView: {
    height: '15%',
    width: width - 40,
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 20,
  },
  buttonDefault: {
    height: 30,
    width: '29%',
    borderRadius: 20,
    backgroundColor: '#06BA39',
    justifyContent: 'center',
  },
  plusMinus: {
    height: 25,
    width: 25,
    borderRadius: 25,
    tintColor: '#06BA39',
  },
});
