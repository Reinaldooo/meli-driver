import React from "react";
import { ImageBackground, Text, View, Image } from "react-native";
//
import * as S from "./styles";
import loginBackground from "../../assets/loginBackground.png";
import logo from "../../assets/logo.png";
import ButtonPrimary from "../../components/ButtonPrimary";

function Welcome({ navigation }) {
  return (
    <ImageBackground
      source={loginBackground}
      style={{
        height: "100%",
        resizeMode: "cover",
      }}
    >
      <S.Container>
        <Image source={logo} style={{ width: 250, height: 250 }} />
        <ButtonPrimary
          onPress={() => navigation.navigate("LoginOauth")}
          title="Entrar"
        />
        {/* <ButtonPrimary
          onPress={() => navigation.navigate("Main")}
          title="Ir para a home"
        /> */}
      </S.Container>
    </ImageBackground>
  );
}
export default Welcome;
