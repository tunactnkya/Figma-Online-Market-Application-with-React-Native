import React from "react";
import { Text, View, SafeAreaView, Image, TouchableOpacity, Button, ScrollView } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function Favorite() {
    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center', alignItems: 'center', top: 20 }} >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Favorite</Text>
            </View>
            <View style={{ borderWidth: 1, top: 50, borderColor: '#EAEAEA' }} ></View>

            <View style={{ top: 70, marginLeft: 15 }} >
                <Image style={{ width: 40, height: 70 }} source={require("../database/images/products/sprite.png")} />
            </View>
            <View style={{ top: 10, marginLeft: 90 }} >
                <Text style={{ fontWeight: '900' }} >Sprite Can</Text>
            </View>
            <View style={{ top: 15, marginLeft: 90 }} >
                <Text>325ml,price</Text>
            </View>
            <View style={{ top: -13, marginLeft: 270 }} >
                <Text style={{ fontWeight: '900', fontSize: 18 }} >$1.50</Text>
            </View>
            <View style={{ marginLeft: 360, top: -35 }} >
                <AntDesign name="right" size={22} color='#000000' />
            </View>

            <View style={{ borderWidth: 1, top: 20, borderColor: '#EAEAEA' }} ></View>



            <View style={{ top: 40, marginLeft: 20 }} >
                <Image style={{ width: 30, height: 70 }} source={require("../database/images/products/light.png")} />
            </View>
            <View style={{ top: -20, marginLeft: 90 }} >
                <Text style={{ fontWeight: '900' }} >Diet Coke</Text>
            </View>
            <View style={{ top: -15, marginLeft: 90 }} >
                <Text>335ml,price</Text>
            </View>
            <View style={{ top: -45, marginLeft: 270 }} >
                <Text style={{ fontWeight: '900', fontSize: 18 }} >$1.99</Text>
            </View>
            <View style={{ marginLeft: 360, top: -65 }} >
                <AntDesign name="right" size={22} color='#000000' />
            </View>


            <View style={{ borderWidth: 1, top: -5, borderColor: '#EAEAEA' }} ></View>


            <View style={{ top: 15, marginLeft: 20 }} >
                <Image style={{ width: 30, height: 70 }} source={require("../database/images/products/meyve1.png")} />
            </View>
            <View style={{ top: -50, marginLeft: 90 }} >
                <Text style={{ fontWeight: '900' }} >Apple & Grace Juice</Text>
            </View>
            <View style={{ top: -43, marginLeft: 90 }} >
                <Text>335ml,price</Text>
            </View>
            <View style={{ top: -75, marginLeft: 270 }} >
                <Text style={{ fontWeight: '900', fontSize: 18 }} >$15.50</Text>
            </View>
            <View style={{ marginLeft: 360, top: -95 }} >
                <AntDesign name="right" size={22} color='#000000' />
            </View>

            <View style={{ borderWidth: 1, top: -35, borderColor: '#EAEAEA' }} ></View>


            <View style={{ top: -15, marginLeft: 20 }} >
                <Image style={{ width: 30, height: 70 }} source={require("../database/images/products/kola.png")} />
            </View>
            <View style={{ top: -80, marginLeft: 90 }} >
                <Text style={{ fontWeight: '900' }} >Coca Cola Can</Text>
            </View>
            <View style={{ top: -70, marginLeft: 90 }} >
                <Text>335ml,price</Text>
            </View>
            <View style={{ top: -105, marginLeft: 270 }} >
                <Text style={{ fontWeight: '900', fontSize: 18 }} >$4.99</Text>
            </View>
            <View style={{ marginLeft: 360, top: -125 }} >
                <AntDesign name="right" size={22} color='#000000' />
            </View>











            <View style={{ top: -60, width: 300, marginLeft: 50, }} >
                <Button color='#67CB99' title="Add All To Cart" />
            </View>


            <View style={{ alignItems: 'center', width: '80%', paddingVertical: 15, margin: 10, position: 'absolute', top: 650, backgroundColor: 'white', width: 390 }} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }} >
                    <TouchableOpacity style={{ marginLeft: -30 }} >
                        <Entypo name="shop" size={20} />
                        <Text style={{ marginLeft: -10 }} >Shop</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Explore")} style={{ marginLeft: 10 }} >
                        <Feather name="search" size={20} />
                        <Text style={{ marginLeft: -7, }} >Explore</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Basket")} style={{ marginRight: 5 }} >
                        <Entypo name="shopping-cart" size={20} />
                        <Text style={{ marginLeft: -5 }} >Cart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Favorite")} style={{ marginRight: 10 }} >
                        <MaterialIcons name="favorite-border" size={20} />
                        <Text style={{ marginLeft: -5 }} >Favorite</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginRight: -20 }} >
                        <AntDesign name="user" size={20} />
                        <Text style={{ marginLeft: -20 }} >Account</Text>
                    </TouchableOpacity>
                </View>
            </View>



        </SafeAreaView>

    )
}

export default Favorite;