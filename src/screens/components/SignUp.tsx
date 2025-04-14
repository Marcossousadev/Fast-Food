import {View, Text, StyleSheet, Image, Pressable, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native';
import { colors } from '@/constants/colors';
import LogoGoogle from '../../../assets/images/Google Logo.png';
import LogoFacebook from '../../../assets/images/logos_facebook.png';
export default function SignUp(){
    return(
        <View style={{width:350}}>
           <View style={styles.inic}>
           <View>
                <Text style={styles.textRegistrer}>Registrar-se</Text>
            </View>
            <View style={{display:"flex", flexDirection:"row", gap:20}}>
                <TouchableOpacity style={styles.buttonTop}>
                    <Image source={LogoGoogle}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTop}>
                    <Image source={LogoFacebook}/>
                </TouchableOpacity>
            </View>
           </View>

           <View style={styles.inputs}>
            <TextInput 
            placeholder='Digite seu nome completo'
            style={styles.input}
            />
            <TextInput 
            placeholder='Digite seu email'
            style={styles.input}
            />
            <TextInput 
            placeholder='Digite sua senha'
            style={styles.input}
            />
            <TextInput 
            placeholder='Confirme sua senha'
            style={styles.input}
            />
           </View>

           <View style={styles.signUp}>
            <TouchableOpacity style={styles.signUpButton}>
                <Text style={styles.signUpText}>Cadastrar-se</Text>
            </TouchableOpacity>
            <Text style={styles.textHas}>Já tem uma conta? <Text style={styles.textEnter}>Entre</Text></Text>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inic:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
    inputs:{
        marginTop:15,
    },
    input:{
        backgroundColor:colors.white,
        marginBottom:15,
        paddingTop:15, 
        paddingBottom:15,
        borderRadius:10,
        fontSize:16
    },
    textRegistrer:{
        fontSize:25,
        color:colors.orange,
        fontWeight:"bold",
    },
    buttonTop:{
    padding:8,
    backgroundColor:colors.white,
    borderRadius:15
    },
    signUp:{
        marginTop:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    },
    textHas:{
        color:colors.grey,
        fontSize:15,
        marginTop:-8,
        fontWeight:"bold",
        marginLeft:5,
        width:120
    },
    signUpButton:{
        backgroundColor:colors.orange,
        padding:15,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:25
    },
    signUpText:{
        color:colors.white,
        fontWeight:"bold",
        fontSize:16
    },
    textEnter:{
        color:"#808080",
        fontWeight:"bold",
        textDecorationLine:"underline",
    }
});