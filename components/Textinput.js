import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default class SummnorTextInput extends Component {
  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput placeholder="検索" style={styles.textInput} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    paddingBottom: 5,
    backgroundColor: "#f1f2f6"
  },
  textInput: {
    height: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderWidth: 1
  }
});
