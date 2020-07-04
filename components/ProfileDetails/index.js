import React from "react";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Asset } from "expo-asset";
//
import * as S from "./styles";
import ImageRound from "../ImageRound";

const imgPlaceholder = Asset.fromModule(require("../../assets/Perfil.png"))
  .uri;

function ProfileDetails({ lightBackground }) {
  const { userDetails: user } = useSelector((state) => state.auth);
  const userImage = user?.userImage || imgPlaceholder;
  return (
    <>
      <S.Notifications>
        <Entypo name="bell" size={32} color="#283380" />
        <S.NotificationBadge>
          <S.NotificationBadgeText>3</S.NotificationBadgeText>
        </S.NotificationBadge>
      </S.Notifications>
      <S.Profile>
        <S.ProfilePhoto>
          <ImageRound wt={90} ht={90} source={{ uri: userImage }} />
          <S.PhotoBadge>
            <S.PhotoBadgeText>Nível 1</S.PhotoBadgeText>
            <S.PhotoBadgeText secondary>Junior</S.PhotoBadgeText>
          </S.PhotoBadge>
        </S.ProfilePhoto>
        <S.Balance>
          <S.BalanceText lightBackground={lightBackground}>
            R$ <S.BalanceText primary lightBackground={lightBackground}>45,90</S.BalanceText>
          </S.BalanceText>
        </S.Balance>
      </S.Profile>
    </>
  );
}
export default ProfileDetails;
