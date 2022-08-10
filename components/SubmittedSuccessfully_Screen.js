import { Text, View, Modal, Pressable, Image, StyleSheet } from "react-native";


export default function SubmittedSuccessfully({ route, navigation }) {

  const { startBusStand, endBusStand } = route.params;
  // console.log(startBusStand);
  // console.log(endBusStand);
  return (
    // <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={require("../assets/Images/tick.png")}
          />
        </View>
        <View>
          <Text style={{ fontSize: 30, fontWeight: "bold", paddingTop: 10 }}>
            Submitted Succssfully
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={({ pressed }) => pressed && styles.pressedBtn}
          >
            <View style={styles.nexttButtns}>
              <Text style={styles.nexttButtnsTerxt}>Okey..!</Text>
            </View>
          </Pressable>
        </View>
      </View>
    // </Modal>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8F9FD",
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
  pressedBtn: {
    opacity: 0.5,
  },
});
