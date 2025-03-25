// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CalendarScreen from './src/screens/CalendarScreen';
import ListScreen from './src/screens/ListScreen';
import RegisterScreen from './src/screens/RegisterScreen';

// 1. 탭 네비게이터 생성
const Tab = createBottomTabNavigator();

// 탭 화면 구성
function TabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarLabelPosition: 'below-icon',
      tabBarActiveTintColor: '#007AFF',
    }}
    >
      <Tab.Screen
        name="Calender"
        component={CalendarScreen}
        options={{
          tabBarLabel: '캘린더',
          tabBarIcon: () => <Text>📅</Text>,
        }}
        />
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarLabel: '지출 내역',
          tabBarIcon: () => <Text>📃</Text>,
        }}
        />
    </Tab.Navigator>
  )
}

// 2. FAB(Floating Action Button)
function FloatingButton() {
  const navigation = useNavigation()
  
  return (
    <Pressable
      onPress={() => navigation.navigate("Register" as never)}
      style={fabStyles.button}
    >
      <Text style={fabStyles.plus}>+</Text>
    </Pressable>
  )
}

// FAB 플로팅 포함한 탭 구조
function MainWithFAB() {
  return (
    <>
      <TabNavigator />
      <FloatingButton />
    </>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* Tab이 루트 화면 */}
          <Stack.Screen
            name="Main"
            component={MainWithFAB}
            options={{ headerShown: false }}
          />
          {/* 등록 화면은 모달처럼 보여주기 */}
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ presentation: 'modal', title: '지출 등록'}}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

// FAB 스타일
const fabStyles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    backgroundColor: "#007AFF",
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 2, height: 2},
  },
  plus: {
    color: 'white',
    fontSize: 32,
    lineHeight: 36,
  }
})