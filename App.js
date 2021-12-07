import React from 'react';
import {
  Alert,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  View,
} from 'react-native';

const App = () => {
  const [email, setEmail] = React.useState(false);
  const [password, setPassword] = React.useState(false);

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
      }}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={{width: 200, height: 200}}
          source={require('./images/SAIB.jpeg')}
        />
      </View>

      <View style={{flex: 0.8}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: '600',
            color: 'black',
          }}>
          Login
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: '5%',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 15,
          }}>
          <TextInput
            value={email}
            style={{
              flex: 1,
              padding: 15,
              color: 'black',
            }}
            onChangeText={newEmail => setEmail(newEmail)}
            placeholder={'email'}
            placeholderTextColor="gray"
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: '5%',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 15,
          }}>
          <TextInput
            value={password}
            style={{
              flex: 1,
              padding: 15,
              color: 'black',
            }}
            onChangeText={newPassword => setPassword(newPassword)}
            placeholder={'password'}
            placeholderTextColor="gray"
          />
        </View>

        <TouchableOpacity
          onPress={() => Alert.alert('Welcome to The Saudi Investment Bank')}
          style={{
            marginTop: 20,
            borderRadius: 15,
            height: 45,
            width: '100%',
            backgroundColor: '#ffd600',
            color: '#F2F2F2',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>
            {'Login'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
