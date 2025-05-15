import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (

    <WebView style={styles.container} source={{ uri: 'http://172.21.1.25:2735/' }}>
         <Text>Hello! i made a RN APP!!!</Text>
    </WebView>

/*    <View style={styles.container}>
      <Text>Hello! i made a RN APP!!!</Text>
      <StatusBar style="auto" />
    </View>*/
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
