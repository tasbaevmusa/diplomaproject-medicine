import { View, Text } from 'react-native'
import React from 'react';
import{ Avatar, ListItem } from 'react-native-elements';

export default function CustomListItem({id, chatName, enterChat}) {
  return (
    <ListItem>
    <Avatar
        rounded
        source={{
            uri:
            "https://leanbase.de/autoimg/uploads/w3200-h3200-c/grktmuu5gmdhwvnt4df7rsbs5uba4qqbwaven9g5.jpg"
        }}
    />
    <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800"}}>
            Imed Prod
        </ListItem.Title>
        <ListItem.Subtitle
        numberOfLines={1}
            ellipsizeMode="tail">
            Новые сообщение
        </ListItem.Subtitle>
    </ListItem.Content>
    </ListItem>
  )
}