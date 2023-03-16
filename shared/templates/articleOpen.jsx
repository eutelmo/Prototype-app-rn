import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Pub from "../pub";

export default function ArticleOpen(props) {
  return (
    <ScrollView>
      <Text style={styles.title}>{props.title}</Text>
      <Image style={styles.Image} src={props.image} />
      <View style={styles.readDateBox}>
        <Text style={styles.readDate}>Leitura: {props.read}min</Text>
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

const styles = StyleSheet.create({
  title: {
    fontFamily: "BoldFont",
    fontSize: 26,
    marginBottom: 16,
  },
  Image: {
    width: 375,
    height: 375,
    resizeMode: "cover",
    marginBottom: 10,
  },
  readDateBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#949494",
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  readDate: {
    color: "#949494",
    marginBottom: 10,
  },
  info: {
    fontSize: 20,
    marginBottom: 26,
  },
  body: {
    fontSize: 16,
    marginBottom: 50,
  },
});
