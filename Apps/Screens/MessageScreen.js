import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native';
import CustomListItem from '../Components/CustomListItem';

const MessageScreen = ({navigation}) => {
useLayoutEffect(() => {
  navigation.setOptions({
    title:"Signal"

  })
}, [])

  return (
    <SafeAreaView>
      <ScrollView>
<CustomListItem/>
      </ScrollView>
    </SafeAreaView>
  );
};


export default MessageScreen;

const styles = StyleSheet.create({})
  