import React from "react";
import { Image, StyleSheet } from "react-native";

const CBTCBTISLogo = () => {
  return (
    <Image
      resizeMode="contain"
      source={require("../../assets/images/cbtis_logo.png")}
      style={styles.component}
    />
  );
};

export default CBTCBTISLogo;

const styles = StyleSheet.create({
  component: { width: "100%", height: "50%", alignSelf: "center" }
});
