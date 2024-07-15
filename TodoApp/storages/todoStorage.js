import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "todos";

const todoStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);
      if (!rawTodos) {
        throw new Error("No saved todos");
      }
      const savedTodos = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      throw new Error("Faild to load todos");
    }
  },

  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error("Faild to save todos");
    }
  },
};

export default todoStorage;
