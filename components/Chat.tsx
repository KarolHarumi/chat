import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, ListRenderItem } from "react-native";
import { ChatItem } from "./ChatItem";
import { RenderChatItem } from './ChatItem';
import Styles from "./Styles";
type ChatProps = {
  username: string;
  image: string;
};

const Chat = ({ username, image }: ChatProps) => {
  let [chatInput, setChatInput] = useState("");
  let [chatItemList, setChatItemList] = useState<ChatItem[]>([]);

  const renderItem: ListRenderItem<ChatItem> = ({ item }) => (
    <RenderChatItem chatItem={item} username={username} />
  );

  return (
    <View style={ Styles.containerChat }>
      <Text>Hi {username}! You can chat here</Text>

      <FlatList 
        inverted
        data={chatItemList.sort((a, b) => b.timeStamp - a.timeStamp)}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <View style={ Styles.sendSection }>
        <TextInput 
          style={ Styles.inputMessage } 
          value={ chatInput } 
          onChangeText={(text) => setChatInput(text) } 
          placeholder={'Enter your message'}
        />

        <TouchableOpacity 
          style={ Styles.buttonMessage }
          onPress={() => {
            setChatItemList([
                ...chatItemList, 
                { 
                  id: Math.random().toString(36).substring(7), 
                  text: chatInput, 
                  image: image, 
                  timeStamp: Date.now(),
                  by: username,
                },
              ]);

              setChatInput("");
        }}>
          <Text style={ Styles.textButtonMessage }>Send</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

export default Chat;