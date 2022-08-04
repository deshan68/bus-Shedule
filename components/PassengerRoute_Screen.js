import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import SelectList from "react-native-dropdown-select-list";
import { useState } from "react";
import SubmittedSuccessfully from "./SubmittedSuccessfully_Screen";

export default function PassengerRoute(props) {
    const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Matara" },
    { key: "2", value: "Galle" },{ key: "3", value: "Colombo" },{ key: "4", value: "Hambanthota" },{ key: "5", value: "Kaluthara" },{ key: "6", value: "Kaduwela" },{ key: "7", value: "Kadawatha" }
  ];

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text
            style={{ fontSize: 55, fontWeight: "bold", paddingBottom: 5 }}
          >
            Select Bus Route
          </Text>
        </View>
        <View style={styles.DropdownTitle}>
          <Text style={styles.dropDownTitleText}>Select Your Bus Stand</Text>
        </View>
        <View style={styles.DropDownContainer}>
          <SelectList
            setSelected={setSelected}
            data={data}
            // onSelect={() => alert(selected)}
          />
        </View>
        <View style={styles.DropdownTitle}>
          <Text style={styles.dropDownTitleText}>Select Destination Bus Stand</Text>
        </View>
        <View style={styles.DropDownContainer}>
          <SelectList
            setSelected={setSelected}
            data={data}
            // onSelect={() => alert(selected)}
          />
        </View>
        <View style={styles.ButtonsContainer}>
          <View style={{ marginTop: 0 }}>
            <Pressable onPress={props.onCancel} style={({ pressed }) => pressed && styles.pressedBtn}>
              <View style={styles.nexttButtns}>
                <Text style={styles.nexttButtnsTerxt}>Search</Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
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
  DropdownTitle: {
    width: "100%",
    paddingHorizontal: 45,
  },
  DropDownContainer: {
    width: "100%",
    paddingHorizontal: 45,
    paddingBottom: 20,
  },
  dropDownTitleText: {
    fontSize: 20,
    paddingBottom: 5,
  },
  nexttButtns: {
    backgroundColor: "#2155CD",
    width: 150,
    height: 50,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 15,
  },
  nexttButtnsTerxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  ButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  pressedBtn: {
    opacity: 0.5,
  },
});
