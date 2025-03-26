import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useExpenses } from "../contexts/ExpenseContext";
import { useNavigation } from "@react-navigation/native";

function parseExpenseText(text: string) {
  const dateMatch = text.match(/날짜:\s*(\d{2})\/(\d{2})/);
  const amountMatch = text.match(/출금:\s*([\d,]+)/);
  const memoMatch = text.match(/메모:\s*(.+)/);

  const nowYear = new Date().getFullYear();

  return {
    date: dateMatch ? `${nowYear}-${dateMatch[1]}-${dateMatch[2]}` : "",
    amount: amountMatch
      ? parseInt(amountMatch[1].replace(/,/g, ""), 10)
      : 0,
    memo: memoMatch ? memoMatch[1].trim() : "",
  };
}

export default function RegisterScreen() {
  const [inputText, setInputText] = useState("");
  const { addExpense } = useExpenses();
  const navigation = useNavigation();

  const handleParse = () => {
    const parsed = parseExpenseText(inputText);
    const newExpense = {
      id: Date.now().toString(),
      ...parsed,
    };
    addExpense(newExpense);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>문자 붙여넣기</Text>
      <TextInput
        value={inputText}
        onChangeText={setInputText}
        multiline
        placeholder="문자 내용을 붙여넣어 주세요."
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.button} onPress={handleParse}>
        <Text style={styles.buttonText}>등록하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    minHeight: 120,
    marginBottom: 16,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});