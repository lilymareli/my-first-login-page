import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

import MyButton from './src/component/MyButton';

const App: () => React$Node = () => {
  return (
  
      <SafeAreaView
      style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
       
          <Image 
          style={styles.imageStyle}
          source={require('./src/icon.png')} />
          
          <View
          style={styles.inputContainer}
          >
            <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="e-mail'inizi giriniz"
            />
          </View>

          <View
          style={styles.inputContainer}
          >
            <TextInput
            autoCapitalize="none"
            placeholder="şifrenizi giriniz"
            secureTextEntry={true}
            />
          </View>

          <MyButton myTitle="Giriş Yap"/>
          <MyButton myTitle="Kayıt Ol"/>

        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    width: Dimensions.get("window").width / 1.5
  },
  imageStyle: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").height / 3,
    resizeMode: 'contain',
  }
})

export default App;
