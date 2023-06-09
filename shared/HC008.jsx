import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

import { FadeLoading } from "react-native-fade-loading";
import moment from "moment";

export default function HC008(props) {
  const date = props.date;
  const formattedDate = moment(date, "YYYY/MM/DD").format("DD/MM/YYYY");

  const [loading, setLoading] = useState(false);

  return (
    <>
     
        <TouchableOpacity style={styles.hc008} onPress={props.onPress}>
          <Image style={styles.imgBox} src={props.img} />
          <View style={styles.textBox}>
            <Text style={styles.category}>{props.category}</Text>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.dateReadBox}>
              <Text style={styles.infos}>{formattedDate}</Text>
              <Text style={styles.infos}>Read: {props.readTime}min</Text>
            </View>
          </View>
        </TouchableOpacity>
     
    </>
  );
}

const styles = StyleSheet.create({
  hc008: {
    flex: 3,
    marginBottom: 10,
    width: "100%",
  },
  imgBox: {
    width: "100%",
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
