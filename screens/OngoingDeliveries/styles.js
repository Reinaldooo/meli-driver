import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  min-height: 100%;
  position: relative;
  padding: 0 25px;
  background-color: "rgba(40, 51, 128, 0.4)";
  align-items: center;
`;

export const Summary = styled.View`
  width: 100%;
  height: 100px;
  padding: 10px;
  background-color: blue;
  border-radius: 10px;
`;

export const Header = styled.Text`
  padding: 5% 10%;
  color: #fff;
  font-size: 18px;
  text-align: center;
`;

export const DeliveryContainer = styled.View`
  width: 100%;
  border-radius: 10px;
  padding: 10px 20px;
  margin: 10px auto;
  opacity: ${props => props.delivered ? .3 : 1};
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DeliveryInfo = styled.View`
  font-size: 16px;
  margin: 2px 0;
  color: #283380;
  flex-direction: row;
`;