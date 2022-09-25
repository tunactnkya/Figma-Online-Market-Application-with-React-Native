import React from "react";
import { Button, Image,Text,TouchableOpacity,View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

function Sign ({navigation}){
    return(
        <View>
        <Image source={(require("../database/images/products/Mask.png"))} />
        <Text style={{fontWeight:'bold',fontSize:20,lineHeight:25,top:20,marginLeft:20}} >Get your groceries                                           with nectar</Text>
        <View style={{top:50,marginLeft:20}} >
            <Image source={(require("../database/images/products/no.png"))} />
            <TouchableOpacity onPress={() => navigation.navigate("Number")} >
            <Text style={{fontWeight:'bold',marginLeft:50,top:-25,fontSize:20}} >+880</Text>
            </TouchableOpacity>
            <Text style={{textAlign:'center'}} >Or Connect with Social Media</Text>
        </View>

 <View  style={{top:80}} >
 <Button title="Continue With Google" />
 <View style={{top:-28,marginLeft:70}} >
    <AntDesign name="google" size={20} color='white' />
 </View>
 </View>

 <View  style={{top:100}} >
 <Button  color='#7777EA' title="Continue With Facebook" />
 <View style={{top:-30,marginLeft:60 }} >
    <EvilIcons name="sc-facebook" size={30} color='white' />
 </View>
 </View>

        </View>
    )
}

export default Sign;