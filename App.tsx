import React,{ useState } from 'react';
import {SafeAreaView,StyleSheet,Text,View,Button} from 'react-native';



function App(): React.JSX.Element {

  const [count, setCount] = useState<number>(0);

  return (
    <SafeAreaView>
      <View style = {styles.container}>
         <View style = {styles.cont}>
            <Text style = {styles.text} >
               {count}
            </Text>
         </View>
         <View >
           <Button title="Increment" onPress={() => setCount(count + 1)} />
         </View>
      </View>
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  text: {
    fontSize:20,
  },
  cont : {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  container : {
    padding :10,
    backgroundColor:'red',
    height:'100%',  
  },
});