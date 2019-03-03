import React, { Component } from "react";
import Header from "../components/Header.js";
import SummnorTextInput from "../components/Textinput.js";
import { StyleSheet, View } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <Header />
        <SummnorTextInput />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});
