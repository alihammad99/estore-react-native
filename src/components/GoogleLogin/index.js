import React, { memo, useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Image } from "react-native";
import colors from "../../utils/colors";
import { styles } from "./styles";
const GoogleLogin = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Image
        style={{ height: 28, width: 28 }}
        source={require("../../assets/google.png")}
      />
    </TouchableOpacity>
  );
};
export default memo(GoogleLogin);
