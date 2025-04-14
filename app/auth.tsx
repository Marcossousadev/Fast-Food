import { colors } from "@/constants/colors";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Logo from '../assets/images/logo2.png'
import Login from "@/src/screens/components/Login";
import SignUp from "@/src/screens/components/SignUp";
import { useEffect, useState } from "react";
export default function Auth(){
    const [showSignIn, setShowSignIn] = useState(true);
    const [showSignUp, setShowSignUp] = useState(false);
    function visibleSignIn(){
        setShowSignIn(true);
        setShowSignUp(false);
    }
    function visibleSignUp(){
        setShowSignUp(true);
        setShowSignIn(false);
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.viewChoice}>
                <Image source={Logo}/>
                <View style={styles.buttonsNavigation}>
                    <Pressable style={showSignIn ? {marginLeft:80, 
                        borderBottomColor:colors.orange, borderBottomWidth:2} : {marginLeft:80}} onPress={visibleSignIn}>
                        <Text style={styles.textAuthMethodTrue}>Entrar</Text>
                    </Pressable>
                
                    <Pressable style={ showSignUp ? {marginRight:80, 
                        borderBottomColor:colors.orange, borderBottomWidth:2} : {marginRight:80}} onPress={visibleSignUp}>
                        <Text style={styles.textAuthMethod}>Cadastrar-se</Text>
                    </Pressable>
                </View>
            </View>
           <View style={{flex:1, marginTop:40}}>
           {showSignIn && <Login/>}
           {showSignUp && <SignUp/>}
           </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height:"100%",
        width:"100%",
        backgroundColor: colors.white_op,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    viewChoice:{
        backgroundColor:colors.white,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:5,
    },

    buttonsNavigation: {
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    textAuthMethod:{
        fontSize:18,
        fontWeight:"bold",
        color:colors.black
    },
    textAuthMethodTrue:{
        fontSize:18,
        fontWeight:"bold",
        color:colors.black,
    }
});