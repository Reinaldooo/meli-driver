import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
//
import * as S from "./styles.js";
import driver from "../../assets/driver.png";
import ProfileDetails from "../../components/ProfileDetails";
import ButtonPrimary from "../../components/ButtonPrimary";
import boxes from "../../assets/NewDelivery/boxes.png"
import people from "../../assets/NewDelivery/people.png"

function NewDelivery({ navigation }) {
  return (
    <S.Container>
      <Image source={driver} style={{ position: "absolute", top: 0 }} />
      <ProfileDetails lightBackground/>
      <S.Header>Encontre sua nova entrega</S.Header>
      <S.Images>
        <Image source={boxes}/>
        <Image source={people}/>
      </S.Images>
      <S.Secondary>Pra onde você está indo?</S.Secondary>
      <S.Input
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
      />
      <S.Secondary>Quantas horas você tem disponível?</S.Secondary>
      <S.Input
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
      />
      <ButtonPrimary title="Buscar Packs" extraStyle={{ marginTop: 20 }} onPress={() => {
        navigation.navigate("Loader")
      }}/>
    </S.Container>
  );
}
export default NewDelivery;
