import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { FadeLoading } from "react-native-fade-loading";

import moment from "moment";

export default function ITC005(props) {
  const date = props.date;
  const formattedDate = moment(date, "YYYY/MM/DD").format("DD/MM/YYYY");

  const [loading, setLoading] = useState(false);

  const image = { uri: props.img };

  return (
    <>
      <TouchableOpacity onPress={props.onPress}>
        <ImageBackground source={image} style={styles.imageBackground}>
          <LinearGradient
            colors={["#000511", "transparent"]}
            style={styles.gradient}
          />
          <View style={styles.textBox}>
            <Text style={styles.category}>{props.category}</Text>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.dateReadBox}>
              <Text style={styles.infos}>{formattedDate}</Text>
              <Text style={styles.infos}>Read: {props.readTime}min</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: 189,
    marginBottom: 10,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 100,
    zIndex: 0,
    transform: [{ rotate: "180deg" }],
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
