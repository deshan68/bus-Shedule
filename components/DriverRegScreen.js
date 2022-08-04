import SelectList from "react-native-dropdown-select-list";
import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function DriverRegScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Pressable
          style={({ pressed }) => pressed && styles.pressedBtn}
        >
          <View style={styles.startButtns}>
            <Text style={styles.startButtnsText}>Want To Register?</Text>
          </View>
        </Pressable>
        <Pressable
          style={({ pressed }) => pressed && styles.pressedBtn}
        >
          <View style={styles.startButtns}>
            <Text style={styles.startButtnsText}>Already Register?</Text>
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
  startButtns: {
    backgroundColor: "#2155CD",
    margin: 5,
    width: 350,
    height: 85,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  startButtnsText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  pressedBtn: {
    opacity: 0.5,
  },
});

