import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { globalStyles } from "../styles/global";

export default function Dicas() {
  return (
    <ScrollView style={globalStyles.skContainer}>
      <Text>Boas Dicas</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});