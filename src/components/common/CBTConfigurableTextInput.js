import React from "react";
import { StyleSheet, TextInput } from "react-native";

const CBTConfigurableTextInput = ({
  placeholder,
  value,
  onChangeText,
  isPasswordField
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.component}
      onChangeText={onChangeText}
      value={value}
      secureTextEntry={isPasswordField}
    />
  );
};

const styles = StyleSheet.create({
  component: {
    padding: 8,
    height: 44,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 4
  }
});

export default CBTConfigurableTextInput;
