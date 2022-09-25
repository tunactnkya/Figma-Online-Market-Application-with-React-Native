import React from "react";
import { Text, View, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesing from 'react-native-vector-icons/AntDesign'

function Detail() {
    return (
        <ScrollView>
            <View>
                <View style={{marginLeft:355,top:20}} >
                <AntDesing name="upload" size={20} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 70, backgroundColor: '#E1ECE6' }} >
                    <Image source={(require("../database/images/products/elma2.png"))} />
                </View>
                <View style={{ marginTop: 20 }} >
                    <Text style={{ fontSize: 27, fontWeight: 'bold' }} >Naturel Red Apple</Text>
                    <Text style={{ margin: 5 }} >1kg,Priceg</Text>
                    <View style={{ marginLeft: 350, top: -50 }} >
                        <MaterialIcons name="favorite-border" size={25} />
                    </View>


                    <View style={{ flexDirection: 'row', }} >
                        <View >
                            <TouchableOpacity>
                                <AntDesing name="minus" size={20} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ padding: 2 }} >
                            <Text style={{ borderWidth: 1, borderRadius: 5, padding: 10, top: -10, textAlign: 'center' }} >1</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <AntDesing color='green' name="plus" size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginLeft: 300, top: -50 }} >
                        <Text style={{ fontWeight: '900', fontSize: 25 }} >$4.99</Text>
                    </View>

                    <View >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }} >Product Detail</Text>
                        <View style={{ marginLeft: 350, top: -30 }} >
                            <AntDesing name="down" size={20} />
                        </View>
                        <Text style={{ fontWeight: '300', top: -20 }} >Apples Are Nuttirituos Apples May be Good For Weight Loss.
                            Apples May Be Good For Your Heart.As Part Of A Heatful.And Variet Diet.
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, top: -15 }} >Nutritions</Text>
                        <Text style={{ marginRight: -160, top: 5 }} >100gr</Text>
                        <View style={{ top: 5, marginRight: 20 }} >
                            <AntDesing name="right" size={20} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10, top: -15 }} >Review</Text>
                        <View style={{ top: 5, marginRight: 20 }} >
                            <AntDesing name="right" size={20} />
                        </View>
                    </View>

                    <View style={{ marginLeft: 280, top: -44 }} >
                        <AntDesing color='orange' name="star" size={20} />
                    </View>

                    <View style={{ marginLeft: 253, top: -64 }} >
                        <AntDesing color='orange' name="star" size={20} />
                    </View>

                    <View style={{ marginLeft: 223, top: -84 }} >
                        <AntDesing color='orange' name="star" size={20} />
                    </View>

                    <View style={{ marginLeft: 195, top: -105 }} >
                        <AntDesing color='orange' name="star" size={20} />
                    </View>

                    <View style={{ marginLeft: 310, top: -125 }} >
                        <AntDesing color='orange' name="star" size={20} />
                    </View>

                    <View style={{ top: -90,marginLeft:30,marginRight:30,marginTop:10, }} >
                        <Button  color='#67CB99' title="Add To Basket" />
                    </View>




                </View>
            </View>
        </ScrollView>

    )
}

export default Detail;