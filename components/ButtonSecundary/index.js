import React from "react";
//
import * as S from "./styles";

function ButtonSecundary({ title, onPress, extraStyle }) {
  return (
    <S.Container
    onPress={onPress}
    style={extraStyle}
    >
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
export default ButtonSecundary;
