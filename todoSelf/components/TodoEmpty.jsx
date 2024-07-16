import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const TodoEmpty = () => {
  return (
    <View style={styles.block}>
      <Image
        style={styles.image}
        source={require("../assets/images/young_and_happy.png")}
      ></Image>
      <Text style={styles.text}>할 일이 없어요...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 180,
    marginBottom: 16,
  },
  text: {
    fontSize: 24,
    color: "#add8e6",
  },
});

export default TodoEmpty;
