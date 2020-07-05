import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
//
import * as S from "./styles";

function DeliveryItem({ delivery }) {
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
        <AntDesign name="plus" size={16} color="rgb(52,199,89)" />
        <Text> R$ {delivery.value},00</Text>
      </View>
      <AntDesign
        name="rightcircle"
        size={24}
        color="rgb(52,199,89)"
        style={{ marginRight: 10 }}
      />
      <View>
        <Text style={{ fontWeight: "bold" }}>Entrega {delivery.type}</Text>
        <Text>{delivery.date}</Text>
        <Text>Bairro {delivery.neighborhood}</Text>
      </View>
    </View>
  );
}
export default DeliveryItem;
