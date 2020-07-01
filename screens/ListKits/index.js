import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ListKits({ navigation }) {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40%",
        }}
      >
        <Text>Lista de kits</Text>
        <Button
          onPress={() => navigation.navigate("DeliveryConfirmation")}
          title="escolher kit"
        />
      </View>
    </SafeAreaView>
  );
}
export default ListKits;
