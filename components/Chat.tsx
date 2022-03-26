import React from "react";
import { View, Text, Image } from "react-native";

type ChatProps = {
  username: string;
  image: string;
};

const Chat = ({ username, image }: ChatProps) => {
  return (
    <View>
      <Text>Hi {username}! You can chat here</Text>
    </View>
  );
};

export default Chat;