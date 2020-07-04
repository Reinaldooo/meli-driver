import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { SafeAreaView } from "react-native-safe-area-context";
//
import * as S from "./styles"
import ButtonPrimary from "../../components/ButtonPrimary";

function CameraWrapper({ navigation, route }) {
  const { type } = route.params;
  const camera = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const [ready, setReady] = useState(false);
  const [camType, setCamType] = useState(
    type === "car" ? Camera.Constants.Type.back : Camera.Constants.Type.front
  );

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    navigation.goBack();
  }

  const handleCameraReady = () => {
    setReady(true);
  };

  return (
    <SafeAreaView>
      <S.Container>
        <Camera
          ref={camera}
          style={{ width: "100%", aspectRatio: 9 / 16 }}
          type={camType}
          ratio="16:9"
          onCameraReady={handleCameraReady}
        >
          <S.Buttons>
            <ButtonPrimary
              title="Cancelar"
              onPress={() => navigation.goBack()}
            />
            <ButtonPrimary
              title="Girar"
              onPress={() => {
                setCamType(
                  camType === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            />
            <ButtonPrimary
              title="Tirar Foto"
              onPress={async () => {
                if (ready) {
                  let picture = await camera.current.takePictureAsync();
                  navigation.navigate("LocalRegistration", {
                    picture: {
                      ...picture,
                      type,
                    },
                  });
                }
              }}
            />
          </S.Buttons>
        </Camera>
      </S.Container>
    </SafeAreaView>
  );
}

export default CameraWrapper;
