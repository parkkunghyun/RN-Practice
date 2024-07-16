import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const TodoItem = ({ id, text, done, onRemove, onToggle }) => {
  return (
    <View style={styles.block}>
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[styles.image, done && styles.filled]}>
          {done && (
            <Image
              source={require("../assets/icons/check_white/check_white.png")}
            ></Image>
          )}
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
      {done ? (
        <TouchableOpacity onPress={() => onRemove(id)}>
          <Icon name="delete" size={32} color="black"></Icon>
        </TouchableOpacity>
      ) : (
        <View styles={styles.removePlaceholder}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },

  image: {
    width: 24,
    height: 24,
    backgroundColor: "#add8e6",
    borderRadius: 12,
    marginRight: 16,
    borderWidth: 0.5,
  },
  filled: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#add8e6",
  },
  text: {
    flex: 1,
    fontSize: 16,
  },

  lineThrough: {
    color: "#9e9e9e",
    textDecorationLine: "line-through",
  },

  removePlaceholder: {
    width: 32,
    height: 32,
  },
});

export default TodoItem;
