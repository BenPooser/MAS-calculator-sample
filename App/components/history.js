import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1c6c7",
    justifyContent: "flex-end",
  },
  value: {
    color: "#333330",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});
export default class History extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>{/* add history contents here */}</SafeAreaView>
      </View>
    );
  }
}
