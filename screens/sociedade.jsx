import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import { globalStyles } from "../styles/global";
import { APP_NAME, API_TOKEN, API_KEY } from "@env";

import HC008 from "../shared/HC008";

export default function Sociedade() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  return (
    <ScrollView style={globalStyles.skContainer}>
      <Text>Sociedade</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
