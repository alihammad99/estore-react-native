import React, { useEffect } from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import Signup from "./screens/auth/Signup";
import Splash from "./screens/auth/Splash";

function App() {
  useEffect(() => {}, []);
  return (
    <SafeAreaView>
      <StatusBar />
      {/* <Splash /> */}
      <Signup />
    </SafeAreaView>
  );
}

export default App;
