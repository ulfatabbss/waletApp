import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import Back from '../components/Back';
import React from 'react';
import {headingText} from '../utilis/styles';

const Shopping = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Back navigation={navigation} />
      <View style={[styles.greenBorderCards, {marginBottom: 20}]}>
        <View style={styles.shoppingCard}>
          <Image
            source={require('../aseets/Cart.png')}
            resizeMode={'contain'}
            style={{height: 80, width: 80, marginLeft: 40}}
          />
          <Text
            style={[
              headingText,
              {margin: 0, marginHorizontal: 10, alignSelf: 'center'},
            ]}>
            Shopping
          </Text>
        </View>
        <View
          style={[
            styles.shoppingCard,
            {
              flex: 1,
              justifyContent: 'space-between',
            },
          ]}>
          <View
            style={{
              height: 100,
              width: 80,
              justifyContent: 'space-between',
            }}>
            <Text style={styles.textTags}>Invoice :</Text>
            <Text style={styles.textTags}>Bill To :</Text>
            <Text style={styles.textTags}>Date</Text>
          </View>
          <View
            style={{
              height: 100,
              width: 80,
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.textTags, {alignSelf: 'center'}]}>
              #000228
            </Text>
            <Text style={[styles.textTags, {alignSelf: 'center'}]}>
              HyperStar
            </Text>
            <Text style={styles.textTags}>26-oct-2022</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
          borderWidth: 0.5,
          alignSelf: 'center',
          width: '95%',
        }}>
        <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
          ITEMS
        </Text>
        <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
          Quantity
        </Text>
        <Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>
          AMOUNT
        </Text>
      </View>
      <View style={[styles.greenBorderCards, {height: 220}]}>
        <View
          style={[
            styles.shoppingCard,
            {
              flex: 0.5,
              borderBottomWidth: 1,
              justifyContent: 'space-between',
            },
          ]}>
          <View
            style={{
              justifyContent: 'space-between',
            }}>
            <Text style={styles.textTags}>Tea Bags :</Text>
            <Text style={styles.textTags}>Milk:</Text>
            <Text style={styles.textTags}>Cold Drinks</Text>
          </View>
          <View
            style={{
              width: 80,
              marginRight: 15,
              justifyContent: 'space-between',
            }}>
            <Text style={[styles.textTags, {alignSelf: 'center'}]}>1x</Text>
            <Text style={[styles.textTags, {alignSelf: 'center'}]}>3x</Text>
            <Text style={[styles.textTags, {alignSelf: 'center'}]}>6x</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignContent: 'flex-end',
            }}>
            <Text style={[styles.textTags, {alignSelf: 'center'}]}>
              Rs. 430/-
            </Text>
            <Text style={[styles.textTags, {alignSelf: 'center'}]}>
              Rs. 320/-
            </Text>
            <Text style={styles.textTags}>Rs. 1830/-</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: '600',
            }}>
            Total Amount
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: '600',
            }}>
            Rs. 1830/-
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Shopping;

const styles = StyleSheet.create({
  shoppingCard: {
    height: 120,
    width: '100%',
    flexDirection: 'row',
    padding: 20,
  },
  textTags: {
    fontSize: 14,
    height: 20,
    fontWeight: '400',
    color: 'black',
    textAlign: 'auto',
  },
  greenBorderCards: {
    height: 250,
    width: Dimensions.get('window').width - 20,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#06BA39',
  },
});
