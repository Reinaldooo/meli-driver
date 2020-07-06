import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
//
import * as S from "./styles";
import driver from "../../assets/driver.png";
import ProfileDetails from "../../components/ProfileDetails";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecundary from "../../components/ButtonSecundary";
import ModalContent from "../../components/ModalContent";
import { finishDelivery, receiveFunds } from "../../actions";
import { DIRECTIONS_KEY } from "../../ENV";

// Fake location
const origin = {
  latitude: -22.923428032276675,
  longitude: -43.17292498424649,
};
const destination = {
  latitude: -22.923428032276675,
  longitude: -43.178851660341024,
};
// This API key will become an env variable as soon as the hackaton ends.

function OngoingDelivery({ navigation, route }) {
  const dispatch = useDispatch()
  const { id, value } = route.params;
  const [showWarnModal, setShowWarnModal] = useState(true);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [deliveryEnded, setDeliveryEnded] = useState(false);

  useEffect(() => {
    if(deliveryEnded) {
      dispatch(finishDelivery(id))
      dispatch(receiveFunds(value))
      navigation.navigate("OngoingDeliveries")
    }
  }, [deliveryEnded])

  const handleWarnModal = () => {
    setShowWarnModal(false);
  };

  const handleCompletionModal = () => {
    if(showCompletionModal) {
      setShowCompletionModal(false);
      // Can't use a simple navigation.goBack() here because i the state must
      // change to close the modal, so this is a good case for useEffect
      setDeliveryEnded(true);
    } else {
      setShowCompletionModal(true);
    }    
  };

  return (
    <S.Container>
      <Modal isVisible={showWarnModal} backdropTransitionOutTiming={0}>
        <ModalContent color="#E6363D">
          <S.ModalText>
            Pedimos para você, nosso parceirx que tenha cuidado com sua saúde na
            entrega. Sempre use máscara!
          </S.ModalText>
          <S.ModalText>
            Para a segurança de quem irá receber, o endereço de entrega ficará
            disponível apenas durante o período estipulado pelo aplicativo GPS.
          </S.ModalText>
          <ButtonSecundary title="Fechar" onPress={handleWarnModal} />
        </ModalContent>
      </Modal>

      <Modal isVisible={showCompletionModal} backdropTransitionOutTiming={0}>
        <ModalContent color="#81AA40">
          <S.ModalText large>
            Parabéns!
          </S.ModalText>
          <S.ModalText>
            O valor será creditado em breve junto com seus pontos.
          </S.ModalText>
          <ButtonSecundary title="Fechar" onPress={handleCompletionModal} />
        </ModalContent>
      </Modal>

      <Image
        source={driver}
        style={{ position: "absolute", top: 0, zIndex: -2 }}
      />

      <ProfileDetails lightBackground />

      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ width: "120%", flex: 1 }}
        initialRegion={{
          latitude: -22.92541698251486,
          latitudeDelta: 0.011290419252649286,
          longitude: -43.1755149923265,
          longitudeDelta: 0.010705031454563141,
        }}
      >
        <Marker coordinate={origin} />
        <Marker coordinate={destination} />

        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={DIRECTIONS_KEY}
          strokeWidth={5}
          strokeColor="#283380"
        />
      </MapView>

      <S.Buttons>
        <ButtonPrimary
          title="Entrega realizada"
          onPress={handleCompletionModal}
        />
        <ButtonSecundary title="Problemas" />
      </S.Buttons>
    </S.Container>
  );
}
export default OngoingDelivery;
