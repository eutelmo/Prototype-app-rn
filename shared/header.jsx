import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Header({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("HOME")}
      style={styles.header}
    >
      <SafeAreaView>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/dasboas.png")}
        />
      </SafeAreaView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
  },
  tinyLogo: {
    width: 100,
    height: 58,
    resizeMode: "contain",
  },
});
