import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Asset } from "expo-asset";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
//
import * as S from "./styles";
import driver from "../../assets/driver.png";
import ButtonPrimary from "../../components/ButtonPrimary";
import ImageRound from "../../components/ImageRound";
import { formatDate } from "../../services/utils";
import { logUserIn } from "../../actions";
const profilePlaceholder = Asset.fromModule(require("../../assets/Perfil.png"))
  .uri;

function LocalRegistration({ route, navigation }) {
  const { user, picture } = route.params;
  const [userImage, setUserImage] = useState(profilePlaceholder);
  const [carImage, setCarImage] = useState(null);
  const [showDP, setShowDP] = useState(false);
  const [dob, setDob] = useState(null);
  const dispatch = useDispatch()

  useEffect(() => {
    if (picture) {
      if (picture.type === "car") {
        setCarImage(picture.uri);
        return;
      }
      setUserImage(picture.uri);
    }
  }, [picture]);

  const showDatePicker = () => {
    setShowDP(true);
  };

  const hideDatePicker = () => {
    setShowDP(false);
  };

  const handleConfirm = (date) => {
    setShowDP(false);
    setDob(formatDate(date));
  };
  
  return (
    <S.Container>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{
          alignItems: "center",
          minHeight: "100%",
          paddingBottom: "15%",
          paddingTop: "20%",
        }}
      >
        <S.BackImage source={driver} />
        <ImageRound
          source={{ uri: userImage }}
          style={{
            resizeMode: "cover"
          }}
        />
        <ButtonPrimary
          title="Tirar foto"
          extraStyle={{ marginVertical: 20 }}
          onPress={() =>
            navigation.navigate("CameraWrapper", {
              type: "profile",
            })
          }
        />
        <S.Header>
          Olá {user.first_name}, precisamos de mais algumas informações
        </S.Header>
        <S.Text>Confirme sua data de nascimento:</S.Text>
        {dob && <S.Text>{dob}</S.Text>}
        <ButtonPrimary
          title="Escolher"
          extraStyle={{ marginTop: 10, marginBottom: 20 }}
          onPress={showDatePicker}
        />
        <DateTimePickerModal
          isVisible={showDP}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          date={new Date()}
        />
        <S.Text>Endereço:</S.Text>
        {/* Address is not saved */}
        <S.Input
          placeholder="Rua/Avenida"
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
        />
        <S.Input
          placeholder="Número"
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
        />
        <S.Input
          placeholder="Bairro"
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
        />
        <S.Input
          placeholder="Cidade / UF"
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
        />
        <S.Spacer />
        <S.Text>Dados do carro:</S.Text>
        <S.Input
          placeholder="Marca"
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
        />
        <S.Input
          placeholder="Modelo"
          autoCapitalize="none"
          autoCorrect={false}
          spellCheck={false}
        />
        {carImage && (
          <ImageRound
            source={{ uri: carImage }}
          />
        )}
        <ButtonPrimary
          title="Tirar foto"
          extraStyle={{ marginVertical: 20 }}
          onPress={() =>
            navigation.navigate("CameraWrapper", {
              type: "car",
            })
          }
        />
        <S.Spacer />
        <ButtonPrimary
          title="Finalizar cadastro"
          extraStyle={{ marginVertical: 20 }}
          onPress={async () => {
            let userDetails = {
              ...user,
              carImage,
              userImage,
              balance: 50        
            }
            try {
              AsyncStorage.setItem("userDetails", JSON.stringify(userDetails))
            } catch (error) {
              console.log("Error on saving user details")
              console.log(error)
            }
            dispatch(logUserIn(userDetails))
          }}
        />
      </ScrollView>
    </S.Container>
  );
}
export default LocalRegistration;
