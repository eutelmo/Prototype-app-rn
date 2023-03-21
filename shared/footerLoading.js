import React from "react";
import {
  ActivityIndicator,
} from "react-native";

import { globalStyles } from "../styles/global";

export default function FooterLoading({ Loading }) {
  if (!Loading) return null;

  return (
    <ActivityIndicator
      style={globalStyles.loading}
      size="large"
      color="#00ff00"
    />
  );
}
