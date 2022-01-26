import { StatusBar } from "expo-status-bar";

import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { db, auth } from "./firebase";
import { Text, View } from "react-native";
import MapScreen from "./screens/MapScreen.js";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import FirebaseTesting from "./Components/FirebaseTesting";
import Chat from "./Components/Chat";
import SingleGroupPage from "./Components/SingleGroupPage";
import * as Location from "expo-location";
import UserAccount from "./Components/UserAccount";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    // const autoLocationUpdate = setInterval(() => {
    //   (async () => {
    //     let { status } = await Location.requestForegroundPermissionsAsync();
    //     if (status !== "granted") {
    //       setErrorMsg("Location permissions not granted");
    //     }
    //     let location = await Location.getCurrentPositionAsync({});
    //     if (location) {
    //       const userDetails = doc(db, "users", auth.currentUser.uid);
    //       await updateDoc(userDetails, {
    //         coords: {
    //           lat: location.coords.latitude,
    //           lng: location.coords.longitude,
    //         },
    //       });
    //     }
    //   })();
    // }, 30000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="FirebaseTesting" component={FirebaseTesting} />
        <Stack.Screen name="UserAccount" component={UserAccount} />

        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Group" component={SingleGroupPage} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
