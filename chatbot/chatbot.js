import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const chatbot = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Carregar mensagens existentes do servidor ou local storage
    setMessages([
      {
        _id: 1,
        text: 'Olá! Como posso ajudar?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://media-public.canva.com/ZDdF0/MAF9t0ZDdF0/1/tl.png',
        },
      },
    ]);
  }, []);

  const onSend = newMessages => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
    // Enviar as novas mensagens para o servidor ou local storage
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default chatbot;
