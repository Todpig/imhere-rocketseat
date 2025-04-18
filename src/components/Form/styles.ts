import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fdfcfe",
    padding: 16,
    fontSize: 16,
    alignSelf: "center",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
    alignItems: "center",
  },
});
