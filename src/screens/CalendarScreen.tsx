import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from 'react-native-calendars'
import type { DateData } from 'react-native-calendars'

export default function CalendarScreen() {
  const dummyExpenses = [
    { id: '1', amount: 44000, memo: '포메인 (중앙점)', date: '2025-03-25' },
    { id: '2', amount: 12000, memo: '버스 충전', date: '2025-03-24' },
    { id: '3', amount: 5200, memo: '스타벅스', date: '2025-03-24' },
  ];

  const markedDates = dummyExpenses.reduce((acc, expense) => {
    if(!acc[expense.date]) {
      acc[expense.date] = {
        marked: true,
        dotColor: 'blue'
      }
    }
    return acc;
  }, {} as Record<string, {marked: true; dotColor: string}>)

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day: DateData) => {
          console.log("선택한 날짜:", day.dateString)
        }}
        markedDates={markedDates}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: "center", alignItems: "center"}
})