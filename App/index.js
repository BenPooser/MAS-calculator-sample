import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Row from "./components/Row";
import Button from "./components/Button";
import Calculator from "./components/Calculator";
import History from "./components/History";
import calculator, { initialState } from "./util/calculator";

const Stack = createStackNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Calculator" component={Calculator} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
