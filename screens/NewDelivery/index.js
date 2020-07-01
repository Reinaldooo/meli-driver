import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function NewDelivery({ navigation }) {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40%",
        }}
      >
        <Text>Escolher kits</Text>
        <Button
          onPress={() => navigation.navigate("ListKits")}
          title="Ver kits"
        />
      </View>
    </SafeAreaView>
  );
}
export default NewDelivery;
