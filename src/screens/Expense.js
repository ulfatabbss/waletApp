import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {expense} from '../components/AllExpense';

const Expense = ({navigation}) => {
  // const {title} = props.route.params;
  return (
    <View style={{flex: 1, padding: 10}}>
      <Text style={styles.headerText}>Select Catagory</Text>
      <FlatList
        data={expense}
        numColumns={2}
        renderItem={itemData => {
          return (
            <TouchableOpacity
              style={styles.cardList}
              onPress={() =>
                navigation.navigate('NewTransaction', {
                  name: itemData.item.name,
                  cardIcons: itemData.item.cardIcons,
                })
              }>
              <Image
                resizeMode="contain"
                source={itemData.item.cardIcons}
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 10,
                  fontWeight: '400',
                  //   top: 15,
                }}>
                {itemData.item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Expense;

const styles = StyleSheet.create({
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
  headerText: {
    marginTop: 20,
    fontWeight: '600',
    fontSize: 18,
  },
});
