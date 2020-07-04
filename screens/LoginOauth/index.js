import React, { useState, useRef, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import AsyncStorage from "@react-native-community/async-storage";
//
import * as S from "./styles";
import { oauthUrl } from "../../services/utils";
import ButtonPrimary from "../../components/ButtonPrimary";

function LoginOauth({ navigation }) {
  const [loginCode, setLoginCode] = useState(null);
  const [fetchingAccount, setFetchingAccount] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
  const webview = useRef();

  useEffect(() => {
    if (loginCode) {
      // Get the code and send it to the backend, wich will make adicional requests
      // and give back the user details
      fetch(`https://apimegahack-v3.reinaldowft.com/auth?code=${loginCode}`, {
        method: "post",
      })
        .then((data) => data.json())
        .then((data) => {
          navigation.navigate("LocalRegistration", {
            user: data
          });
        })
        .catch((e) => console.log(e));
    }
  }, [loginCode]);

  function handleWebViewNavigationStateChange(newState) {
    if (newState.canGoBack) {
      setShowBackButton(true);
    } else {
      setShowBackButton(false);
    }
    if (newState.url.indexOf("auth?code") > -1) {
      // This means it got a valid code back
      setLoginCode(newState.url.split("=")[1]);
      setFetchingAccount(true);
      return;
    }
    if (newState.url.indexOf("auth?error") > -1) {
      // Go back because the user canceled the login
      navigation.navigate("Welcome");
    }
  }

  return (
    <SafeAreaView style={{ height: "100%", position: "relative" }}>
      {!fetchingAccount ? (
        <WebView
          ref={webview}
          source={{
            uri: oauthUrl,
          }}
          // incognito={true}
          style={{ flex: 1 }}
          onNavigationStateChange={handleWebViewNavigationStateChange}
        />
      ) : (
        <ActivityIndicator size="large" style={{ flex: 1 }} />
      )}
      <S.Buttons>
        {showBackButton && (
          <ButtonPrimary
            title="Voltar"
            onPress={() => webview.current.goBack()}
          />
        )}
        <ButtonPrimary
          title="Cancelar"
          onPress={() => navigation.navigate("Welcome")}
        />
      </S.Buttons>
    </SafeAreaView>
  );
}
export default LoginOauth;
