import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
//
import * as S from "./styles";
import driver from "../../assets/driver.png";
import ProfileDetails from "../../components/ProfileDetails";
import ButtonPrimary from "../../components/ButtonPrimary";

function OngoingDeliveries({ navigation }) {
  const test = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <S.Container>
      <Image
        source={driver}
        style={{ position: "absolute", top: 0, zIndex: -2 }}
      />

      <ProfileDetails />

      <S.Header>Ordem da rota</S.Header>

      <ScrollView style={{ flex: 1, width: "100%" }}>
        {test.map((it, i) => (
          <S.DeliveryContainer key={i}>
            <S.DeliveryInfo>
              <AntDesign name="plus" size={18} color="rgb(52,199,89)" />
              <Text>R$ 30,00 Mini Jumbo</Text>
            </S.DeliveryInfo>
            <ButtonPrimary
              title="Ver rota"
              onPress={
                () => navigation.navigate("OngoingDelivery", { id: i })
              }
            />
          </S.DeliveryContainer>
        ))}
      </ScrollView>
    </S.Container>
  );
}
export default OngoingDeliveries;
