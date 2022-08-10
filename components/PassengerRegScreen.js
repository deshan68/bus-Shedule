import { StyleSheet, Text, View, Pressable } from "react-native";
import SelectList from "react-native-dropdown-select-list";
import { TextInput } from "react-native";
import PassengerRoute from "./PassengerRoute_Screen";
import { useState } from "react";
import { firebase } from "../src/firebase/config";

export default function PassengerRegScreen({ navigation }) {

  const [fNameText, setfNameText] = useState("");
  const [lNameText, setlNameText] = useState("");
  const DrvRegRef = firebase.firestore().collection("registered_passengers");

  function PassengerNameAdd() {
    if (fNameText.length && lNameText.length > 0) {
      const data = {
        Fname: fNameText,
        Lname: lNameText,
      };
      DrvRegRef.add(data)
        .then()
        .catch((error) => {
          alert(error);
        });
        navigation.navigate("PassengerRoute")
    } else {
      alert("Fill the Feild(s)");
    }
    setfNameText("");
    setlNameText("");
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
          <TextInput
            onChangeText={setfNameText}
            value={fNameText}
            style={styles.textField}
          />
        </View>
        <View>
          <Text style={styles.textInputTitle}>Last Name</Text>
          <TextInput
            onChangeText={setlNameText}
            value={lNameText}
            style={styles.textField}
          />
        </View>
      </View>
      <View style={{ marginTop: 100 }}>
        <Pressable
          onPress={PassengerNameAdd}
          style={({ pressed }) => pressed && styles.pressedBtn}
        >
          {/* <PassengerRoute
            visible={PassengerRoute_ModalIsVisible}
            onCancel={End_PassengerRoute_ModalIsVisible_Handler}
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
