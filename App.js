import * as React from 'react';
import * as Speech from 'expo-speech';
import { Text, View, StyleSheet, TextInput, Image,TouchableOpacity,safeAreaProvider } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
     name: '',
    };
  }

  speak=()=> {
    var thingToSay = this.state.name
    Speech.speak(thingToSay);
  }

  render(){
  return (
    <safeAreaProvider>
    <View>
      <Header
        backgroundColor={'#00bfff'}
        centerComponent={{
        text: 'Text To Speech Coverter',
        style: { color: '#fff', fontSize: 15,fontWeight: 'bold' },
        }}/>

      <Image
        style={styles.imageIcon}
        source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fsharminrimatec-besl306.blogspot.com%2F2018%2F11%2Freview-on-awabe-english-pronunciation.html&psig=AOvVaw3MoUtdUIYBKU8xv-UOpH07&ust=1619175588167000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLj_3aDZkfACFQAAAAAdAAAAABAD'}}/>

      <Text style={styles.title}>Enter the word</Text>

      <TextInput
        style={styles.inputBox}
        onChangeText={text => {
          this.setState({ name:text});
        }}
        value={this.state.text}
      />

      <TouchableOpacity style={styles.button}
        onPress={()=>{this.speak()}}>
        <Text style={styles.buttonText}>Click Here to hear Speech</Text>
      </TouchableOpacity>
    </View>
    </safeAreaProvider>
  )}
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 25,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 15
  },
  title:{
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 17
  },
  button:{
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 100,
    backgroundColor: '#00bfff',
    padding: 5,
    width: 300,
    height:70,
    borderWidth: 3
  },
  buttonText:{
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'

  }
  
});
