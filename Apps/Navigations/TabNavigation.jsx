import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import MyCourseScreen from "../Screens/MyCourseScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import NewsScreen from "../Screens/NewsScreen";
import MessageScreen from "../Screens/MessageScreen"; // Импортируем экран сообщений
import Colors from "../Utils/Colors";
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarShowLabel: true, // Показывать названия вкладок
      }}
    >
      <Tab.Screen
        name="Главная"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>Главная</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Мои Курсы"
        component={MyCourseScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>Мои курсы</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Новости"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>Новости</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Сообщения" // Название вкладки для сообщений
        component={MessageScreen} // Компонент для экрана сообщений
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={24} color={color} /> // Иконка для вкладки сообщений
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>Сообщения</Text> // Название вкладки
          ),
        }}
      />
      <Tab.Screen
        name="Профиль"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>Профиль</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
