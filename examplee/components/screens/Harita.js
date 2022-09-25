import React from "react";
import { Text, Image, View, TouchableOpacity, TextInput, Button } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

function Harita({navigation}) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Veri")} style={{ marginLeft: 20, top: 20 }} >
                <AntDesign name="left" size={25} />
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', alignItems: 'center', top: 70 }} >
                <Image source={require("../database/images/products/harita.png")} />
                <Text style={{fontWeight:'bold',fontSize:20,top:20}} >Select Your Location</Text>
                <Text style={{top:30,fontWeight:'300',fontSize:16}} >Switch   on your    location to stay in tune with what's happening in your area</Text>
            </View>
            <View style={{top:200}} >
                <Text style={{marginLeft:20}} >Your Zone</Text>
                <Text style={{top:10,marginLeft:18,fontWeight:'800',fontSize:20}} >Banasree</Text>
                <TouchableOpacity  style={{marginLeft:350,top:-10}} >
                <AntDesign name="down" size={20} />
                </TouchableOpacity>
            </View>
            <View style={{top:210,marginLeft:20}} >
                <Text style={{fontSize:16,}} >Your Area</Text>
                <View style={{marginLeft:-5,backgroundColor:'#EBEBEB'}} >
                    <TextInput placeholder="Types of your area" />
                    <View style={{marginLeft:335,top:-40}} >
                        <AntDesign name="down" size={20} />
                    </View>
                </View>
            </View>
            <View style={{top:215}} >
                <Button  onPress={() => navigation.navigate("Login")} title="Submit" color='#67CB99' />
            </View>
        </View>
    )
}

export default Harita;