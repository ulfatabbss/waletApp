import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {history, Data} from '../components/Data';

const History = ({navigation}) => {
  return (
    <View style={{flex: 1, width: '100%', backgroundColor: 'white'}}>
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
          History
        </Text>
      </View>
      <FlatList
        data={history}
        renderItem={itemData => {
          return (
            <TouchableOpacity
              style={styles.cardList}
              onPress={() => navigation.navigate(itemData.item.screen)}>
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
              <View>
                <Image
                  style={{
                    height: 20,
                    width: 12,
                  }}
                  source={require('../aseets/sidearrow.png')}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Expense')}
        style={{
          backgroundColor: '#00CC52',
          width: 50,
          bottom: 20,
          height: 50,
          alignSelf: 'flex-end',
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
          right: 20,
        }}>
        <Image
          source={require('../aseets/add2.png')}
          style={{
            height: 50,
            width: 50,
          }}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  cardList: {
    flexDirection: 'row',
    height: 60,
    width: '90%',
    elevation: 5,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
  },
});
// <View style={{flex: 1, width: '100%'}}>
//   <View
//     style={{
//       height: 60,
//       width: '100%',
//       alignItems: 'center',
//       justifyContent: 'flex-end',
//       borderBottomWidth: 2,
//       borderBottomColor: '#00CC52',
//     }}>
//     <Text style={{fontSize: 30, fontWeight: 'bold', color: '#00CC52'}}>
//       Statistics
//     </Text>
//   </View>
//   <Chart />
//   <View style={styles.container}>
//     <View style={styles.roundedButtonContainer}>
//       <View style={styles.roundedButton}>
//         <Text style={styles.text}>f</Text>
//       </View>
//     </View>
//     <View style={styles.roundedButtonContainer}>
//       <View style={styles.roundedButton}>
//         <Text style={styles.text}>t</Text>
//       </View>
//     </View>
//     <View style={styles.roundedButtonContainer}>
//       <View style={styles.roundedButton}>
//         <Text style={styles.text}>i</Text>
//       </View>
//     </View>
//   </View>
{
  /* <FlatList
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
      /> */
}
// </View>
