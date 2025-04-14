import { View,
    Text,
     StyleSheet,
      TouchableOpacity,
      Image
     } from 'react-native';
     import { colors } from '@/constants/colors';
     // imgs
import Logo from '../../assets/images/logopngArtboard 1 1.png'
import ThirdImg from '../../assets/images/screenThird.png';
import { useRouter } from 'expo-router';
export default function ThirdScreen(){
    const router = useRouter();
    function handleNavigationAuth(){
        router.push('/auth');
    }
    return(
        <View>
            <View style={styles.content}>
                <Image source={Logo} style={styles.logo}/>
                <Text style={styles.textContent}>
                Comida rápida, resgatada, ao seu serviço
                </Text>
                <Image source={ThirdImg} style={{marginTop:-20}}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton} onPress={handleNavigationAuth}>Começar</Text>
                </TouchableOpacity>
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
    marginTop:40,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
   },
   textContent:{
    color:colors.white,
    fontSize:50,
    textAlign:"center",
    fontWeight:"200",
    width:350,
  },
  button:{
    marginTop:-100,
    padding:12,
    backgroundColor:colors.white,
    width:280,
    display:"flex", 
    alignItems:"center", 
    justifyContent:"center",
    borderRadius:50
  },
  textButton:{
    fontSize:18,
    color:colors.red,
    fontWeight:"bold",
  }
  });