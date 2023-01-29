import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  label: {
    marginVertical: 8,
    color: colors.primary,
    fontWeight: "500"
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: { padding: 16, borderColor: colors.gray, borderRadius: 14, flex: 1 }
});
