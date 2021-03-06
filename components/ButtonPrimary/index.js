import React from "react";
//
import * as S from "./styles";

function ButtonPrimary({ title, onPress, extraStyle, disabled, onLongPress }) {
  return (
    <S.Container
    onPress={onPress}
    onLongPress={onLongPress}
    style={extraStyle}
    disabled={disabled}
    >
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
export default ButtonPrimary;
