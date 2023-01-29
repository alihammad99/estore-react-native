import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Image } from "react-native";
import colors from "../../utils/colors";
import { styles } from "./styles";
const Input = ({ label, placeholder, isPassword }) => {
  const [hideText, setHideText] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.gray}
          style={styles.input}
          secureTextEntry={isPassword && hideText}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setHideText(!hideText)}>
            {hideText ? (
              <Image
                style={{ width: 24, height: 24, marginRight: 16 }}
                source={require("../../assets/eye.png")}
              />
            ) : (
              <Image
                style={{ width: 24, height: 24, marginRight: 16 }}
                source={require("../../assets/eye_closed.png")}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default Input;
