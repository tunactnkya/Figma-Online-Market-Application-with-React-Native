import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'



const ProductInfo = ({navigation}) => {
    return (
        <ScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 40, margin: 20 }} >
                <Image source={require("../database/images/products/Vector.png")} />
                <View style={{ margin: 10, flexDirection: 'row' }} >
                    <MaterialIcons name="place" size={25} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Dhaka,Banassre</Text>
                </View>
                <View style={{ backgroundColor: '#E1ECE6', width: '100%', padding: 10, borderRadius: 30, marginTop: 10, flexDirection: 'row' }} >
                    <AntDesign style={{ top: 12 }} name="search1" size={25} />
                    <TextInput style={{ fontSize: 16 }} placeholder="Search Store" />
                </View>
                <View style={{ margin: 10 }} >
                    <Image source={require("../database/images/products/banner.png")} />
                </View>
                <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 210 }} >
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }} >Exclusive Offer</Text>
                    </View>
                </View>
                <View style={{ top: -35, marginLeft: 300 }} >
                    <View>
                        <Text style={{ fontSize: 16, color: '#67CB99' }} >See All</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }} >
                    <View >
                        <Image style={{ marginRight: 60 }} source={(require("../database/images/products/muz.png"))} />
                        <Text style={{ fontWeight: 'bold', fontSize: 17 }} >Organic Bananas</Text>
                        <Text style={{ margin: 10, marginLeft: 1 }} >7pcs,Priceg</Text>
                        <Text style={{ fontWeight: '800', fontSize: 16, top: 3 }} >$4.99</Text>
                        <TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 10, width: 27, margin: 5, marginLeft: 70, top: -25 }} >
                            <Ionicons color='white' name="add" size={27} />
                        </TouchableOpacity>

                    </View>
                    <View  >
                        <TouchableOpacity onPress={() => navigation.navigate("Detail")} >
                            <Image style={{ marginLeft: 20 }} source={(require("../database/images/products/elma.png"))} />
                            <Text style={{ textAlign: 'center', margin: 20, fontSize: 17, fontWeight: 'bold' }} >Red Apple</Text>
                            <Text style={{ textAlign: 'center', margin: -10 }} >1kg,Priceg</Text>
                            <Text style={{ top: 20, fontWeight: '800', fontSize: 16, marginLeft: 25 }} >$4.99</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 10, width: 27, marginLeft: 100, top: -5 }} >
                            <Ionicons color='white' name="add" size={27} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginRight: 210 }} >
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }} >Best Selling</Text>
                    </View>
                </View>
                <View style={{ top: -35, marginLeft: 300 }} >
                    <View>
                        <Text style={{ fontSize: 16, color: '#67CB99' }} >See All</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }} >
                    <View >
                        <Image style={{ marginRight: 60 }} source={(require("../database/images/products/biber.png"))} />
                        <Text style={{ fontWeight: 'bold', fontSize: 17 }} >Organic Bananas</Text>
                        <Text style={{ margin: 10, marginLeft: 1 }} >7pcs,Priceg</Text>
                        <Text style={{ fontWeight: '800', fontSize: 16, top: 3 }} >$4.99</Text>
                        <TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 10, width: 27, margin: 5, marginLeft: 70, top: -25 }} >
                            <Ionicons color='white' name="add" size={27} />
                        </TouchableOpacity>

                    </View>
                    <View  >
                        <Image style={{ marginLeft: 20 }} source={(require("../database/images/products/patates.png"))} />
                        <Text style={{ textAlign: 'center', margin: 20, fontSize: 17, fontWeight: 'bold' }} >Red Apple</Text>
                        <Text style={{ textAlign: 'center', margin: -10 }} >1kg,Priceg</Text>
                        <Text style={{ top: 20, fontWeight: '800', fontSize: 16, marginLeft: 25 }} >$4.99</Text>
                        <TouchableOpacity style={{ backgroundColor: 'green', borderRadius: 10, width: 27, marginLeft: 100, top: -5 }} >
                            <Ionicons color='white' name="add" size={27} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ alignItems: 'center', width: '80%', paddingVertical: 15, margin: 10, }} >
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

                        <TouchableOpacity  onPress={() => navigation.navigate("Favorite")} style={{ marginRight: 10 }} >
                            <MaterialIcons name="favorite-border" size={20} />
                            <Text style={{ marginLeft: -5 }} >Favorite</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginRight: -20 }} >
                            <AntDesign name="user" size={20} />
                            <Text style={{ marginLeft: -20 }} >Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>






            </View>
        </ScrollView>

    )
}

export default ProductInfo;