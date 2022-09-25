import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

const Home = ({navigation}) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#67CB99'
        }}>
            <Image style={{ top: 350, left: 50 }} source={require("../database/images/products/logo.png")} />
            <TouchableOpacity onPress={() => navigation.navigate('MyCart')} >
            <Entypo style={{top:350,left:170}}  name="arrow-bold-right"  size={50}  />
            </TouchableOpacity>
        </View>
    )
}

export default Home;