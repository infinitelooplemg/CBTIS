import React from "react";
import { View } from "react-native";
import CBTConfigurableTextInput from "../common/CBTConfigurableTextInput";
import ColorButton from "../common/ColorButton";
import { PRIMARY_COLOR } from "../../constants";
import LoginScreenFooter from "./LoginScreenFooter";
const LoginScreenForm = ({
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
  onFooterPress,
  onSigninPress 
}) => {
  return (
    <View>
      <CBTConfigurableTextInput
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Número de Control"
      />
      <CBTConfigurableTextInput
        value={password}
        onChangeText={handlePasswordChange}
        isPasswordField={true}
        placeholder="Contraseña"
      />
      <ColorButton
        title="Iniciar Sesión"
        textColor="white"
        backgroundColor={PRIMARY_COLOR}
        onPress={onSigninPress}
      />
      <LoginScreenFooter onPress={onFooterPress}/>
    </View>
  );
};

export default LoginScreenForm;
