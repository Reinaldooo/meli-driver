import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";
//
import * as S from "./styles.js";
import driver from "../../assets/driverFull.png";
import DeliveryItem from "./DeliveryItem";
import ProfileDetails from "../../components/ProfileDetails";

function Home({ navigation }) {
  const { userDetails: user } = useSelector((state) => state.auth);
  return (
    <S.Container>
      <Image source={driver} style={{ position: "absolute", top: 0 }} />
      <ProfileDetails lightBackground={false}/>
      <S.ProfileName>Olá, {user?.first_name || "null"}</S.ProfileName>
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
