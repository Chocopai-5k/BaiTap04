import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Square 1</Text>
      </View>
      <View style={styles.box2}>
        <Text
         style={styles.text}>Square 2</Text>
      </View>
      <View style={styles.box3}>
        <Text
         style={styles.text}>Square 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  box1: {
    backgroundColor: "red",
    width: 80,
    height: 80,
  },
  box2: {
    backgroundColor: "black",
    width: 80,
    height: 80,
  },
  box3: {
    backgroundColor: "blue",
    width: 80,
    height: 80,
  },
  text: {
    paddingTop: 30,
    textAlign:"center",
    color:'#fff'
  }
});
