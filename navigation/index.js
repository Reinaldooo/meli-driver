import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";
// -- Screens import
import LoginOauth from "../screens/LoginOauth";
import LocalRegistration from "../screens/LocalRegistration";
import CameraWrapper from "../screens/CameraWrapper";
import Loader from "../screens/Loader";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import NewDelivery from "../screens/NewDelivery";
import ListKits from "../screens/ListKits";
import DeliveryConfirmation from "../screens/DeliveryConfirmation";
import OngoingDeliveries from "../screens/OngoingDeliveries";
import OngoingDelivery from "../screens/OngoingDelivery";
// ---
import ongoing from "../assets/icons/Ongoing.png";
import newDelivery from "../assets/icons/NewDelivery.png";
import home from "../assets/icons/Home.png";

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const NewDeliveryNavigator = createStackNavigator();
const OngoingDeliveriesNavigator = createStackNavigator();

function NewDeliveryStack() {
  return (
    <NewDeliveryNavigator.Navigator>
      <NewDeliveryNavigator.Screen
        name="NewDelivery"
        component={NewDelivery}
        options={{
          headerShown: false,
        }}
      />
      <NewDeliveryNavigator.Screen
        name="ListKits"
        component={ListKits}
        options={{
          headerShown: false,
        }}
      />
      <NewDeliveryNavigator.Screen
        name="DeliveryConfirmation"
        component={DeliveryConfirmation}
      />
    </NewDeliveryNavigator.Navigator>
  );
}

function OngoingDeliveriesStack() {
  return (
    <OngoingDeliveriesNavigator.Navigator>
      <OngoingDeliveriesNavigator.Screen
        name="OngoingDeliveries"
        component={OngoingDeliveries}
        options={{
          headerShown: false,
        }}
      />
      <OngoingDeliveriesNavigator.Screen
        name="OngoingDelivery"
        component={OngoingDelivery}
        options={{
          headerShown: false,
        }}
      />
    </OngoingDeliveriesNavigator.Navigator>
  );
}

function MainTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Image source={home} />;
          } else if (route.name === "Nova-entrega") {
            return <Image source={newDelivery} />;
          } else if (route.name === "Entregas-Atuais") {
            return <Image source={ongoing} />;
          }
        },
      })}
      tabBarOptions={{
        tabStyle: {
          backgroundColor: "#283380",
        },
        showLabel: false,
        style: {
          backgroundColor: "#283380",
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Nova-entrega" component={NewDeliveryStack} />
      <Tab.Screen name="Entregas-Atuais" component={OngoingDeliveriesStack} />
    </Tab.Navigator>
  );
}

function Navigation() {
  const { isLogged } = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        {false ? (
          <>
            <RootStack.Screen name="Welcome" component={Welcome} />
            <RootStack.Screen name="LoginOauth" component={LoginOauth} />
            <RootStack.Screen
              name="LocalRegistration"
              component={LocalRegistration}
            />
          </>
        ) : (
          <RootStack.Screen name="Main" component={MainTabScreen} />
        )}
        <RootStack.Screen name="Loader" component={Loader} />
        <RootStack.Screen name="CameraWrapper" component={CameraWrapper} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
