import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native'

export default function StackHeader({ navigation, ...props }) {
    const route = useRoute();
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="arrow-back"
        size={30}
        onPress={navigation.goBack}
        style={styles.icon}
      />
      <View>
        <Text style={styles.headerText}>{route.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#06EA80",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
    bottom: 20,
    color: "#06EA80",
  },
});
