import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import WantToREg_and_AlreadyReg_Screnn from "./components/WantToREg_and_AlreadyReg_Screnn";
import PassengerRegScreen from "./components/PassengerRegScreen";
import DriverRegScreen from "./components/DriverRegScreen";
import AlreadyRegScreen from "./components/AlreadyRegScreen";
import WantToRegScreen from "./components/WantToRegScreen";
import PassengerRoute from "./components/PassengerRoute_Screen";
import PassengerResult from "./components/PassengerResultScreen";
import DriverRoute from "./components/DriverRoute_Screen";
import SubmittedSuccessfully from "./components/SubmittedSuccessfully_Screen";

const Stack = createNativeStackNavigator();

export default function App() {
  // console .log(props.value);
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
        <Stack.Screen
          options={{ headerShown: false }}
          name="PassengerRoute"
          component={PassengerRoute}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PassengerResult"
          component={PassengerResult}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DriverRoute"
          component={DriverRoute}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SubmittedSuccessfully"
          component={SubmittedSuccessfully}
        />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}
