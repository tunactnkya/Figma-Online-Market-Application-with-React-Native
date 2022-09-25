import React from "react";
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function Basket({navigation}) {
    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center', alignItems: 'center', top: 20 }} >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >My Cart</Text>
            </View>
            <View style={{ borderWidth: 1, top: 50, borderColor: '#EAEAEA' }} ></View>
            <View style={{ top: 80 }} >
                <Image source={(require("../database/images/products/biber.png"))} />
            </View>
            <View style={{ marginLeft: 120, top: -10 }} >
                <Text style={{ fontWeight: '900', fontSize: 16 }} >Bell Pepper Red</Text>
                <Text>1kg,Price</Text>
            </View>

            <View style={{ top: 10, marginLeft: 170 }} >
                <Text style={{ fontSize: 18 }} >1</Text>
            </View>

            <TouchableOpacity style={{ marginLeft: 350, top: -75, }} >
                <Feather color='gray' name="x" size={25} />
            </TouchableOpacity>

            <TouchableOpacity style={{
                marginLeft: 120,
                borderWidth: 1,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#C8C8C8',
                borderRadius: 10,
                top: -40
            }} >
                <AntDesign name="minus" size={25} />
            </TouchableOpacity>

            <TouchableOpacity style={{
                marginLeft: 200,
                borderWidth: 1,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#C8C8C8',
                borderRadius: 10,
                top: -68
            }} >
                <AntDesign color='green' name="plus" size={25} />
            </TouchableOpacity>

            <View style={{ top: -90, marginLeft: 340 }} >
                <Text style={{ fontSize: 16, fontWeight: '900' }} >$1.99</Text>
            </View>

            <View style={{ borderWidth: 1, borderColor: '#EAEAEA', top: -80 }} ></View>


            <View style={{ borderColor: '#EAEAEA' }} ></View>
            <View style={{ top: -70, marginLeft: -10 }} >
                <Image source={(require("../database/images/products/yumurta.png"))} />
            </View>
            <View style={{ marginLeft: 120, top: -160 }} >
                <Text style={{ fontWeight: '900', fontSize: 16 }} >Egg Chicken Red</Text>
                <Text>4pcs,Price</Text>
            </View>

            <View style={{ top: -150, marginLeft: 170 }} >
                <Text style={{ fontSize: 18 }} >1</Text>
            </View>

            <TouchableOpacity style={{ marginLeft: 350, top: -225, }} >
                <Feather color='gray' name="x" size={25} />
            </TouchableOpacity>



            <TouchableOpacity style={{
                marginLeft: 120,
                borderWidth: 1,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#C8C8C8',
                borderRadius: 10,
                top: -200
            }} >
                <AntDesign name="minus" size={25} />
            </TouchableOpacity>

            <TouchableOpacity style={{
                marginLeft: 200,
                borderWidth: 1,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#C8C8C8',
                borderRadius: 10,
                top: -227
            }} >
                <AntDesign color='green' name="plus" size={25} />
            </TouchableOpacity>

            <View style={{ top: -90, marginLeft: 340 }} >
                <Text style={{ fontSize: 16, fontWeight: '900' }} >$3.00</Text>
            </View>

            <View style={{ top: -250, marginLeft: 340 }} >
                <Text style={{ fontSize: 16, fontWeight: '900' }} >$4.99</Text>
            </View>

            <View style={{ borderWidth: 1, borderColor: '#EAEAEA', top: -230 }} ></View>


            <View style={{ borderColor: '#EAEAEA', }} ></View>
            <View style={{ top: -210, marginLeft: 10 }} >
                <Image source={(require("../database/images/products/muz.png"))} />
            </View>
            <View style={{ marginLeft: 125, top: -280 }} >
                <Text style={{ fontWeight: '900', fontSize: 16 }} >Organic Bananas</Text>
                <Text>12kg,Price</Text>
            </View>

            <View style={{ top: -260, marginLeft: 170 }} >
                <Text style={{ fontSize: 18 }} >1</Text>
            </View>

            <TouchableOpacity style={{ marginLeft: 350, top: -345, }} >
                <Feather color='gray' name="x" size={25} />
            </TouchableOpacity>



            <TouchableOpacity style={{
                marginLeft: 120,
                borderWidth: 1,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#C8C8C8',
                borderRadius: 10,
                top: -310
            }} >
                <AntDesign name="minus" size={25} />
            </TouchableOpacity>

            <TouchableOpacity style={{
                marginLeft: 200,
                borderWidth: 1,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#C8C8C8',
                borderRadius: 10,
                top: -337
            }} >
                <AntDesign color='green' name="plus" size={25} />
            </TouchableOpacity>

            <View style={{ borderWidth: 1, borderColor: '#EAEAEA', top: -320 }} ></View>



            <View style={{ top: -240, marginLeft: 340 }} >
                <Text style={{ fontSize: 16, fontWeight: '900' }} >$2.99</Text>
            </View>



            <View style={{ borderColor: '#EAEAEA', }} ></View>
            <View style={{ top: -330, marginLeft: 10 }} >
                <Image source={(require("../database/images/products/patates.png"))} />
            </View>
            <View style={{ marginLeft: 125, top: -400 }} >
                <Text style={{ fontWeight: '900', fontSize: 16 }} >Ginger</Text>
                <Text>250mg,Price</Text>
            </View>

            <View style={{ top: -385, marginLeft: 170 }} >
                <Text style={{ fontSize: 18 }} >1</Text>
            </View>

            <TouchableOpacity style={{ marginLeft: 350, top: -465, }} >
                <Feather color='gray' name="x" size={25} />
            </TouchableOpacity>



            <TouchableOpacity style={{
                marginLeft: 120,
                borderWidth: 1,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#C8C8C8',
                borderRadius: 10,
                top: -435
            }} >
                <AntDesign name="minus" size={25} />
            </TouchableOpacity>

            <TouchableOpacity style={{
                marginLeft: 200,
                borderWidth: 1,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#C8C8C8',
                borderRadius: 10,
                top: -463
            }} >
                <AntDesign color='green' name="plus" size={25} />
            </TouchableOpacity>

            <View style={{ top: -450, width: 300, marginLeft: 50, }} >
                <Button color='#67CB99' title="Go to Checkout" />
            </View>

            <View style={{ top: -477, marginLeft: 280, backgroundColor: 'green', width: 60, borderRadius: 10 }} >
                <Text style={{ color: 'white', textAlign: 'center' }} >$12.96</Text>
            </View>

            <View style={{ alignItems: 'center', width: '80%', paddingVertical: 15, margin: 10,position:'absolute',top:650,backgroundColor:'white',width:390 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }} >
                        <TouchableOpacity style={{ marginLeft: -30 }} >
                            <Entypo name="shop" size={20} />
                            <Text style={{ marginLeft: -10 }} >Shop</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("Explore") }  style={{ marginLeft: 10 }} >
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

export default Basket;