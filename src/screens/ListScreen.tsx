import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { EdgeInsets } from 'react-native-safe-area-context';

export default function ListScreen() {
  const insets = useSafeAreaInsets();
  const styles = createStyles(insets)

  const dummyExpenses = [
    { id: '1', amount: 44000, memo: '포메인 (중앙점)', date: '2025-03-25' },
    { id: '2', amount: 12000, memo: '버스 충전', date: '2025-03-24' },
    { id: '3', amount: 5200, memo: '스타벅스', date: '2025-03-24' },
  ];

  const total = dummyExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  const renderItem = ({ item }: { item: typeof dummyExpenses[0] }) => (
    <View style={styles.item}>
      <Text style={styles.memo}>{item.memo}</Text>
      <Text style={styles.amount}>￦{item.amount.toLocaleString()}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.total}>총 지출: ￦{total.toLocaleString()}</Text>
      <FlatList
        data={dummyExpenses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const createStyles = (insets: EdgeInsets) => StyleSheet.create({
  container: { 
    flex: 1, 
    paddingTop: insets.top + 10,
    paddingHorizontal: 20, 
    backgroundColor: '#fff' 
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    padding: 15,
    marginBottom: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  memo: { fontSize: 16, fontWeight: '500' },
  amount: { fontSize: 16, color: '#007AFF', marginTop: 4 },
  date: { fontSize: 13, color: '#555', marginTop: 4 },
});