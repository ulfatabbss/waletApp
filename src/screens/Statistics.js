import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {history} from '../components/Data';
import Chart from '../components/Chart';

const Statistics = ({navigation}) => {
  return (
    <View style={{flex: 1, width: '100%'}}>
      <View
        style={{
          height: 60,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-end',
          borderBottomWidth: 2,
          borderBottomColor: '#00CC52',
        }}>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#00CC52'}}>
          Statistics
        </Text>
      </View>
      <Chart />
      {/* <FlatList
        data={history}
        renderItem={itemData => {
          return (
            <View style={styles.cardList}>
              <Image
                resizeMode="contain"
                source={itemData.item.icon}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: itemData?.item?.cat == 'Income' ? 'green' : 'red',
                  alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  color: itemData.item.cat == 'Income' ? 'green' : 'red',
                  fontSize: 14,
                  fontWeight: '600',
                }}>
                {itemData.item.cat}
              </Text>
              <View>
                <Text
                  style={{
                    color: itemData.item.cat == 'Income' ? 'green' : 'red',
                    fontSize: 10,
                    fontWeight: '400',
                  }}>
                  {itemData.item.subcat}
                </Text>
                <Text
                  style={{
                    color: itemData.item.cat == 'Income' ? 'green' : 'red',
                    fontSize: 10,
                    fontWeight: '400',
                  }}>
                  {itemData.item.date}
                </Text>
              </View>
              <Text
                style={{
                  color: itemData.item.cat == 'Income' ? 'green' : 'red',
                  fontSize: 14,

                  fontWeight: '600',
                }}>
                {itemData.item.amount}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(itemData.item.screen)}>
                <Image
                  style={{
                    height: 20,
                    width: 12,
                  }}
                  source={require('../aseets/sidearrow.png')}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      /> */}
    </View>
  );
};

export default Statistics;

const styles = StyleSheet.create({
  cardList: {
    flexDirection: 'row',
    height: 60,
    width: '90%',
    elevation: 5,
    marginLeft: 20,
    justifyContent: 'space-evenly',
    marginVertical: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
  },
});
