import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

function Bevarages({ navigation }) {
    return (
        <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center', top: 30 }} >
            <TouchableOpacity onPress={() => navigation.navigate("Explore")} style={{ marginLeft: -350 }} >
                <AntDesign name="left" size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 300, top: -20 }} >
                <AntDesign name="swap" size={25} />
            </TouchableOpacity>
            <Text style={{ top: -45, fontSize: 20, fontWeight: 'bold' }} >Bevarages</Text>

            <View style={{
                borderWidth: 1,
                width: 150,
                height: 220,
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderColor: '#DCD5D4',
                borderRadius: 20,
                top: 10,
                marginRight: 200
            }} >
                <Image source={require("../database/images/products/light.png")} />
                <Text style={{ fontWeight: '900', fontSize: 16, marginRight: 55, top: 10 }} >Diet Coke</Text>
                <Text style={{ fontWeight: '300', marginRight: 55, top: 15 }} >335ml,Price</Text>
                <Text style={{ marginRight: 75, top: 30, fontWeight: '900', fontSize: 18 }} >$1.99</Text>
                <TouchableOpacity style={{ backgroundColor: '#67CB99', borderRadius: 10,top:5, marginLeft: 85, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }} >
                    <Entypo name="plus" size={25} color='white' />
                </TouchableOpacity>
            </View>

            <View style={{
                borderWidth: 1,
                width: 150,
                height: 220,
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderColor: '#DCD5D4',
                borderRadius: 20,
                top: -210,
                marginRight:-190
            }} >
                <Image source={require("../database/images/products/sprite.png")} />
                <Text style={{ fontWeight: '900', fontSize: 16, marginRight: 55, top: 10 }} >Sprite Can</Text>
                <Text style={{ fontWeight: '300', marginRight: 55, top:15 }} >325ml,Price</Text>
                <Text style={{ marginRight: 75, top: 30, fontWeight: '900', fontSize: 18 }} >$1.50</Text>
                <TouchableOpacity style={{ backgroundColor: '#67CB99', borderRadius: 10,top:5, marginLeft: 85, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }} >
                    <Entypo name="plus" size={25} color='white' />
                </TouchableOpacity>
            </View>

            <View style={{
                borderWidth: 1,
                width: 150,
                height: 220,
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderColor: '#DCD5D4',
                borderRadius: 20,
                top: -190,
                marginRight:193
            }} >
                <Image source={require("../database/images/products/meyve1.png")} />
                <Text style={{ fontWeight: '900', fontSize: 16, marginRight: 25, top: 10 }} >Apple & Grape Juice </Text>
                <Text style={{ fontWeight: '300', marginRight: 80, top:15 }} >2L,Price</Text>
                <Text style={{ marginRight: 75, top: 30, fontWeight: '900', fontSize: 18 }} >$15.99</Text>
                <TouchableOpacity style={{ backgroundColor: '#67CB99', borderRadius: 10,top:5, marginLeft: 85, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }} >
                    <Entypo name="plus" size={25} color='white' />
                </TouchableOpacity>
            </View>

            <View style={{
                borderWidth: 1,
                width: 150,
                height: 220,
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderColor: '#DCD5D4',
                borderRadius: 20,
                top: -409,
                marginRight:-190
            }} >
                <Image source={require("../database/images/products/meyve2.png")} />
                <Text style={{ fontWeight: '900', fontSize: 16, marginRight: 55, top: 10 }} >Orange Juice</Text>
                <Text style={{ fontWeight: '300', marginRight: 65, top:15 }} >2L,Price</Text>
                <Text style={{ marginRight: 75, top: 30, fontWeight: '900', fontSize: 18 }} >$15.99</Text>
                <TouchableOpacity style={{ backgroundColor: '#67CB99', borderRadius: 10,top:5, marginLeft: 85, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }} >
                    <Entypo name="plus" size={25} color='white' />
                </TouchableOpacity>
            </View>

            <View style={{
                borderWidth: 1,
                width: 150,
                height: 220,
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderColor: '#DCD5D4',
                borderRadius: 20,
                top: -390,
                marginRight:193
            }} >
                <Image source={require("../database/images/products/kola.png")} />
                <Text style={{ fontWeight: '900', fontSize: 16, marginRight: 25, top: 10 }} >Coca Cola Can </Text>
                <Text style={{ fontWeight: '300', marginRight: 60, top:15 }} >325ml,Price</Text>
                <Text style={{ marginRight: 75, top: 30, fontWeight: '900', fontSize: 18 }} >$4.99</Text>
                <TouchableOpacity style={{ backgroundColor: '#67CB99', borderRadius: 10,top:5, marginLeft: 85, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }} >
                    <Entypo name="plus" size={25} color='white' />
                </TouchableOpacity>
            </View>

            <View style={{
                borderWidth: 1,
                width: 150,
                height: 220,
                justifyContent: 'flex-start',
                alignItems: 'center',
                borderColor: '#DCD5D4',
                borderRadius: 20,
                top: -610,
                marginRight:-190
            }} >
                <Image source={require("../database/images/products/pepsi.png")} />
                <Text style={{ fontWeight: '900', fontSize: 16, marginRight: 55, top: 10 }} >Pepsi Can</Text>
                <Text style={{ fontWeight: '300', marginRight: 65, top:15 }} >330ml,Price</Text>
                <Text style={{ marginRight: 75, top: 30, fontWeight: '900', fontSize: 18 }} >$4.99</Text>
                <TouchableOpacity style={{ backgroundColor: '#67CB99', borderRadius: 10,top:5, marginLeft: 85, width: 30, height: 30, justifyContent: 'center', alignItems: 'center' }} >
                    <Entypo name="plus" size={25} color='white' />
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    )
}

export default Bevarages;