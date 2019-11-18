import React, { Component } from "react";
import { CreditCardInput } from "react-native-credit-card-input";
import { View, Text } from "react-native";
import ColorButton from "../../components/common/ColorButton";
import { PRIMARY_COLOR } from "../../constants";
import { Navigation } from "react-native-navigation";

class PaymentScreen extends Component {
  dismiss = () => {
    Navigation.popToRoot(this.props.componentId)
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginVertical: 8,
          marginHorizontal: 16,
          backgroundColor: "white"
        }}
      >
        <CreditCardInput />
        <ColorButton
          title="Guardar"
          textColor="white"
          backgroundColor={PRIMARY_COLOR}
          onPress={this.dismiss}
        ></ColorButton>
      </View>
    );
  }
}

export default PaymentScreen;
