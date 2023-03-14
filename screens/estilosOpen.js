import React from "react";
import {
  ScrollView,
} from "react-native";

import { globalStyles } from "../styles/global";


export default function EstilosOpen({props}) {
  return (
    <ScrollView style={globalStyles.skContainer}>
      <articleOpen 
        title={"title"}
        image={"urlImage"}
        read={'read'}
        date={'date'}
        description={'description'}
        body={'body'}
        tags={'tags'}
      />
    </ScrollView>
  );
}