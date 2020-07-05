import React from "react";
//
import * as S from "./styles";

function ModalContent({ children, color }) {
    return <S.Background>
      <S.Container color={color}>
        { children }
      </S.Container>
    </S.Background>;
}
export default ModalContent;