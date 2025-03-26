import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar } from 'react-native-calendars';
import type { DateData } from 'react-native-calendars';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { EdgeInsets } from 'react-native-safe-area-context';
import { useExpenses } from '../contexts/ExpenseContext'; // ✅ 전역 데이터 불러오기

export default function CalendarScreen() {
  const { expenses } = useExpenses(); // ✅ 전역 상태 사용
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const insets = useSafeAreaInsets();
  const styles = createStyles(insets);

  // ✅ markedDates 구성 (날짜별 마킹)
  const markedDates = expenses.reduce((acc, expense) => {
    if (!acc[expense.date]) {
      acc[expense.date] = {
        marked: true,
        dotColor: 'skyblue',
      };
    }
    return acc;
  }, {} as Record<string, { marked: true; dotColor: string }>);

  // ✅ 선택한 날짜의 지출 필터링
  const filteredExpenses = expenses.filter((expense) =>
    expense.date === selectedDate
  );

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={(day: DateData) => {
          setSelectedDate(day.dateString);
        }}
        markedDates={markedDates}
        theme={{
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 12,
        }}
      />

      {selectedDate && (
        <View style={styles.expenseContainer}>
          <Text style={styles.selectedTitle}>{selectedDate} 지출 내역</Text>
          {filteredExpenses.length > 0 ? (
            filteredExpenses.map((item) => (
              <Text key={item.id} style={styles.expenseItem}>
                • {item.memo} - ￦{item.amount.toLocaleString()}
              </Text>
            ))
          ) : (
            <Text style={styles.noExpense}>지출 내역이 없습니다.</Text>
          )}
        </View>
      )}
    </View>
  );
}

const createStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: insets.top,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
    },
    expenseContainer: {
      marginTop: 20,
    },
    selectedTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    expenseItem: {
      fontSize: 14,
      marginBottom: 4,
    },
    noExpense: {
      fontSize: 14,
      fontStyle: 'italic',
      color: '#666',
    },
  });