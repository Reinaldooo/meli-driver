import styled from "styled-components/native";

// Colors used: yellow, blue
export const Spacer = styled.View`
  height: 2%;
`;

export const Container = styled.View`
  width: 100%;
  position: relative;
  background-color: #ffe600;
  /* padding-top: 15%; */
  align-items: center;
`;

export const BackImage = styled.Image`
  position: absolute;
`;

export const Header = styled.Text`
  padding: 0 5% 10%;
  color: #283380;
  font-size: 18px;
  text-align: center;
`;

export const Text = styled.Text`
  color: #283380;
  font-size: 15px;
  text-align: center;
`;

export const Input = styled.TextInput`
  color: #283380;
  background-color: white;
  padding: 5px 10px;
  width: 70%;
  border-radius: 5px;
  font-size: 15px;
  text-align: center;
  margin: 2% 0;
`;
