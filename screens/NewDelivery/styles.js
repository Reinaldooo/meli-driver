import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  min-height: 100%;
  position: relative;
  padding: 0 25px;
  background-color: white;
  align-items: center;
`;

export const Header = styled.Text`
  text-align: center;
  font-size: 20px;
  margin-top: 5%;
`;

export const Images = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
`;

export const Secondary = styled.Text`
  text-align: center;
  font-size: 16px;
  margin-top: 5%;
`;

export const Input = styled.TextInput`
  color: #283380;
  background-color: #ffe600;
  padding: 5px 10px;
  width: 70%;
  border-radius: 5px;
  font-size: 15px;
  text-align: center;
  margin: 15px auto;
`;