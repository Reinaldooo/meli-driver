import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Entypo, AntDesign } from "@expo/vector-icons";
//
import * as S from "./styles.js";
import ImageRound from "../../components/ImageRound";
import driver from "../../assets/driverFull.png";
import DeliveryItem from "./DeliveryItem";

function Home({ navigation }) {
  const { userDetails: user } = useSelector((state) => state.auth);
  return (
    <S.Container>
      <Image source={driver} style={{ position: "absolute", top: 0 }} />
      <S.Notifications>
        <Entypo name="bell" size={32} color="#283380" />
        <S.NotificationBadge>
          <S.NotificationBadgeText>3</S.NotificationBadgeText>
        </S.NotificationBadge>
      </S.Notifications>
      <S.Profile>
        <S.ProfilePhoto>
          <ImageRound wt={90} ht={90} source={{ uri: user.userImage }} />
          <S.PhotoBadge>
            <S.PhotoBadgeText>Nível 1</S.PhotoBadgeText>
            <S.PhotoBadgeText secondary>Junior</S.PhotoBadgeText>
          </S.PhotoBadge>
        </S.ProfilePhoto>
        <S.Balance>
          <S.BalanceText>
            R$ <S.BalanceText primary>45,90</S.BalanceText>
          </S.BalanceText>
        </S.Balance>
      </S.Profile>
      <S.ProfileName>Olá, {user.first_name}</S.ProfileName>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "rgba(255,255,255,.8)",
          borderRadius: 20,
          marginVertical: 25,
          paddingHorizontal: 10,
        }}
      >
        <DeliveryItem/>
        <DeliveryItem/>
        <DeliveryItem/>
        <DeliveryItem/>
        <DeliveryItem/>
      </ScrollView>
    </S.Container>
  );
}
export default Home;
