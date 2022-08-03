import { View, Text, StyleSheet } from "react-native";


 export default function AlreadyRegScreen(){
    return(
        <View style={styles.container}>
                <Text>Hello Already reg</Text>
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
  