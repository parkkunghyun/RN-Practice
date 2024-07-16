import React, { useState } from "react";
import {
  Keyboard,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

const TodoAdd = ({ onInsert }) => {
  const [text, setText] = useState("");
  const onPress = () => {
    onInsert(text);
    setText("");
    Keyboard.dismiss();
  };

  const button = (
    <Image
      style={styles.image}
      source={require("../assets/icons/add_white/add_white.png")}
    />
  );

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType="done"
        placeholder="할일을 입력해주세요"
      ></TextInput>
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPress}>
              {button}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: "center",
  },
  textInput: {
    padding: 8,
    flex: 1,
  },
  image: {
    backgroundColor: "#add8e6",
    borderRadius: 30,
    width: 48,
    height: 48,
  },

  circleWrapper: {
    overflow: "hidden",
    borderRadius: 24,
  },
});

export default TodoAdd;
