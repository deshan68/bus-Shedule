import { StyleSheet, Text, View } from "react-native";

export default function PassengerRegScreen() {
  return (
    <View style={styles.container}>
      <Text>Passenger Registration</Text>
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
});
