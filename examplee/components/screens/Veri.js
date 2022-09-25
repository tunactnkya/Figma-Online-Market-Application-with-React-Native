import React from "react";
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

function Veri({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Number")} style={{ top: 15, marginLeft: 15 }} >
                <AntDesign name="left" size={25} />
            </TouchableOpacity>
            <View style={{ top: 70, marginLeft: 35 }} >
                <Text style={{ fontWeight: 'bold', fontSize: 25 }} >Enter your 4-digit code</Text>
                <View style={{ top: 30 }} >
                    <Text>Code</Text>
                </View>
                <View style={{ backgroundColor: '#EBEBEB', top: 50 }} >
                    <TextInput style={{ fontSize: 30, color: '#000000' }} keyboardType="numeric" placeholder="- - - -" />
                </View>
            </View>

            <View style={{top:365,marginLeft:35,}} >
                <Text style={{color:'#67CB99'}} >Resend Code</Text>
            </View>


            <TouchableOpacity onPress={() => navigation.navigate("Harita") } style={{ top: 330,
                 backgroundColor: '#67CB99',
                  width: 50,
                   height: 50,
                    borderRadius: 50,
                    justifyContent:'center',
                    alignItems:'center',
                    marginLeft:320 }} >
                <AntDesign  color='white' name="right" size={20} />
            </TouchableOpacity>



        </View>
    )
}

export default Veri;