import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import React from 'react';
import Header from '../components/Header';
import {Data, income} from '../components/Data';

const Dashboard = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, width: '100%', backgroundColor: 'white'}}>
      <Header navigation={navigation} />
      <View style={styles.card}>
        <View
          style={{
            height: '50%',
            width: '50%',
            marginLeft: 10,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            style={styles.imagestyle}
            source={require('../aseets/photo1.jpg')}
            resizeMode={'contain'}
          />
          <Text style={styles.nameText}> Muhammad Salim Qureshi</Text>
        </View>
        <View
          style={{
            height: '20%',
            width: '30%',
            marginLeft: 10,
          }}>
          <Text style={styles.headingText}> Balance </Text>
          <Text style={{fontSize: 20, color: 'black', fontWeight: '900'}}>
            Rs.30,000
          </Text>
        </View>
        <View
          style={{
            height: '25%',
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
          }}>
          <View style={styles.incomeExpense}>
            <View
              style={{
                height: '100%',
                width: '60%',
              }}>
              <Text style={styles.headingText}> Income</Text>
              <Text style={{color: 'black', left: 5}}>30,000</Text>
            </View>
            <View
              style={{
                height: 40,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: '50%',
                  width: '70%',
                  tintColor: '#00CC52',
                }}
                source={require('../aseets/arrowdown.png')}
                resizeMode={'contain'}
              />
            </View>
          </View>
          <View style={styles.incomeExpense}>
            <View
              style={{
                height: '100%',
                width: '60%',
              }}>
              <Text style={styles.headingText}> Expense</Text>
              <Text style={{color: 'black', left: 5}}>00,000</Text>
            </View>
            <View
              style={{
                height: 40,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  tintColor: 'red',
                }}
                source={require('../aseets/uparrow.png')}
                resizeMode={'contain'}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 15,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
        <View style={[styles.expenseIncome, {height: 30}]}>
          <Text style={{fontWeight: '600', fontSize: 16, color: 'black'}}>
            Expenses
          </Text>
          <Text style={{color: '#00CC52', fontWeight: '500'}}>View All</Text>
        </View>
        <FlatList
          data={Data}
          numColumns={2}
          renderItem={itemData => {
            return (
              <TouchableOpacity
                style={styles.cardList}
                onPress={() =>
                  navigation.navigate(itemData.item.screen, {
                    title: 'All Expenses',
                  })
                }>
                <Image
                  resizeMode="contain"
                  source={itemData.item.picture}
                  style={{
                    width: 30,
                    height: 40,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 10,
                    fontWeight: '400',
                    top: 15,
                  }}>
                  {itemData.item.text}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          padding: 10,
          width: '100%',
        }}>
        <View style={[styles.expenseIncome, {height: 30}]}>
          <Text style={{fontWeight: '600', fontSize: 16, color: 'black'}}>
            Income
          </Text>
          <Text style={{color: '#00CC52', fontWeight: '500'}}>View All</Text>
        </View>
        <FlatList
          data={income}
          numColumns={2}
          renderItem={itemData => {
            return (
              <TouchableOpacity
                style={styles.cardList}
                onPress={() =>
                  navigation.navigate(itemData.item.screen, {
                    title: 'All Income',
                  })
                }>
                <Image
                  resizeMode="contain"
                  source={itemData.item.picture}
                  style={{
                    width: 30,
                    height: 40,
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={{
                    color: 'black',
                    fontSize: 10,
                    fontWeight: '400',
                    top: 15,
                  }}>
                  {itemData.item.text}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: '95%',
    alignSelf: 'center',
    elevation: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    bottom: 0,
    padding: 10,
  },
  imagestyle: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  nameText: {
    fontSize: 14,
    fontWeight: '600',
    width: 80,
    height: 60,
  },
  headingText: {fontWeight: '600', color: 'black'},
  incomeExpense: {
    height: 50,
    width: 95,
    margin: 10,
    flexDirection: 'row',
  },
  cardList: {
    height: 100,
    width: '45%',
    elevation: 5,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
  },
  expenseIncome: {
    height: '15%',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});