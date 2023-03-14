import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";



export default function Header(navigation) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("home")}
      style={styles.header}
    >
      <Image
        style={styles.tinyLogo}
        source={require("../assets/dasboas.png")}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 54,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 156,
    height: 58,
    resizeMode: 'contain'
  },
});
