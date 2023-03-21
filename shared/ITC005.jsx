import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import { FadeLoading } from "react-native-fade-loading";

export default function ITC005(props) {
  const Open = () => {
    //Do a function when click on PubBox
    console.log("Open");
  };
  const [loading, setLoading] = useState(false);

  const image = { uri: props.img };

  return (
    <>
      {loading ? (
        <FadeLoading
          primaryColor="gray"
          secondaryColor="lightgray"
          duration={5000}
          style={{ width: 348, height: 189 }}
        />
      ) : (
        <TouchableOpacity onPress={props.onPress}>
          <ImageBackground source={image} style={styles.imageBackground}>
            <View style={styles.textBox}>
              <Text style={styles.category}>{props.category}</Text>
              <Text style={styles.title}>{props.title}</Text>
              <View style={styles.dateReadBox}>
                <Text style={styles.infos}>{props.date}</Text>
                <Text style={styles.infos}>Read: {props.readTime}min</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: 189,
    marginBottom: 10,
  },
  textBox: {
    height: "100%",
    padding: 20,
    justifyContent: "flex-end",
  },
  category: {
    fontFamily: "SemiBoldFont",
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: 1,
    color: "#FFFFFF",
  },
  title: {
    fontFamily: "BoldFont",
    color: "#FFFFFF",
  },

  dateReadBox: {
    gap: 10,
    flexDirection: "row",
  },

  infos: {
    color: "#FFFFFF",
    opacity: 0.5,
  },
});
