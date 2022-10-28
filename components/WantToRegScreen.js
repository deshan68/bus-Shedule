import { StyleSheet, Text, View, Pressable } from "react-native";
import { TextInput } from "react-native";
import SelectBusRoute from "./SelectBusRouteScreen";
import { useState } from "react";
import { firebase } from "../src/firebase/config";

export default function WantToRegScreen({ navigation }) {

  const [fNameText, setfNameText] = useState("");
  const [lNameText, setlNameText] = useState("");
  const [phoneNumText, setPhoneNumText] = useState("");
  const [busNumText, setBusNumText] = useState("");
  const [busColorText, setBusColorText] = useState("");
  // const [depTimeText, setDepTimeText] = useState("");

  const DrvRegRef = firebase.firestore().collection("registered_drivers");

  function Start_SelectBusRoute_ModalIsVisible_handler() {
    if (
      fNameText.length &&
      lNameText.length &&
      phoneNumText.length &&
      busNumText.length &&
      // depTimeText.length &&
      busColorText.length > 0
    ) {
      const data = {
        Fname: fNameText,
        Lname: lNameText,
        PhoneNumber: phoneNumText,
        BusNumber: busNumText,
        BusC0lor: busColorText,
      };
      DrvRegRef.add(data)
        .then()
        .catch((error) => {
          alert(error);
        });
      navigation.navigate("DriverRoute", {
      });


    } else {
      alert("Fill the Feild(s)");
    }

    setfNameText("");
    setlNameText("");
    setPhoneNumText("");
    setBusNumText("");
    setBusColorText("");
    // setDepTimeText("");
  }

  
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{ fontSize: 55, fontWeight: "bold", paddingVertical: 20 }}>
          Registration
        </Text>
      </View>
      <View style={styles.textInputTitleContainer}>
        <View style={styles.textAndTextFieldContainer}>
          <Text style={styles.textInputTitle}>First Name :</Text>
          <TextInput
            onChangeText={setfNameText}
            value={fNameText}
            style={styles.textField}
          />
        </View>
        <View style={styles.textAndTextFieldContainer}>
          <Text style={styles.textInputTitle}>Last Name :</Text>
          <TextInput
            onChangeText={setlNameText}
            value={lNameText}
            style={styles.textField}
          />
        </View>
        <View style={styles.textAndTextFieldContainer}>
          <Text style={styles.textInputTitle}>Phone Number :</Text>
          <TextInput
            onChangeText={setPhoneNumText}
            value={phoneNumText}
            style={styles.textField}
          />
        </View>
        <View style={styles.textAndTextFieldContainer}>
          <Text style={styles.textInputTitle}>Bus Number :</Text>
          <TextInput
            onChangeText={setBusNumText}
            value={busNumText}
            style={styles.textField}
          />
        </View>
        <View style={styles.textAndTextFieldContainer}>
          <Text style={styles.textInputTitle}>Bus Color :</Text>
          <TextInput
            onChangeText={setBusColorText}
            value={busColorText}
            style={styles.textField}
          />
        </View>

      </View>
      <View style={{ marginTop: 50 }}>
        <Pressable
          onPress={Start_SelectBusRoute_ModalIsVisible_handler}
          style={({ pressed }) => pressed && styles.pressedBtn}
        >
          {/* <SelectBusRoute
            visible={SelectBusRoute_ModalIsVisible}
            OnCancel={End_SelectBusRoute_ModalIsVisible_handler}
          /> */}

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
    paddingVertical: 10,
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
  },
  textInputTitle: {
    fontSize: 17,
    fontWeight: "300",
    marginBottom: 0,
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
