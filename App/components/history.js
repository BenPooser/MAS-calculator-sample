import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { db } from "../util/config";
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
  state = {
    records: [],
  };
  componentDidMount() {
    db.ref("/records").on("value", (dataSnapshot) => {
      let data = dataSnapshot.val() ? dataSnapshot.val() : {};
      let records = Object.values(data);
      this.setState({
        records,
      });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>
            {this.state.records.map((record) => (
              <Text>{record + "\n"}</Text>
            ))}
          </Text>
        </SafeAreaView>
      </View>
    );
  }
}
