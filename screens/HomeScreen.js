import React, { Component } from "react";
import Header from "../components/Header.js";
import SummnorTextInput from "../components/SummnorTextInput.js";
import { StyleSheet, View, Image } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.flex}>
        <Header />
        <SummnorTextInput />
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/Aatrox.png"
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
});
