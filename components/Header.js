import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header_title}>Get summoners!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
  },
  header_title: {
    fontSize: 30,
    color: "#282828",
    paddingTop: 40,
    backgroundColor: "#00FFFF"
  }
});
