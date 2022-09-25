import React from "react";
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

function Number({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Sign")} style={{ marginLeft: 20, top: 20 }} >
                <AntDesign name="left" size={25} />
            </TouchableOpacity>
            <View style={{ top: 60, marginLeft: 25 }} >
                <Text style={{ fontWeight: 'bold', fontSize: 25 }} >Enter your mobile number</Text>
                <Text style={{ top: 35 }} >Mobile Number</Text>
                <View style={{ top: 40, }} >
                    <View style={{ top: 35, marginLeft: 10 }} >
                        <Image source={require("../database/images/products/no.png")} />
                    </View>
                    <TextInput style={{ fontSize: 20, fontWeight: '900', backgroundColor: '#EBEBEB', marginLeft: 50 }} keyboardType='numeric' placeholder="+880" />
                </View>
            </View>
            <TouchableOpacity onPress={() =>  navigation.navigate("Veri")} style={{
                backgroundColor: '#67CB99',
                width: 50,
                height: 50,
                borderRadius: 50,
                top: 300,
                marginLeft: 330,
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <AntDesign name="right" size={25} color='white' />
            </TouchableOpacity>
        </View>
    )
}

export default Number;