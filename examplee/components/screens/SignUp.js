import React from "react";
import { Text, View, Image, TextInput, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

function SignUp({navigation}) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', top: 55 }} >
            <Image source={(require("../database/images/products/icon.png"))} />
            <View style={{ marginRight: 290, top: 50 }} >
                <Text style={{fontSize:18,fontWeight:'bold'}} >Sign Up</Text>
            </View>
            <View style={{top:70,marginRight:210,}} >
            <Text>Credentials to continue</Text>
            </View>
            <View style={{marginRight:290,top:120,}} >
                <Text style={{fontWeight:'500'}} >Username:</Text>
            </View>
            <View style={{top:120,marginRight:200,borderRadius:20}} >
                <TextInput placeholder="Please enter username..." />
            </View>
            <View style={{top:140,marginRight:320}} >
               <Text style={{fontWeight:'500'}} >Email:</Text>
            </View>
            <View  style={{top:140,marginRight:190,borderRadius:20}} >
                <TextInput placeholder="Please enter your e-mail..." />
            </View>
            <View></View>
            <View style={{top:160,marginRight:290,}} >
                <Text style={{fontWeight:'500'}} >Password:</Text>
            </View>
            <View style={{top:160,marginRight:115,borderRadius:20}} >
                <TextInput  secureTextEntry  placeholder="Please enter your password..." />
            </View>
            <View style={{top:37,marginLeft:60}} >
                <AntDesign name="check" size={20} color='green' />
               </View>
               <View style={{top:105,marginLeft:60}} >
                <Entypo name="eye-with-line" size={20} />
               </View>
               <View style={{top:130}} >
                <Text>By continuing you agree to our <Text style={{color:'#67CB99'}} >Terms of Service</Text> and <Text style={{color:'#67CB99'}} >Privacy Policy</Text>  </Text>
               </View>
               <View style={{top:160,width:350}} >
                <Button  onPress={()=> navigation.navigate("ProductInfo")} color='#67CB99'  title="Sing Up" />
               </View>
               <View style={{top:170}} >
                <Text style={{fontWeight:'bold'}} >Already have an account? <Text style={{color:'#67CB99'}} >Singup</Text> </Text>
               </View>
        </View>
    )
}

export default SignUp;