import React, { useEffect, useState } from "react";
import { View, Text, BackHandler } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-community/async-storage";
import { useRoute } from "@react-navigation/native";

function Home({ navigation }) {
  const [user, setUser] = useState(null);
  const state = useRoute()
  
  // useEffect(() => {
  //   console.log(state)
  //   async function checkUser() {
  //     let user = JSON.parse(await AsyncStorage.getItem("user"));
  //     if (user.first_name) {
  //       setUser(user);
  //     }
  //   }
  //   checkUser();
  // }, []);
  return (
    <SafeAreaView>
      {/* {console.log(user)} */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "40%",
        }}
      >
        {/* {user && <Text>{`Olá, ${user.first_name}`}</Text>} */}
      </View>
    </SafeAreaView>
  );
}
export default Home;
