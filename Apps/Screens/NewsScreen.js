import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import { getArticles } from "../Screens/service/news"; // Импорт функции getArticles для получения новостей
import DataItem from "../Components/DataItem"; // Импорт компонента DataItem для отображения элементов данных
import Modal from "../Components/Modal"; // Импорт компонента Modal для отображения модального окна

// Компонент новостной страницы
const NewsScreen = () => {
  const [isLoading, setIsLoading] = useState(true); // Состояние для отображения индикатора загрузки
  const [data, setData] = useState(null); // Состояние для хранения полученных данных о новостях
  const [modalVisible, setModalVisible] = useState(false); // Состояние для отображения/скрытия модального окна
  const [modalArticleData, setModalArticleData] = useState({}); // Состояние для хранения данных выбранной новости

// Обработчик нажатия на элемент данных для отображения модального окна с подробной информацией
const handleItemDataOnPress = (articleData) => {
  setModalVisible(true); // Показать модальное окно
  setModalArticleData(articleData); // Установить данные выбранной новости
}

// Обработчик закрытия модального окна
const handleModalClose = () => {
  setModalVisible(false); // Скрыть модальное окно
  setModalArticleData({}); // Сбросить данные выбранной новости
}
 // Получение новостей при загрузке компонента
useEffect(() => {
  const fetchData = async () => {
    try {
      const articlesData = await getArticles(); // Получение данных о новостях
      setIsLoading(false); // Завершение загрузки
      setData(articlesData); // Установка полученных данных
    } catch (error) {
      console.error('Error fetching articles:', error); // Обработка ошибки загрузки данных
      setIsLoading(false); // Завершение загрузки в случае ошибки
      // Обработка отображения ошибки
    }
  };

  fetchData(); // Вызов функции получения данных
}, []);

  let view = isLoading ? (
    <View style={styles.loadingContainer}>
      <ActivityIndicator animating={isLoading} color="#00f0ff" />
      <Text style={styles.loadingText}>Загрузка..</Text>
    </View>
  ) : (
    <ScrollView>
      {data && data.map((item, index) => (
        <DataItem key={index} onPress={handleItemDataOnPress} data={item} />
      ))}
    </ScrollView>
  );

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>НОВОСТИ IMED</Text>
      {view}
      <Modal 
        showModal={modalVisible}
        articleData={modalArticleData}
        onClose={handleModalClose}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 10,
  },
  title: {
    marginTop:50,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default NewsScreen;
