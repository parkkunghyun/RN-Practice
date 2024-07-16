import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "todos";

const todoStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);
      if (!rawTodos) {
        throw new Error("No saved todos");
      }
      return JSON.parse(rawTodos);
    } catch (e) {
      throw new Error("faild load todos");
    }
  },

  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error("faild set  todos");
    }
  },
};

export default todoStorage;
