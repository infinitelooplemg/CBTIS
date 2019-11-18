import React from "react";
import { StyleSheet, Text } from "react-native";
import { PRIMARY_COLOR } from "../../constants";

export default LoginScreenFooter = ({ onPress }) => {
  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText}>¿No sabes cual es tu contraseña? </Text>
      <Text style={styles.buttonText} onPress={onPress}>
        Más Información
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    marginTop: 4,
    alignSelf: "center",
    marginBottom: 4
  },
  titleText: {
    fontSize: 16,
    color: "gray"
  },
  buttonText: {
    color: PRIMARY_COLOR,
    fontSize: 16
  }
});
