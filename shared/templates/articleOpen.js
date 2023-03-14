import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-navigation";

import HC008 from "../HC008";
import Pub from "../../shared/pub";

export default function articleOpen({ props }) {
  return (
    <ScrollView>
      <Text style={styles.titles}>{props.title}</Text>
      <Image style={styles.Image} source={{ uri: props.image }} />
      <View style={styles.readDateBox}>
        <Text style={styles.readDate}>Leitura: {props.read}</Text>
        <Text style={styles.readDate}>{props.date}</Text>
      </View>
      <Text style={styles.info}>{props.description}</Text>
      <Text style={styles.body}>{props.body}</Text>

      {!!props.tags ? (
        <Text></Text>
      ) : (
        <View style={styles.tagsBody}>
          <Image style={styles.tagIcon} source={require("")} />
          <Text>tags: </Text>
          <FlatList
            data={props.tags}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => console.log("tag")}>
                <Text style={styles.tags}>{item.tag}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      <Pub />
      <Pub />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
