import registerRootComponent from "expo/build/launch/registerRootComponent";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Screens/HomeScreen";
import DetailsScreen from "./Screens/DetailsScreen";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const createHomeIcon = ({ size }) => <Ionicons name="home" size={size} />;

const createDetailsIcon = ({ size }) => (
  <Ionicons name="information" size={size} />
);

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: createHomeIcon }}
      />
      <Drawer.Screen
        name="Details"
        component={DetailsScreen}
        options={{ tabBarIcon: createDetailsIcon }}
        initialParams={{ count: 1 }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

registerRootComponent(App);
