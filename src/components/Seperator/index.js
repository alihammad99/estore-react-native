import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Image } from "react-native";
import colors from "../../utils/colors";
import { styles } from "./styles";
const Seperator = ({ label, placeholder, isPassword, text }) => {
  const [hideText, setHideText] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};
export default Seperator;
