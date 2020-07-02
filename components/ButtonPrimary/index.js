import React from "react";
//
import * as S from "./styles";

function ButtonPrimary({ title, onPress }) {
  return (
    <S.Container
    onPress={onPress}
    >
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
export default ButtonPrimary;
