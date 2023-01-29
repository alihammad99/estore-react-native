import React from "react";
import { Pressable, View, Image, Text } from "react-native";
import { styles } from "./styles";

const AuthHeader = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={10} onPress={onBackPress}>
        <Image style={styles.image} source={require("../../assets/back.png")} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;
