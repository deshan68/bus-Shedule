import {
  Text,
  View,
  Modal,
  Pressable,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { firebase } from "../src/firebase/config";

export default function PassengerResult({ route, navigation }) {
  const { startBusStand, endBusStand } = route.params;
  const DrvRegRef = firebase.firestore().collection("Driver_Routes");
  const [entityText, setEntityText] = useState("");
  const [entities, setEntities] = useState([]);
  const [noDataFoundMsgHndlr, setNoDataFoundMsgHndlr] = useState(false);



  useEffect(() => {
    DrvRegRef.where("Start_Stand", "==", startBusStand)
      .where("End_Stand", "==", endBusStand)
      .onSnapshot(
        (querySnapshot) => {
          const newEntities = [];
          querySnapshot.forEach((doc) => {
            const entity = doc.data();
            entity.id = doc.id;
            newEntities.push(entity);
          });
          setEntities(newEntities);
          setNoDataFoundMsgHndlr(true);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const renderEntity = ({ item }) => {
    return (
      <View style={styles.entityContainer}>
        <Text style={styles.entityText}>From : {item.Start_Stand}</Text>
        <Text style={styles.entityText}>To : {item.End_Stand}</Text>
        <Text style={styles.entityText}>
          Depature Time : {item.Depature_Time}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {entities.length == 0 &&  noDataFoundMsgHndlr == true ? (
        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={require("../assets/Images/close.png")}
            />
          </View>
          <View>
            <Text style={{ fontSize: 30, fontWeight: "bold", paddingTop: 10 }}>
              No Data Found
            </Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Pressable
              onPress={() => navigation.navigate("PassengerRoute")}
              style={({ pressed }) => pressed && styles.pressedBtn}
            >
              <View style={styles.nexttButtns}>
                <Text style={styles.nexttButtnsTerxt}>Okey..!</Text>
              </View>
            </Pressable>
          </View>
        </View>
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            data={entities}
            renderItem={renderEntity}
            // keyExtractor={(item) => item.id}
            // removeClippedSubviews={true}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8F9FD",
    width: "100%"
  },

  listContainer: {
    marginTop: 80,
    padding: 20,
    height: "100%",
    width: "100%",
  },
  entityContainer: {
    marginTop: 10,
    padding: 20,
    backgroundColor: "#999eec",

  },
  entityText: {
    fontSize: 20,
    color: "black",
  },
  image: {
    width: 100,
    height: 100,
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
