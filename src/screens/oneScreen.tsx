import { View,
    Text,
     StyleSheet,
      TouchableOpacity,
      Image
     } from 'react-native';
     import { colors } from '@/constants/colors';
     // imgs
 import Logo from '../../assets/images/logopngArtboard 1 1.png'
 import Economiz from '../../assets/images/eco.png'
 

export default function OneScreen(){
    return(
        <View>
            <View style={styles.content}>
             <View style={styles.ecoView}>
             <Image source={Logo} style={styles.logo}/>
              <Text style={styles.textContent}>Economize comida com nosso novo recurso</Text>
              <Image source={Economiz}/>
             </View>
             <View style={{display:"flex", flexDirection:"row", gap:5, padding:2, marginTop:20}}>
              <Text style={{color:colors.white}}>●</Text>
              <Text style={{color:colors.white, opacity:0.5}}>●</Text>
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
      width:70
    },
    content:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
    },
    ecoView:{
      marginTop:30,
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
    },
    textContent:{
      color:colors.white,
      fontSize:50,
      textAlign:"center",
      fontWeight:"200",
      width:350,
    }
  })