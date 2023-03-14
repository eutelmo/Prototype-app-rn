import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import HC008 from '../HC008';

export default function Categories({ props }) {
  return (
    <ScrollView>
      <Text>{props.category}</Text>
      {/* <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
