import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  min-height: 100%;
  background-color: rgba(40, 51, 128, 0.4);
  position: relative;
  padding: 0 25px;
`;

export const ProfileName = styled.Text`
  align-self: flex-start;
  color: #283380;
  font-weight: bold;
  font-size: ${props => props.primary ? "50px" : "15px"};
`;

export const DeliveriesContainer = styled.ScrollView`
  flex: 1;
  background-color: "rgba(255,255,255,.8)";
  border-radius: 20px;
  margin: 25px 0;
  padding: 0 10px;
`;
