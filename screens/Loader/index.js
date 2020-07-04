import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
//
import * as S from "./styles";
import logo from "../../assets/logo.png";

function Loader({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("ListKits");
    }, 1200);
  }, []);

  return (
    <S.Container>
      <Animatable.Image
        duration={500}
        animation="pulse"
        easing="linear"
        iterationCount="infinite"
        source={logo}
        style={{ width: 300, height: 300 }}
      />
    </S.Container>
  );
}
export default Loader;
