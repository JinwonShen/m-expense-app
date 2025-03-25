import React from "react";
import { View, Text, StyleSheet } from "react-native" 

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>➕ 지출 등록 화면</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center"},
  text: { fontSize: 20, fontWeight: "bold"}
})