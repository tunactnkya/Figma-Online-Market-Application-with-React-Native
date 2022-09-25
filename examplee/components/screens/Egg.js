import React from "react";
import { SafeAreaView, Text, TextInput, View ,Image, ScrollView,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function Egg({navigation}) {
    return (

        <SafeAreaView >
            <View style={{ justifyContent: 'center', alignItems: 'center', top: 30, backgroundColor: '#E6E3E2', borderRadius: 20, width: 330 }} >
                <TextInput style={{ marginRight: 210 }} placeholder="Search" />
            </View>
            <View style={{ marginLeft: 10, top: -5 }} >
                <AntDesign name="search1" size={20} />
            </View>
            <View style={{ top: -25, marginLeft: 350 }} >
                <AntDesign name="swap" size={20} />
            </View>
            

      <View style={{borderWidth:1,width:150,height:250,top:25,borderRadius:20,marginLeft:20,borderColor:'#E1E0E0'}} >
        <Image  source={require("../database/images/products/yumurta.png")}/>
      </View>
      <View style={{top:-110,}} >
        <Text style={{fontWeight:'900',marginLeft:40}} >Egg Chicken Red</Text>
      </View>
      <View style={{top:-110,marginLeft:40}} >
        <Text>4pcs,Price</Text>
      </View>
      <View style={{top:-60,marginLeft:40}} >
        <Text style={{fontWeight:'900',fontSize:16}} >$1.99</Text>
      </View>
      <View style={{top:-85,marginLeft:120,backgroundColor:'#67CB99',width:30,height:30,justifyContent:'center',alignItems:'center',borderRadius:10}} >
        <AntDesign name="plus" size={20} color='white' />
      </View>

      
      <View style={{borderWidth:1,width:150,height:250,top:-315,borderRadius:20,marginLeft:200,borderColor:'#E1E0E0'}} >
        <View style={{top:20}} >
        <Image  source={require("../database/images/products/yumurta1.png")}/>
        </View>
      </View>
      <View style={{top:-450,marginLeft:175}} >
        <Text style={{fontWeight:'900',marginLeft:40}} >Egg Chicken White</Text>
      </View>
      <View style={{top:-450,marginLeft:215}} >
        <Text>180g,Price</Text>
      </View>
      <View style={{top:-400,marginLeft:220}} >
        <Text style={{fontWeight:'900',fontSize:16}} >$1.50</Text>
      </View>
      <View style={{top:-425,marginLeft:300,backgroundColor:'#67CB99',width:30,height:30,justifyContent:'center',alignItems:'center',borderRadius:10}} >
        <AntDesign name="plus" size={20} color='white' />
      </View>

      <View style={{borderWidth:1,width:150,height:250,top:-385,borderRadius:20,marginLeft:20,borderColor:'#E1E0E0'}} >
        <View style={{top:10,justifyContent:'center',alignItems:'center'}} >
        <Image  source={require("../database/images/products/makarna1.png")}/>
        </View>
      </View>
      <View style={{top:-520,marginLeft:23}} >
        <Text style={{fontWeight:'900',marginLeft:10}} >Egg Pasta</Text>
      </View>
      <View style={{top:-515,marginLeft:30}} >
        <Text>30gm,Price</Text>
      </View>
      <View style={{top:-480,marginLeft:35}} >
        <Text style={{fontWeight:'900',fontSize:16}} >$15.99</Text>
      </View>
      <View style={{top:-503,marginLeft:120,backgroundColor:'#67CB99',width:30,height:30,justifyContent:'center',alignItems:'center',borderRadius:10}} >
        <AntDesign name="plus" size={20} color='white' />
      </View>

      <View style={{borderWidth:1,width:150,height:250,top:-725,borderRadius:20,marginLeft:210,borderColor:'#E1E0E0'}} >
        <View style={{top:10,justifyContent:'center',alignItems:'center'}} >
        <Image  source={require("../database/images/products/noddle.png")}/>
        </View>
      </View>
      <View style={{top:-860,marginLeft:220}} >
        <Text style={{fontWeight:'900',marginLeft:10}} >Egg Noddles</Text>
      </View>
      <View style={{top:-855,marginLeft:230}} >
        <Text>2L,Price</Text>
      </View>
      <View style={{top:-820,marginLeft:225}} >
        <Text style={{fontWeight:'900',fontSize:16}} >$15.99</Text>
      </View>
      <View style={{top:-844,marginLeft:310,backgroundColor:'#67CB99',width:30,height:30,justifyContent:'center',alignItems:'center',borderRadius:10}} >
        <AntDesign name="plus" size={20} color='white' />
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
        </SafeAreaView>
   
    )
}

export default Egg;