import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useEffect, useState } from "react";
import SelectBusRoute from "./SelectBusRouteScreen";
import { firebase } from "../src/firebase/config";

export default function AlreadyRegScreen({ navigation }) {
  const [busNumText, setBusNumText] = useState("");
  let validBusNum = [];

  const BusNumRef = firebase.firestore().collection("registered_drivers");

  function busNumSearchHandler() {
    console.log(busNumText);

    BusNumRef.where("BusNumber", "==", busNumText).onSnapshot(
      (querySnapshot) => {
        const busNum = [];

        querySnapshot.forEach((doc) => {
          const entity = doc.data();
          entity.id = doc.id;
          busNum.push(entity);
          validBusNum = busNum[0].BusNumber;
        });

        console.log(validBusNum);
      }
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 55, fontWeight: "bold", paddingVertical: 20 }}>
          Enter
        </Text>
      </View>
      <View style={styles.textInputTitleContainer}>
        <View style={{ paddingBottom: 10 }}>
          <Text style={styles.textInputTitle}>Bus Number</Text>
          <TextInput
            onChangeText={setBusNumText}
            value={busNumText}
            style={styles.textField}
            placeholder={"PP-8875"}
          />
        </View>
      </View>
      <View style={{ marginTop: 100 }}>
        <Pressable
          onPress={busNumSearchHandler}
          style={({ pressed }) => pressed && styles.pressedBtn}
        >
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
