import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function OngoingDeliveries({ navigation }) {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40%",
        }}
      >
        <Text>Lista de entregas em andamento</Text>
        <Button
          onPress={() => navigation.navigate("OngoingDelivery")}
          title="ir gps"
        />
      </View>
    </SafeAreaView>
  );
}
export default OngoingDeliveries;
