import React from "react";
import { View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/screens/Home";
import MyCart from "./components/screens/MyCart";
import ProductInfo from "./components/screens/ProductInfo";
import Detail from "./components/screens/Detail";
import Explore from "./components/screens/Explore";
import Bevarages from "./components/screens/Bevarages";
import Sign from "./components/screens/Sign";
import Number from "./components/screens/number";
import Veri from "./components/screens/Veri";
import Harita from "./components/screens/Harita";
import Login from "./components/screens/Login";
import SignUp from "./components/screens/SignUp";
import Basket from "./components/screens/Basket";
import Favorite from "./components/screens/Favorite";
import Egg from "./components/screens/Egg";



const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Bevarages" component={Bevarages} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Number" component={Number} />
        <Stack.Screen name="Veri" component={Veri} />
        <Stack.Screen name="Harita" component={Harita} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Basket" component={Basket} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Egg" component={Egg} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;