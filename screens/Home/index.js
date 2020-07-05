import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useSelector } from "react-redux";
//
import * as S from "./styles.js";
import driver from "../../assets/driverFull.png";
import DeliveryItem from "./DeliveryItem";
import ProfileDetails from "../../components/ProfileDetails";
import { exampleDeliveries } from "../../services/utils";

function Home({ navigation }) {
  const { userDetails: user } = useSelector((state) => state.auth);
  return (
    <S.Container>
      <Image source={driver} style={{ position: "absolute", top: 0 }} />
      <ProfileDetails lightBackground={false}/>
      <S.ProfileName>Olá, {user?.first_name || "visitante"}</S.ProfileName>
      <S.DeliveriesContainer>
        {
          exampleDeliveries.map((item) => (
            <DeliveryItem key={item.id} delivery={item}/>
          ))
        }
      </S.DeliveriesContainer>
    </S.Container>
  );
}
export default Home;
