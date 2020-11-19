import 'react-native-gesture-handler';
import * as React from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';


function loginScreen({ navigation }) {
  const [userName, setUserName] = React.useState('');
  const [passWord, setPassWord] = React.useState('');

  function login(userName, passWord) {
    if (userName == 'admin' && passWord == 'admin@123') {
      navigation.navigate('reg')
    } else {
      alert('Incorrect username or password')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="   Username"
        placeholderTextColor="#969696"
        autoCapitalize="none"
        onChangeText={userName => setUserName(userName)}
        value={userName} />

      <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder=" Password"
        placeholderTextColor="#969696"
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={passWord => setPassWord(passWord)}
        value={passWord} />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={
          () => login(userName, passWord)
        }>
        <Text style={styles.submitButtonText}> Login </Text>
      </TouchableOpacity>

    </View>
  )
}

function registrationScreen({ navigation }) {
  const [name, setName] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="   Name"
        placeholderTextColor="#969696"
        autoCapitalize="words"
        onChangeText={name => setName(name)}
        value={name} />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={
          () => navigation.navigate('final', { inputText: name })
        }>
        <Text style={styles.submitButtonText}> Next </Text>
      </TouchableOpacity>

    </View>
  )
}

function finalScreen({ route, navigation }) {
  const { inputText } = route.params;

  return (
    <View style={styles.finalContainer}>
      <Text style={styles.final}> {JSON.stringify(inputText)} registered succesfully! </Text>
    </View>
  )
}

const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator headerMode="none">
        <stack.Screen name="Login" component={loginScreen} />
        <stack.Screen name="reg" component={registrationScreen} />
        <stack.Screen name="final" component={finalScreen} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  input: {
    margin: 15,
    height: 40,
    color: '#969696',
    borderColor: '#DCDCDC',
    borderWidth: 1
  },
  finalContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#121212'  
  },
  final: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  submitButton: {
    backgroundColor: '#BB86FC',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: '#141414',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default App