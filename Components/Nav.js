import React, { useState } from "react";
import { ButtonGroup, Button } from "react-native-elements";
import { Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import MapScreen from "../screens/MapScreen";

export default () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Map"
      onPress={() => {
        navigation.navigate("Root", { screen: "MapScreen" });
      }}
    />
  );
};

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },
});
