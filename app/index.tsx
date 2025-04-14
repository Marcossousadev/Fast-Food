import { View,
   Text,
    StyleSheet,
     TouchableOpacity,
     Image
    } from 'react-native';
    import { colors } from '@/constants/colors';
    // imgs
import Logo from '../assets/images/logopngArtboard 1 1.png'
import Economiz from '../assets/images/eco.png'
import OneScreen from '@/src/screens/oneScreen';
import SecondScreen from '@/src/screens/secondScreen';
import ThirdScreen from '@/src/screens/ThirdScreen';
import { useState } from 'react';
export default function Index(){

  const [screen, setScreen] = useState<number>(1);

  
  function handleNextScreen(){
    setScreen(screen +1);
  }
  return(
  <View style={styles.container}>
    {
      screen === 1 || screen === 2 ? (
        <View style={styles.viewButtonTop}>
        <TouchableOpacity onPress={handleNextScreen}>
          <Text style={styles.Textskip}>Próximo >></Text>
      </TouchableOpacity>
    </View>
      ) : (<View></View>)
    }
  <View>
    {screen === 1 && <OneScreen/>}
    {screen === 2 && <SecondScreen/>}
    {screen === 3 && <ThirdScreen/>}
  </View>
  </View>
  );
}

const styles = StyleSheet.create({
  viewButtonTop:{
    display:"flex",
    justifyContent:"flex-end",
    alignItems:"flex-end",
    marginTop:20,
    marginRight:20,
  },
  Textskip:{
    color:colors.white,
    fontSize:20,
  },
  container:{
    height:"100%", 
    width:"100%",
    backgroundColor:colors.red,
  } 
})