import { View,
    Text,
     StyleSheet,
      TouchableOpacity,
      Image
     } from 'react-native';
     import { colors } from '@/constants/colors';
     // imgs
import Logo from '../../assets/images/logopngArtboard 1 1.png'
import Preferences from '../../assets/images/preferences.png'
export default function SecondScreen(){
    return(
        <View>
            <View style={styles.content}>
                <Image source={Logo} style={styles.logo}/>
                <Text style={styles.textContent}>
                    Definir preferências para vários usuários de vários restaurantes
                </Text>
                <Image source={Preferences}/>
             <View style={{display:"flex", flexDirection:"row", gap:5, padding:2, marginTop:80}}>
              <Text style={{color:colors.white, opacity:0.5}}>●</Text>
              <Text style={{color:colors.white, opacity:1}}>●</Text>
              <Text style={{color:colors.white, opacity:0.5}}>●</Text>
             </View>
            </View>
          </View>
    );
}

const styles = StyleSheet.create({
   logo:{
    backgroundColor:colors.white,
    borderRadius:40,
    height:70,
    width:70,
   },
   content:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    gap:20
   },
   textContent:{
    color:colors.white,
    fontSize:30,
    textAlign:"center",
    fontWeight:"200",
    width:350,
  }
  });