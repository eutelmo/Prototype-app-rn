import React from "react";
import {
  ScrollView,
} from "react-native";

import { globalStyles } from "../styles/global";


export default function DicasOpen({props}) {
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