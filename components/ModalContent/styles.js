import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Container = styled.View`
  padding: 5% 0;
  width: 95%;
  background-color: ${props => props.color ? props.color : "tomato"};
  border-radius: 20px;
  align-items: center;
`