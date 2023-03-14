import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Pub300x300() {
  const pubOpen = () => {
    //Do a function when click on PubBox
    console.log("pub");
  };

  return (
    <TouchableOpacity onPress={() => pubOpen()}>
      <View style={styles.pubContainer}>
        <View style={styles.pubContent}>
          <Text>Pub</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pubContainer: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  pubContent: {
    width: 300,
    height: 300,
    backgroundColor: "#E7E6E7",
    alignItems: "center",
    justifyContent: "center",
    
  },
});
