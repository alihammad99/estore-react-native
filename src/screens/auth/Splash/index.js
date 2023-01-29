import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import Button from "../../../components/Button";
import { styles } from "./styles";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../../assets/splash.png")}
      />
      <Text style={styles.title}>
        You’ll Find
        <Text style={styles.innerTitle}>All you need</Text>
        Here!
      </Text>
      <Button title="Sign Up" />
      <Pressable hitSlop={2}>
        <Text style={styles.Login}>Log In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
