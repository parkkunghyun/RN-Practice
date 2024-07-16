import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

const TodoHead = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  return (
    <>
      <StatusBar backgroundColor="auto" />
      <View style={styles.block}>
        <Text style={styles.text}>
          {year}년 {month}월 {day}일
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: "#add8e6",
    padding: 16,
  },
  text: {
    fontSize: 24,
    color: "white",
  },
});

export default TodoHead;
