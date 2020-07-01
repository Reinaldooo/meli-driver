import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
//
import IconWithBadge from "../components/IconWithBadge";
// Screens
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import NewDelivery from "../screens/NewDelivery";
import ListKits from "../screens/ListKits";
import DeliveryConfirmation from "../screens/DeliveryConfirmation";
import OngoingDeliveries from "../screens/OngoingDeliveries";
import OngoingDelivery from "../screens/OngoingDelivery";

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
          headerLeft: null,
        }}
      />
      <NewDeliveryNavigator.Screen name="ListKits" component={ListKits} />
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
            iconName = focused ? "plus-circle" : "plus-circle";
            return <IconWithBadge name={iconName} size={size} color={color} />;
          } else if (route.name === "Entregas-Atuais") {
            iconName = focused ? "list" : "list";
          }
          // You can return any component that you like here!
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Nova-entrega" component={NewDeliveryStack} />
      <Tab.Screen name="Entregas-Atuais" component={OngoingDeliveriesStack} />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Welcome" component={Welcome} />
        <RootStack.Screen name="Main" component={MainTabScreen} />
        <RootStack.Screen name="Modal" component={Login} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
