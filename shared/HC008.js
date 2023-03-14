import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

import { FadeLoading } from "react-native-fade-loading";

export default function HC008({ props }) {
  const Open = () => {
    //Do a function when click on PubBox
    console.log("Open");
  };

  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <>
          <FadeLoading
            primaryColor="gray"
            secondaryColor="lightgray"
            duration={5000}
            style={{ width: 348, height: 189 }}
          />

          <FadeLoading
            primaryColor="gray"
            secondaryColor="lightgray"
            duration={5000}
            style={{ width: "30%", height: 16 }}
          />
          <FadeLoading
            primaryColor="gray"
            secondaryColor="lightgray"
            duration={5000}
            style={{ width: 348, height: 26 }}
          />
        </>
      ) : (
        <TouchableOpacity onPress={() => Open()}>
          <Image style={styles.imgBox} source={require(props.img)} />
          <View style={styles.textBox}>
            <Text style={styles.category}>{props.category}</Text>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.dateReadBox}>
              <Text style={styles.infos}>{props.date}</Text>
              <Text style={styles.infos}>Read: {props.readTime}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  imgBox: {
    width: 348,
    height: 189,
  },
  textBox: {
    height: "100%",
    gap: 5,
    marginTop: 5,
  },
  category: {
    fontFamily: "BoldFont",
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: 1,
    color: "#06EA80",
  },
  title: {
    fontFamily: "BoldFont",
    color: "#292929",
  },

  dateReadBox: {
    gap: 10,
    flexDirection: "row",
  },

  infos: {
    color: "#333",
    opacity: 0.5,
  },
});
