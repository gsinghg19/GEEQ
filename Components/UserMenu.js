import { StyleSheet, Text, View } from "react-native";
import React, { useState, useContext } from "react";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../Context/Context";
import { auth } from "../firebase";

export default function UserMenu({}) {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);

  const handleAccountNav = () => {
    navigation.navigate("Home", { user_id: auth.currentUser.uid });
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  const showMenu = () => setVisible(true);

  return (
    <Menu
      visible={visible}
      anchor={
        <Text onPress={showMenu}>
          <Icon
            reverse
            name="log-out-outline"
            type="ionicon"
            color={theme.icon.color}
          />
        </Text>
      }
      onRequestClose={hideMenu}
    >
      {/* <MenuItem onPress={handleAccountNav}>Home</MenuItem> */}
      {/* <MenuDivider /> */}
      <MenuItem onPress={handleSignOut}>Sign out</MenuItem>
    </Menu>
  );
}

const styles = StyleSheet.create({});
