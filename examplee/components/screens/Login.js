import React from "react";
import { Button, Image, Text, TextInput, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

function Login({navigation}) {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', top: 40 }} >
            <Image source={require("../database/images/products/havuç1.png")} />
            <View style={{ marginRight: 300, top: 50 }} >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }} >Loging</Text>
            </View>
            <View style={{ top: 60, marginRight: 160, borderRadius: 20 }} >
                <Text>Enter your emails and password</Text>
            </View>
            <View style={{top:100,marginRight:320}} >
                <Text>Email</Text>
                <TextInput placeholder="E-mail" keyboardType="email-address"  />
            </View>
            <View style={{top:150,marginRight:300}} >
                <Text>Password</Text>
                <TextInput   secureTextEntry placeholder="Password" keyboardType="numeric" />
            </View>
            <View style={{marginLeft:280,top:120}} >
                    <Entypo name="eye-with-line" size={20} />
                </View>
                <View style={{top:140,marginLeft:180}} >
                    <Text style={{fontWeight:'500'}} >Forgot Password?</Text>
                </View>
                <View style={{top:220,width:350,}} >
                    <Button onPress={()=> navigation.navigate("SignUp")} title="Log In" color='#67CB99' />
                </View>
                <View style={{top:230}} >
                    <Text>Don't have an account?</Text>
                    <Text style={{color:'#67CB99',marginLeft:150,top:-19}} >Signup</Text>
                </View>
        </View>
    )
}

export default Login;