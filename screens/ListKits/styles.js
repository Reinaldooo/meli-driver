import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  min-height: 100%;
  position: relative;
  padding: 0 25px;
  background-color: white;
  align-items: center;
`;

export const PacksBody = styled.View`
  width: 120%;
  flex: 1;
  position: relative;
  padding: 0 25px;
  align-items: center;
  background-color: #ffe600;
`;

export const Header = styled.Text`
  padding: 0 5% 10%;
  color: #283380;
  font-size: 18px;
  text-align: center;
`;

export const ModalHeader = styled.Text`
  padding: 5% 0;
  color: white;
  font-size: 18px;
  text-align: center;
`;

export const Secundary = styled.Text`
  margin-top: -30px;
  padding: 0 5% 5%;
  color: #283380;
  font-size: 14px;
  text-align: center;
`;

export const PacksContainer = styled.View`
  background-color: white;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px;
`;

export const PackItem = styled.View`
  justify-content: center;
  align-items: center;
  opacity: ${props => props.selected ? 1 : .5};
`;

export const PackButton = styled.View`
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #283380;
  border-radius: 15px;
  padding: 6px;
  width: ${props => props.levels ? "90px" : "75px"};
`;

export const PackButtonImg = styled.Image`
  width: 40px;
  height: 40px;
`;

export const PackButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const PackQty = styled.Text`
  font-size: 16px;
  color: #283380;
`;

export const SelectedContainer = styled.View`
  background-color: white;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
  justify-content: space-evenly;
  padding: 10px;
`;

export const SelectedList = styled.View`
  font-size: 16px;
  color: #283380;
  margin-top: -20px;
`;

export const SelectedItem = styled.View`
  font-size: 16px;
  margin: 2px 0;
  color: #283380;
  flex-direction: row;
`;

export const Buttons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px 0;
  padding-bottom: 40px;
`;

