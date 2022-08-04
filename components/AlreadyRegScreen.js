import { View, Text, StyleSheet, TextInput, Pressable,  } from "react-native";
import { useState } from "react";
import SelectBusRoute from "./SelectBusRouteScreen";


 export default function AlreadyRegScreen(){

  const [SelectBusRoute_ModalIsVisible, SetSelectBusRoute_ModalIsVisible] = useState(false);

  function Start_SelectBusRoute_ModalIsVisible_handler(){
    SetSelectBusRoute_ModalIsVisible(true);
  }
function End_SelectBusRoute_ModalIsVisible_handler(){
  SetSelectBusRoute_ModalIsVisible(false);
}
console.log(SelectBusRoute_ModalIsVisible);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 55, fontWeight: "bold", paddingVertical: 20 }}>
          Enter Bus Number
        </Text>
      </View>
      <View style={styles.textInputTitleContainer}>
        <View style={styles.textAndTextFieldContainer}>
          <Text style={styles.textInputTitle}>Bus Number :</Text>
          <TextInput placeholder="PP-1213" style={styles.textField} />
        </View>
      </View>
      <View style={{ marginTop: 50 }}>
        <Pressable onPress={Start_SelectBusRoute_ModalIsVisible_handler} style={({ pressed }) => pressed && styles.pressedBtn}>
          <SelectBusRoute visible={SelectBusRoute_ModalIsVisible} OnCancel= {End_SelectBusRoute_ModalIsVisible_handler}/>
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
  paddingVertical: 10
},
  textInputTitleContainer: {
    width: "100%",
    paddingHorizontal: 40,
    fontSize: 10,
  },
  textField: {
    borderBottomColor: "#AEA7A7",
    borderBottomWidth: 1,
    fontSize: 17,
    padding: 7
  },
  textInputTitle: {
    fontSize: 17,
    fontWeight: "300",
    marginBottom:0
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
  textAndTextFieldContainer: {
    marginBottom: 20,
  },
});
