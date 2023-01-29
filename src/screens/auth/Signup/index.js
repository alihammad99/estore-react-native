import React, { useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import GoogleLogin from "../../../components/GoogleLogin";
import Input from "../../../components/Input";
import Seperator from "../../../components/Seperator";
import { styles } from "./styles";

const Signup = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <AuthHeader title="Signup" />
      <Input placeholder="e.g Ali Hammad" label="Name" />
      <Input placeholder="E-mail" label="Email" />
      <Input isPassword placeholder="*******" label="Password" />
      <View style={{ flexDirection: "row" }}>
        <Checkbox checked={checked} onCheck={() => setChecked(!checked)} />
        <Text style={styles.checkBoxText}>
          {"  "}I agree with <Text style={styles.bold}>Terms</Text> &{" "}
          <Text style={styles.bold}>Privacy</Text>
        </Text>
      </View>
      <View style={styles.button}>
        <Button title="Sign Up" />
      </View>
      <Seperator text="Or sign up with" />
      <GoogleLogin />
    </View>
  );
};

export default Signup;
