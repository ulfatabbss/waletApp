import {Dimensions, Button, StyleSheet} from 'react-native';

const button = {
  height: 50,
  width: Dimensions.get('window').width - 120,
  borderRadius: 15,
  backgroundColor: '#00CC52',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
};
const buttonCard = {
  height: '15%',
  width: '100%',
  borderRadius: 20,
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: '#CBCBCB',
  justifyContent: 'space-between',
};
const card = {
  height: '100%',
  width: '100%',
  paddingBottom: '20%',
  alignSelf: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  borderRadius: 30,
};
const fieldText = {
  marginHorizontal: 25,
  fontSize: 12,
  fontWeight: '500',
  color: 'black',
};
const textInput = {
  alignSelf: 'center',
  marginVertical: 10,
  paddingHorizontal: 10,
  height: 50,
  width: '85%',
  borderWidth: 1,
  borderRadius: 12,
  borderColor: '#DEDEDE',
  backgroundColor: '#F3F3F3',
};
const headingText = {
  fontSize: 25,
  fontWeight: '700',
  color: 'black',
  margin: 25,
};

export {button, card, fieldText, textInput, headingText, buttonCard};
