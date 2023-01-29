import React, { memo, useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Image } from "react-native";
import colors from "../../utils/colors";
import { styles } from "./styles";
const Input = ({ checked, onCheck }) => {
  const [hideText, setHideText] = useState(true);

  return (
    <TouchableOpacity onPress={onCheck} style={styles.container}>
      <View style={styles.innerContainer}>
        {checked && (
          <Image
            style={styles.icon}
            source={require("../../assets/check.png")}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
export default memo(Input);
