import { StyleSheet } from "react-native";
import colors from "../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1
  },
  image: {
    width: "100%",
    height: 200
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 54,
    color: colors.black
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: "underline",
    display: "block"
  },
  Login: {
    color: colors.primary,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 24
  }
});
