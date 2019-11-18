import React, { Component } from "react";
import { StyleSheet, Alert, SafeAreaView } from "react-native";
import CBTCBTISLogo from "../../components/common/CBTCBTISLogo";
import LoginScreenForm from "../../components/LoginScreen/LoginScreenForm";
import { goToPaperworkScreens } from "..";

export default class CBTLoginScreen extends Component {
  state = { email: "", password: "" };

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  handleOnSigninPress = () => {
    goToPaperworkScreens();
  };

  handleOnFooterPress = () => {
    Alert.alert(
      "¿Como puedo obtener mi contrseña?",
      "Acude a las oficinas de control escolar para obtener tu contraseña",
      [{ text: "Ok", onPress: () => console.log("OK Pressed") }],
      { cancelable: true }
    );
  };

  render() {
    const { email, password } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <CBTCBTISLogo />
        <LoginScreenForm
          email={email}
          handleEmailChange={this.handleEmailChange}
          password={password}
          handlePasswordChange={this.handlePasswordChange}
          onFooterPress={this.handleOnFooterPress}
          onSigninPress={this.handleOnSigninPress}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "space-between"
  }
});
