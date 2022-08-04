import { StyleSheet, Text, View, Pressable } from "react-native";
import SelectList from "react-native-dropdown-select-list";
import { TextInput } from "react-native";
import PassengerRoute from "./PassengerRoute_Screen";
import { useState } from "react";


export default function PassengerRegScreen() {
  const [PassengerRoute_ModalIsVisible, Set_PassengerRoute_ModalIsVisible] = useState(false);

  function Start_PassengerRoute_ModalIsVisible_Handler(){
    Set_PassengerRoute_ModalIsVisible(true);
  };
  function End_PassengerRoute_ModalIsVisible_Handler(){
    Set_PassengerRoute_ModalIsVisible(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 55, fontWeight: "bold", paddingVertical: 20 }}>
          Enter Your
        </Text>
      </View>
      <View style={styles.textInputTitleContainer}>
        <View style={{ paddingBottom: 10 }}>
          <Text style={styles.textInputTitle}>First Name</Text>
          <TextInput style={styles.textField} />
        </View>
        <View>
          <Text style={styles.textInputTitle}>Last Name</Text>
          <TextInput style={styles.textField} />
        </View>
      </View>
      <View style={{marginTop: 100,}}>
        <Pressable onPress={Start_PassengerRoute_ModalIsVisible_Handler} style={({ pressed }) => pressed && styles.pressedBtn}>
          <PassengerRoute visible={PassengerRoute_ModalIsVisible} onCancel={End_PassengerRoute_ModalIsVisible_Handler}/>
          <View style={styles.nexttButtns}>
            <Text style={styles.nexttButtnsTerxt}>Next</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F9FD",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: "100%",
    paddingHorizontal: 35,
  },
  textInputTitleContainer: {
    width: "100%",
    paddingHorizontal: 40,
    fontSize: 10,
  },
  textField: {
    borderBottomColor: "#AEA7A7",
    borderBottomWidth: 1,
    fontSize: 18,
    paddingBottom: 2,
  },
  textInputTitle: {
    fontSize: 20,
    fontWeight: "300",
    marginVertical: 5,
  },
  nexttButtns: {
    backgroundColor: "#2155CD",
    width: 180,
    height: 60,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  nexttButtnsTerxt: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  pressedBtn: {
    opacity: 0.5,
  },
});
