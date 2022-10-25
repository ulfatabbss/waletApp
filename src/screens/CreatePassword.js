import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {button, headingText, fieldText, textInput} from '../utilis/styles';
import Back from '../components/Back';
const CreatePassword = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Back navigation={navigation} />
      <View
        style={{
          width: '95%',
          marginTop: 100,
          position: 'absolute',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <Text style={[headingText, {marginTop: 40, width: '60%', margin: 0}]}>
          Create New Password
        </Text>
        <Text style={{width: '70%', marginVertical: 15}}>
          Your password must be different from previous used password
        </Text>

        <Text
          style={[fieldText, {marginHorizontal: 0, marginTop: 20, right: 100}]}>
          New Password
        </Text>
        <TextInput
          style={[textInput, {marginBottom: 30}]}
          placeholder={'• • • • • • • • •'}
        />
        <Text
          style={[fieldText, {marginHorizontal: 0, marginTop: 20, right: 100}]}>
          Confirm Password
        </Text>
        <TextInput
          style={[textInput, {marginBottom: 50}]}
          placeholder={'• • • • • • • • •'}
        />

        <TouchableOpacity style={[button]}>
          <Text style={{color: 'white', fontWeight: '600'}}>
            Reset Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({});
