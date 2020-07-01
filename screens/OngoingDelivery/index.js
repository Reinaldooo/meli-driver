import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function OngoingDelivery({ navigation }) {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40%",
        }}
      >
        <Text>GPS</Text>
        <Button title="confirmar entrega" />
      </View>
    </SafeAreaView>
  );
}
export default OngoingDelivery;
