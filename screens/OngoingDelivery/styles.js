import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  min-height: 100%;
  position: relative;
  padding: 0 25px;
  align-items: center;
`

export const Buttons = styled.View`
  flex: .15;
  flex-direction: row;
  background-color: #283380;
  width: 120%;
  align-items: center;
  justify-content: space-evenly;
`

export const ModalText = styled.Text`
  color: white;
  text-align: center;
  padding: 15px;
  font-size: ${props => props.large ? "22px" : "16px"};
`