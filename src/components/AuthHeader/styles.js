import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 18.5,
    height: 18.5
  },
  title: {
    fontSize: 26,
    fontWeight: "500",
    color: colors.primary,
    marginLeft: 16
  }
});
