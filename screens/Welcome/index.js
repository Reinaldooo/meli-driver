import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Welcome({ navigation }) {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40%",
        }}
      >
        <Text>Bem-vindo!</Text>
        <Button onPress={() => navigation.navigate("Modal")} title="Login" />
        <Button
          onPress={() => navigation.navigate("Main")}
          title="Ir para a home"
        />
      </View>
    </SafeAreaView>
  );
}
export default Welcome;
