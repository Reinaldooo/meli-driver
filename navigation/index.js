import React from "react";
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

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const NewDeliveryNavigator = createStackNavigator();
const OngoingDeliveriesNavigator = createStackNavigator();

function NewDeliveryStack() {
  return (
    <NewDeliveryNavigator.Navigator>
      <NewDeliveryNavigator.Screen name="ListKits" component={ListKits} />
      <NewDeliveryNavigator.Screen
        name="NewDelivery"
        component={NewDelivery}
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
          headerLeft: null,
        }}
      />
      <OngoingDeliveriesNavigator.Screen
        name="OngoingDelivery"
        component={OngoingDelivery}
      />
    </OngoingDeliveriesNavigator.Navigator>
  );
}

function MainTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Nova-entrega") {
            iconName = focused ? "car" : "car";
          } else if (route.name === "Entregas-Atuais") {
            iconName = focused ? "dropbox" : "dropbox";
          }
          // You can return any component that you like here!
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "white",
        tabStyle: {
          backgroundColor: "#283380",
        },
        showLabel: false,
        style: {
          backgroundColor: "#283380",
        },
      }}
    >
      <Tab.Screen name="Nova-entrega" component={NewDeliveryStack} />
      <Tab.Screen name="Home" component={Home} />
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
