import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-community/async-storage";

function Home({ navigation }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function checkUser() {
      let user = JSON.parse(await AsyncStorage.getItem("user"));
      if (user.first_name) {
        setUser(user);
      }
    }
    checkUser();
  }, []);
  return (
    <SafeAreaView>
      {console.log(user)}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40%",
        }}
      >
        {user && <Text>{`Olá, ${user.first_name}`}</Text>}
      </View>
    </SafeAreaView>
  );
}
export default Home;
