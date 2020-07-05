import React from "react";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Asset } from "expo-asset";
//
import * as S from "./styles";
import ImageRound from "../ImageRound";

const imgPlaceholder = Asset.fromModule(require("../../assets/Perfil.png")).uri;

function ProfileDetails({ lightBackground }) {
  const { userDetails: user } = useSelector((state) => state.auth);
  const { balance } = useSelector((state) => state.balance);
  const userImage = user?.userImage || imgPlaceholder;
  const userBalance = balance;
  const balanceLen = Math.ceil(Math.log10(userBalance + 1));
  const balanceTextSize = balanceLen < 3 ? "50px" : "45px"

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
          <S.PhotoBadge lightBackground={lightBackground}>
            <S.PhotoBadgeText lightBackground={lightBackground}>
              Nível 1
            </S.PhotoBadgeText>
            <S.PhotoBadgeText secondary lightBackground={lightBackground}>
              Junior
            </S.PhotoBadgeText>
          </S.PhotoBadge>
        </S.ProfilePhoto>
        <S.Balance>
          <S.BalanceText lightBackground={lightBackground}>
            R${" "}
            <S.BalanceText primary lightBackground={lightBackground} textSize={balanceTextSize}>
              {userBalance},00
            </S.BalanceText>
          </S.BalanceText>
        </S.Balance>
      </S.Profile>
    </>
  );
}
export default ProfileDetails;
