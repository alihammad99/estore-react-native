import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    borderRadius: 14,
    backgroundColor: colors.darkGray,
    width: "46%",
    alignItems: "center",
    marginTop: 16,
    alignSelf: "center"
  },
  line: { height: 1, flex: 1, backgroundColor: colors.lightGray },
  text: { color: colors.primary, fontWeight: "500", margin: 8 }
});
