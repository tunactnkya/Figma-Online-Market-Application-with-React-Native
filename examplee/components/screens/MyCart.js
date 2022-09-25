import React from "react";
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const MyCart = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}  >
            <Image source={require("../database/images/products/profile.png")} />
            <View style={{ position: 'absolute', top: 450, left: 30 }} >
                <View style={{ top: 120, }} >
                    <Button color='#67CB99' title="Get Started" onPress={() => navigation.navigate('Sign')} />
                </View>
                <Text style={{ fontSize: 35, color: 'white', }} >Welcome to our store</Text>
                <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'bold' }} >Ger your grocceries as fast as one hour</Text>
            </View>
        </View>
    )
}


export default MyCart;