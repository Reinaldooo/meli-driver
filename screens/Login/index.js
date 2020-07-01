import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Login({ navigation }) {
  return (
    <SafeAreaView>
      <View style={{ alignItems: "center", justifyContent: "center", marginTop: "40%" }}>
        <Text style={{ fontSize: 20 }}>Login será aqui</Text>
        <Button onPress={() => navigation.goBack()} title="Voltar" />
      </View>
    </SafeAreaView>
  );
}
export default Login;
