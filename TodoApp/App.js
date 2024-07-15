import { StatusBar } from "expo-status-bar";
import { FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import DataHead from "./components/DataHead";
import AddTodo from "./components/AddTodo";
import Empty from "./components/Empty";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

import AsyncStorage from "@react-native-async-storage/async-storage";
import todoStorage from "./storages/todoStorage";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "작업환경 설정", done: true },
    { id: 2, text: "리액트 네이티브 기초 공부", done: false },
    { id: 3, text: "투두리스트 만들어보기", done: true },
  ]);

  // 불러오기
  useEffect(() => {
    todoStorage.get().then(setTodos).catch(console.error);
  }, []);

  // 저장
  useEffect(() => {
    todoStorage.set(todos).catch(console.error);
  }, [todos]);

  const today = new Date();
  console.log(today);
  //2024-07-14T23:18:17.767Z

  const onInsert = (text) => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };

    setTodos(todos.concat(todo));
  };

  const onToggle = (id) => {
    const nextTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(nextTodos);
  };

  const onRemove = (id) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.avoid}
      >
        <DataHead date={today} />
        {/* <StatusBar style="auto" /> */}
        {todos.length === 0 ? (
          <Empty />
        ) : (
          <TodoList onRemove={onRemove} onToggle={onToggle} todos={todos} />
        )}
        <AddTodo onInsert={onInsert} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
});
