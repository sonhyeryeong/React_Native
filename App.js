import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
/*
    <WebView style={styles.container} source={{ uri: 'http://172.21.1.25:2735/' }}>
         <Text>Hello! i made a RN APP!!!</Text>
    </WebView>
*/
    <View style={styles.container}>
      <Text style={styles.text}>Hello! i made a RN APP!!!</Text>
      <StatusBar style="dark" />
      {/* statusBar 는  시계, 배터리, wifi 를 의미함. 상태바와 소통하는것임.*/ }
    </View>
  );
}


const styles = StyleSheet.create({ /* create 는 object 를 만드는데 사용함. */ 
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize : 13,
    color: 'black'
  }
});

const styleTwo =  { /* 자동 완성 지원하지 않음  */
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
};