import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppContainer from "./AppContainer.jsx";
import Finish from "../screens/Finish/Finish";
import Quiz from "../screens/Quiz/Quiz";
import Starter from "../screens/Starter/Starter";

const Stack = createStackNavigator();

const RouteContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Starter">
        <Stack.Screen name="Starter" component={Starter} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Finish" component={Finish} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouteContainer;
