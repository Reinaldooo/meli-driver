import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
//
import * as S from "./styles";
import driver from "../../assets/driver.png";
import ProfileDetails from "../../components/ProfileDetails";
import ButtonPrimary from "../../components/ButtonPrimary";
import { exampleDeliveries } from "../../services/utils";

function OngoingDeliveries({ navigation, route }) {
  const { finishedDeliveries } = useSelector((state) => state.deliveries);
  return (
    <S.Container>
      <Image
        source={driver}
        style={{ position: "absolute", top: 0, zIndex: -2 }}
      />

      <ProfileDetails />

      <S.Header>Ordem da rota</S.Header>

      <ScrollView style={{ flex: 1, width: "100%" }}>
        {exampleDeliveries.map((delivery) => (
          <S.DeliveryContainer
            key={delivery.id}
            delivered={finishedDeliveries.includes(delivery.id)}
          >
            <S.DeliveryInfo>
              <AntDesign name="plus" size={18} color="rgb(52,199,89)" />
              <Text>
                R$ {delivery.value},00 {delivery.size} {delivery.level}
              </Text>
            </S.DeliveryInfo>
            <ButtonPrimary
              title="Ver rota"
              onPress={() =>
                navigation.navigate("OngoingDelivery", { id: delivery.id, value: delivery.value })
              }
              disabled={finishedDeliveries.includes(delivery.id)}
            />
          </S.DeliveryContainer>
        ))}
      </ScrollView>
    </S.Container>
  );
}
export default OngoingDeliveries;
