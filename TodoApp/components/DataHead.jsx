import React from "react";
import { StatusBar, View, Text, StyleSheet } from "react-native";

const DataHead = ({ date }) => {
  const year = date.getFullYear(); // getyear하면 124년으로 나옴
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formatted = `${year}년 ${month}월 ${day}일`;
  return (
    <>
      <StatusBar backgroundColor="#26a96a" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: "#26a69a",
  },
  dateText: {
    fontSize: 24,
    color: "white",
  },
});

export default DataHead;
