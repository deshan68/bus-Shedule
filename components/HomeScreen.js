import { StyleSheet, Text, View, Pressable } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("PassengerReg")}
        style={({ pressed }) => pressed && styles.pressedBtn}
      >
          <View style={styles.startButtns}>
            <Text style={styles.startButtnsText}>A Passenger</Text>
          </View>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("WantToREg_and_AlreadyReg")}
        style={({ pressed }) => pressed && styles.pressedBtn}
      >
          <View style={styles.startButtns}>
            <Text style={styles.startButtnsText}>A Driver</Text>
          </View>
      </Pressable>
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
