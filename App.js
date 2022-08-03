import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import WantToREg_and_AlreadyReg_Screnn from "./components/WantToREg_and_AlreadyReg_Screnn";
import PassengerRegScreen from "./components/PassengerRegScreen";
import DriverRegScreen from "./components/DriverRegScreen";
import AlreadyRegScreen from "./components/AlreadyRegScreen";
import WantToRegScreen from "./components/WantToRegScreen";

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
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="DriverReg"
          component={DriverRegScreen}
        /> */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="WantToReg"
          component={WantToRegScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AlreadyReg"
          component={AlreadyRegScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="WantToREg_and_AlreadyReg"
          component={WantToREg_and_AlreadyReg_Screnn}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
