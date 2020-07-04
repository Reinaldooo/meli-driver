import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
//
import * as S from "./styles";

function DeliveryItem() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}
      >
        <AntDesign name="plus" size={16} color="green" />
        <Text> R$ 10.25</Text>
      </View>
      <AntDesign
        name="rightcircle"
        size={24}
        color="green"
        style={{ marginRight: 10 }}
      />
      <View>
        <Text style={{ fontWeight: "bold" }}>Entrega Pena</Text>
        <Text>02/07/2020 - 16:28</Text>
        <Text>Bairro Vila Nova</Text>
      </View>
    </View>
  );
}
export default DeliveryItem;
