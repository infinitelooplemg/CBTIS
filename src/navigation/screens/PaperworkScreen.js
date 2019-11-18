import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { SafeAreaView, StyleSheet } from "react-native";
import PapwerworkList from "../../components/PaperworkScreen/PapwerworkLIst";
import { presentProfileScreen } from "..";

class PaperworkScreen extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    presentProfileScreen()
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PapwerworkList />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F4F4" }
});

export default PaperworkScreen;
