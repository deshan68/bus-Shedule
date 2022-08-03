import { StyleSheet, Text, View, Pressable } from "react-native";
import { TextInput } from "react-native";

export default function PassengerRegScreen() {
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
        <Pressable style={({ pressed }) => pressed && styles.pressedBtn}>
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
