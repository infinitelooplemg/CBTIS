import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const ColorButton = ({ backgroundColor, textColor, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor: backgroundColor }]}>
        <Text style={[styles.buttonTitle, { color: textColor }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    height: 44,
    justifyContent: "center",
    paddingHorizontal: 16
  },
  buttonTitle: { fontSize: 15, fontWeight: "600" }
});

export default ColorButton;
