import styled from "styled-components/native";

export const Notifications = styled.View`
  position: absolute;
  top: 10%;
  right: 10%;
`;

export const NotificationBadge = styled.View`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 25px;
  height: 25px;
  background-color: tomato;
  padding: 5px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;

export const NotificationBadgeText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const Profile = styled.View`
  height: 200px;
  width: 100%;
  flex-direction: row;
`;

export const ProfilePhoto = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  position: relative;
`;

export const PhotoBadge = styled.View`
  position: absolute;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  background-color: rgba(255,255,255,.6);
  right: 0;
  top: 120px;
  z-index: -1;
  justify-content: center;
  align-items: center;
`;

export const PhotoBadgeText = styled.Text`
  font-weight: ${(props) => (props.secondary ? "normal" : "bold")};
  color: #283380;
`;

export const Balance = styled.View`
  flex: 1.3;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
`;

export const BalanceText = styled.Text`
  margin-top: 70px;
  color: ${props => props.lightBackground ? "#283380" : "#ffe600"};
  font-size: ${props => props.primary ? "50px" : "15px"};
`;