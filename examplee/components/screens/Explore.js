import React from "react";
import { ScrollView, Text, TextInput, View, Image,TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function Explore({navigation}) {
    return (
  
        <View>
            <View style={{ justifyContent: 'center', alignItems: 'center', top: 40 }} >
                <Text style={{ fontSize: 20, fontWeight: 'bold', }} >Find Products</Text>
                <View style={{ backgroundColor: '#DCE8E2', width: '80%', borderRadius: 20, top: 20 }} >
                    <TextInput style={{ marginLeft: 30 }} placeholder="Search Store" />
                </View>
            </View>
            <View style={{ top: 25, marginLeft: 50 }} >
                <AntDesign name="search1" size={20} />
            </View>

            <View style=
                {{
                    borderWidth: 1,
                    borderColor: 'green',
                    borderRadius: 20,
                    marginLeft: 20,
                    backgroundColor: '#D6F2E4',
                    top: 90,
                    width: 140,
                    height: 175,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                <Image source={require("../database/images/products/sebze.png")} />
                <View style={{ top: 15 }} >
                    <Text style={{ fontWeight: 'bold' }} >Frash Fruits & Vegatable</Text>
                </View>
            </View>

            <View style=
                {{
                    borderWidth: 1,
                    borderColor: '#EFB51B',
                    borderRadius: 20,
                    marginLeft: 220,
                    backgroundColor: '#F5E9CA',
                    top: -85,
                    width: 140,
                    height: 175,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                <Image source={require("../database/images/products/zeytinyağı.png")} />
                <View style={{ top: 15 }} >
                    <Text style={{ fontWeight: 'bold' }} >Cooking Oil &         Ghee</Text>
                </View>
            </View>

            <View style=
                {{
                    borderWidth: 1,
                    borderColor: 'green',
                    borderRadius: 20,
                    marginLeft: 20,
                    backgroundColor: '#EFD6F3',
                    top: -67,    
                    width: 140,
                    height: 175,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                <Image source={require("../database/images/products/etbalık.png")} />
                <View style={{ top: 15 }} >
                    <Text style={{ fontWeight: 'bold' }} >Meat & Fish</Text>
                </View>
            </View>

            <View style=
                {{
                    borderWidth: 1,
                    borderColor: 'green',
                    borderRadius: 20,
                    marginLeft: 220,
                    backgroundColor: '#F0D4E0',
                    top: -241,
                    width: 140,
                    height: 175,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                <Image source={require("../database/images/products/mamül.png")} />
                <View style={{ top: 15 }} >
                    <Text style={{ fontWeight: 'bold' }} >Bakery & Snacks</Text>
                </View>
            </View>

            <View style=
                {{
                    borderWidth: 1,
                    borderColor: 'green',
                    borderRadius: 20,
                    marginLeft: 20,
                    backgroundColor: '#EEEFC6',
                    top: -220,
                    width: 140,
                    height: 175,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                    <TouchableOpacity onPress={() => navigation.navigate("Egg")} >
                <Image source={require("../database/images/products/yumurta4.png")} />
                </TouchableOpacity>
                <View style={{ top: 15 }} >
                    <Text style={{ fontWeight: 'bold' }} >Dairy & Eggs</Text>
                </View>
            </View>

            <View style=
                {{
                    borderWidth: 1,
                    borderColor: 'green',
                    borderRadius: 20,
                    marginLeft: 220,
                    backgroundColor: '#CDDFF0',
                    top: -395,
                    width: 140,
                    height: 175,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} >
                    <TouchableOpacity onPress={() => navigation.navigate("Bevarages")} >
                    <Image source={require("../database/images/products/Meşrubat.png")} />
                <View style={{ top: 15 }} >
                    <Text style={{ fontWeight: 'bold' }} >Bevarages</Text>
                </View>
                    </TouchableOpacity>
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







    )
}

export default Explore;