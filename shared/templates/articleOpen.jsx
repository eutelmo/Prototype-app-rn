import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import RenderHtml from "react-native-render-html";

import { globalStyles } from "../../styles/global";

import Pub from "../pub";

export default function ArticleOpen(props) {
  console.log(props.tags);

  const source = {
    html: `${props.body}`,
  };

  const TabStyles = {
    body: {
      fontSize: 16,
      marginBottom: 50,
    },
    a: {
      color: "#1F1F1F",
      fontWeight: "bold",

      textDecorationLine: "underline",
      textDecorationStyle: "solid",
      textDecorationColor: "#06EA80",
    },
  };

  return (
    <>
      <ScrollView style={globalStyles.skContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Image style={styles.Image} src={props.image} />
        <View style={styles.readDateBox}>
          <Text style={styles.readDate}>Leitura: {props.read}min</Text>
          <Text style={styles.readDate}>{props.date}</Text>
        </View>
        <Text style={styles.info}>{props.description}</Text>
        {/* <Text style={styles.body}>{props.body}</Text> */}
        <RenderHtml tagsStyles={(styles.body, TabStyles)} source={source} />

        {props.tags == 0 ? (
          <Text>no Tags</Text>
        ) : (
          <View style={styles.tagsBody}>
            <Text style={styles.tagLabel}>tags: </Text>
            {/* {props.tags.map((item) => {
              <TouchableOpacity onPress={() => console.log("tag")}>
                <Text style={styles.tags}>{item.slug}</Text>
              </TouchableOpacity>;
            })} */}
          </View>
        )}

        <Pub />
        <Pub />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "BoldFont",
    fontSize: 26,
    marginBottom: 16,
  },
  Image: {
    width: "100%",
    height: 375,
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
  tagsBody: {
    flexDirection: "row",
  },
  tagLabel: {
    fontSize: 16,
    color: "#CBCBCB",
  },
  tags: {
    fontSize: 16,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#06EA80",
    color: "#06EA80",
  },
});
