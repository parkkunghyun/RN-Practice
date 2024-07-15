import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

const TodoList = ({ onRemove, todos, onToggle }) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem
          onToggle={onToggle}
          id={item.id}
          text={item.text}
          done={item.done}
          onRemove={onRemove}
        />
      )}
      keyExtraction={(item) => item.id.toString()}
      style={styles.list}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },

  separator: {
    backgroundColor: "#e0e0e0",
    height: 1,
  },
});

export default TodoList;
