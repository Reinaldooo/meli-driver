import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function DeliveryConfirmation({ navigation }) {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40%",
        }}
      >
        <Text>Confirmação</Text>
        <Button title="confirmar" />
      </View>
    </SafeAreaView>
  );
}
export default DeliveryConfirmation;
