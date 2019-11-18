import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { View, Text, StyleSheet } from "react-native";
import { PRIMARY_COLOR } from "../../constants";

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    this.dismiss();
  }

  dismiss = () => {
    Navigation.dismissAllModals();
  };

  goToPaymentScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: "PaymentScreen",
        passProps: {
          text: "Método de pago"
        },
        options: {
          topBar: {
            title: {
              text: "Método de pago",
              color: "white"
            },
            background: {
              color: PRIMARY_COLOR
            },
            backButton: { color: "white" }
          }
        }
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 8,
            borderRadius: 5,
            marginVertical: 4
          }}
        >
          <Text style={styles.title}>Nombre:</Text>
          <Text style={styles.description}>Jesus Arturo Mata Galván</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 8,
            borderRadius: 5,
            marginVertical: 4
          }}
        >
          <Text style={styles.title}>Número de control:</Text>
          <Text style={styles.description}>E11020913</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 8,
            borderRadius: 5,
            marginVertical: 4
          }}
        >
          <Text style={styles.title}>Semestre</Text>
          <Text style={styles.description}>6</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 8,
            borderRadius: 5,
            marginVertical: 4
          }}
        >
          <Text style={styles.title}>Grupo</Text>
          <Text style={styles.description}>C</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 8,
            borderRadius: 5,
            marginVertical: 4
          }}
        >
          <Text style={styles.title}>Médodo de pago</Text>
          <Text style={styles.description} >
            ***4688
          </Text>
        </View>
        <Text onPress={this.goToPaymentScreen} style={{color:PRIMARY_COLOR,alignSelf:"flex-end",marginHorizontal:8}}>Cambiar método de pago</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
    backgroundColor: "#F4F4F4"
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
