import { StyleSheet, Text, View } from "react-native";
const Square = () => {
  return (
    <View style={styles.square}>
      <View style={styles.square1}>
        <Text style={styles.text}>Hình 1</Text>
      </View>
      <View style={styles.square2}>
        <Text style={styles.text}>Hình 2</Text>
      </View>
      <View style={styles.square3}>
        <Text style={styles.text}>Hình 3</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  square: {
    marginTop:300,
    display: "flex",
    justifyContent: "space-around",
    // alignContent: "center",
    flexDirection: 'row',
    
  },
  square1: {
    width:50,
    height:50,
    backgroundColor:'#222'
  },
  square2: {
    width:50,
    height:50,
    backgroundColor:'#555'
  },
  square3: {
    width:50,
    height:50,
    backgroundColor:'#999'
  },
  text: {
    color: "#fff",
  },
});
export default Square;
