import React, { memo } from "react";
import { Pressable, TouchableOpacity, Text, Alert } from "react-native";
import { styles } from "../Button/styles";

const Button = ({ title }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => Alert.alert("Clicked!")}
      style={styles.button}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);
