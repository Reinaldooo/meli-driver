import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  View,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
//
import * as S from "./styles";
import driver from "../../assets/driver.png";
import inlineWhiteShadow from "../../assets/inline-shadow-white.png";
import ProfileDetails from "../../components/ProfileDetails";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecundary from "../../components/ButtonSecundary";
import { packSizes, packLevels } from "../../services/utils";
import ModalContent from "../../components/ModalContent";

function ListKits({ navigation }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [infoModalContent, setInfoModalContent] = useState(null);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleSelectSize = (title) => {
    if (selectedSize === title) {
      setSelectedSize(null);
      return;
    }
    setSelectedSize(title);
  };

  const handleSelectLevel = (title) => {
    if (selectedLevel === title) {
      setSelectedLevel(null);
      return;
    }
    setSelectedLevel(title);
  };

  const handleInfoModal = (type, id) => {
    if (!id) {
      setShowInfoModal(false);
      return;
    }
    if (type === "size") {
      let sizeItem = packSizes.find((item) => item.id === id);
      setInfoModalContent(sizeItem.desc);
      setShowInfoModal((old) => !old);
      return;
    }
    let levelItem = packLevels.find((item) => item.id === id);
    setInfoModalContent(levelItem.desc);
    setShowInfoModal((old) => !old);
  };

  const handleConfirmationModal = (type, id) => {
    setShowConfirmationModal((old) => !old);
  };

  return (
    <S.Container>
      {/* Info modal */}
      <Modal isVisible={showInfoModal} backdropTransitionOutTiming={0}>
        <ModalContent color="#E6363D">
          <S.ModalHeader>{infoModalContent}</S.ModalHeader>
          <ButtonSecundary title="Fechar" onPress={handleInfoModal} />
        </ModalContent>
      </Modal>
      {/* Confirmation modal */}
      <Modal isVisible={showConfirmationModal} backdropTransitionOutTiming={0}>
        <ModalContent color="#81AA40">
          <S.ModalHeader>Confirma a entrega?</S.ModalHeader>
          <ButtonPrimary
            title="Confirmo"
            onPress={() => {
              setShowConfirmationModal(false)
              navigation.navigate("Entregas-Atuais")
            }}
            extraStyle={{ marginBottom: 10 }}
          />
          <ButtonSecundary title="Fechar" onPress={handleConfirmationModal} />
        </ModalContent>
      </Modal>

      <Image
        source={driver}
        style={{ position: "absolute", top: 0, zIndex: -2 }}
      />

      <ProfileDetails lightBackground />

      <S.PacksBody>
        <Image source={inlineWhiteShadow} />
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            alignItems: "center",
          }}
        >
          <S.Header>Selecione um tamanho e um nível</S.Header>
          <S.Secundary>Aperte e segure para obter informações</S.Secundary>
          <S.PacksContainer>
            {packSizes.map((pack) => (
              <TouchableOpacity
                key={pack.id}
                onPress={() => handleSelectSize(pack.title)}
                onLongPress={() => handleInfoModal("size", pack.id)}
              >
                <S.PackItem selected={selectedSize === pack.title}>
                  <S.PackButton>
                    <S.PackButtonImg source={{ uri: pack.img }} />
                    <S.PackButtonText>{pack.title}</S.PackButtonText>
                  </S.PackButton>
                  <S.PackQty>{pack.count}</S.PackQty>
                </S.PackItem>
              </TouchableOpacity>
            ))}
          </S.PacksContainer>

          <S.PacksContainer>
            {packLevels.map((pack) => (
              <TouchableOpacity
                key={pack.id}
                onPress={() => handleSelectLevel(pack.title)}
                onLongPress={() => handleInfoModal("level", pack.id)}
              >
                <S.PackItem selected={selectedLevel === pack.title}>
                  <S.PackButton levels>
                    <S.PackButtonImg source={{ uri: pack.img }} />
                    <S.PackButtonText>{pack.title}</S.PackButtonText>
                  </S.PackButton>
                  <S.PackQty>{pack.count}</S.PackQty>
                </S.PackItem>
              </TouchableOpacity>
            ))}
          </S.PacksContainer>

          <S.SelectedContainer>
            <S.Header>Selecionado</S.Header>
            <S.SelectedList>
              {selectedSize && selectedLevel ? (
                <S.SelectedItem>
                  <AntDesign name="plus" size={16} color="rgb(52,199,89)" />
                  <Text>
                    R$ 30,00 {selectedSize} {selectedLevel}
                  </Text>
                </S.SelectedItem>
              ) : (
                <Text style={{ textAlign: "center" }}>
                  Nenhum pack selecionado.
                </Text>
              )}
            </S.SelectedList>
          </S.SelectedContainer>

          <S.Buttons>
            <ButtonPrimary
              title="Confirmar"
              onPress={handleConfirmationModal}
              disabled={!(selectedSize && selectedLevel)}
            />
          </S.Buttons>
        </ScrollView>
      </S.PacksBody>
    </S.Container>
  );
}
export default ListKits;
