import React from "react";
import { View, Text, StyleSheet, Alert, Linking, Platform } from "react-native";

import { PRIMARY_COLOR } from "../../constants";
import RoundedButton from "../common/RoundedButton";

const PaperworkListItem = ({ paperwork }) => {
  onPress = () => {
    Alert.alert(
      "¿Deseas pagar " +
        paperwork.title +
        " por un monto de $" +
        paperwork.price.toFixed(2) +
        " ?",
      "Selecciona un método de pago",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("OK Pressed"),
          style: "cancel"
        },
        {
          text: "Efectivo",
          onPress: () => onCashSelected(),
          style: "default"
        },
        {
          text: "Tarjeta con terminación ***4488",
          onPress: () => onCreditCardSelected(),
          style: "default"
        }
      ],
      { cancelable: true }
    );
  };

  onCreditCardSelected = () => {
    Alert.alert(
      "Se ha realizado la transacción",
      "Te hemos enviado el documento al correo electrónico asociado a tu cuenta"
    );
  };

  onBankSelect = () => {
    const latitude = "19.1432263";
    const longitude = "-96.1381072";
    const label = "Banco Citibanamex Ejército Mexicano";

    const url = Platform.select({
      ios: "maps:" + latitude + "," + longitude + "?q=" + label,
      android: "geo:" + latitude + "," + longitude + "?q=" + label
    });
    Linking.openURL(url);
  };

  onCashSelected = () => {
    Alert.alert(
      "Seleccionaste pago en efectivo",
      "Te hemos enviado el formato de pago al correo electrónico asociado a tu cuenta",
      [
        {
          text: "Muestrame el banco mas cercano",
          onPress: () => onBankSelect(),
          style: "default"
        },
        {
          text: "Ok",
          onPress: () => {},
          style: "default"
        }
      ]
    );
  };

  const { title, description, price } = paperwork;
  return (
    <View style={styles.component}>
      <View style={{ flex: 1, marginEnd: 4 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <RoundedButton
        title={"$ " + price.toFixed(2)}
        textColor="white"
        backgroundColor={PRIMARY_COLOR}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    marginHorizontal: 8,
    padding: 8,
    marginVertical: 4,
    backgroundColor: "white",
    borderRadius: 5,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 17
  },
  description: {
    fontWeight: "normal",
    fontSize: 15
  }
});

export default PaperworkListItem;
