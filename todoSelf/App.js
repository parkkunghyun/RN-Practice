import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import TodoHead from "./components/TodoHead";
import TodoAdd from "./components/TodoAdd";
import TodoEmpty from "./components/TodoEmpty";
import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import todoStorage from "./storage/todoStorage";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "t1", done: true },
    { id: 2, text: "t2", done: false },
    { id: 3, text: "t3", done: true },
  ]);
  const date = new Date();

  useEffect(() => {
    todoStorage.get().then(setTodos).catch(console.error);
  }, []);

  useEffect(() => {
    todoStorage.set(todos).catch(console.error);
  }, [todos]);
  //console.log(date);

  const onInsert = (text) => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
    const todo = { id: nextId, text, done: false };
    setTodos(todos.concat(todo));
  };

  const onToggle = (id) => {
    const nowTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(nowTodos);
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
        <TodoHead date={date} />
        {todos.length === 0 ? (
          <TodoEmpty />
        ) : (
          <TodoList onRemove={onRemove} onToggle={onToggle} todos={todos} />
        )}

        <TodoAdd onInsert={onInsert} />
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
