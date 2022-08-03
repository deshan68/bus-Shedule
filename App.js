import {  StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import PassengerRegScreen from "./components/PassengerRegScreen";
import DriverRegScreen from "./components/DriverRegScreen";




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PassengerReg"
          component={PassengerRegScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DriverReg"
          component={DriverRegScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


