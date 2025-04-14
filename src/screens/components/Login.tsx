import { colors } from '@/constants/colors';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable, Image} from 'react-native';
// imgs
import FacebookLogo from '../../../assets/images/Facebook Logo.png';
import GoogleLogo from '../../../assets/images/Google Logo.png';
export default function Login(){
    return(
        <View style={{width:350}}>
            <View>
            <TextInput 
            placeholder='Digite seu email' 
            style={styles.input}/>
            <TextInput 
            placeholder='Digite sua senha' 
            style={styles.input}/>
            <Pressable>
            <Text style={styles.forgot}>Esqueceu a senha?</Text>
            </Pressable>
        </View>

        <View style={styles.viewButtons}>
        <TouchableOpacity style={styles.buttonSignIn}>
            <Text style={styles.textSignIn}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.or}>Ou</Text>

            <TouchableOpacity style={styles.buttonFacebook}>
                <Image source={FacebookLogo}/>
                <Text style={styles.textFacebook}>Entrar com Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGoogle}>
                <Image source={GoogleLogo}/>
                <Text style={styles.textGoogle}>Entrar com Google</Text>
            </TouchableOpacity>
    
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:colors.white,
        marginBottom:15,
        paddingTop:15, 
        paddingBottom:15,
        borderRadius:10,
        fontSize:16
    },
    forgot:{
        color:colors.orange,
        fontSize:15,
        marginTop:-8,
        fontWeight:"bold",
        marginLeft:5,
    },
    viewButtons:{
        display:"flex",
        marginTop:20,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        
    },
    buttonSignIn:{
        backgroundColor:colors.orange,
        borderRadius:25,
        padding:15,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"100%"
    },
    textSignIn:{
        fontWeight:"bold",
        color:colors.white,
        fontSize:17,
    },
    or:{
        color:colors.black,
        fontWeight:"bold",
        fontSize:18,
        marginTop:15,
        marginBottom:15
    },
    buttonFacebook:{
        backgroundColor:colors.blue,
        gap:10,
        borderRadius:25,
        padding:15,
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        marginBottom:12
    },
    textFacebook:{
        fontWeight:"bold",
        color:colors.white,
        fontSize:17,
    },
    buttonGoogle:{
        backgroundColor:colors.white,
        borderRadius:25,
        padding:15,
        display:"flex",
        flexDirection:"row",
        gap:25,
        alignItems:"center",
        justifyContent:"center",
        width:"100%"
    },
    textGoogle:{
        fontWeight:"bold",
        color:colors.black,
        fontSize:17,
    },
});