import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
  skContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,

  },
  TextRegular: {
    fontFamily: "RegularFont",
  },
  TextSemiBold: {
    fontFamily: "SemiBoldFont",
  },
  TextBold: {
    fontFamily: "BoldFont",
  },

  titleCategory: {
    fontFamily: "BoldFont",
    fontSize: 26,
    paddingBottom: 20,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#06EA80",
  },

  loading: {
    justifyContent: "center",
    alignItems: "center",
    padding: "10%",
  },
});
