import { useEffect, useState } from 'react';
import { View, Image, Text, Animated, Easing } from 'react-native';
import Styles from './Styles';

interface ChatItem {
  id: string;
  text: string;
  image: string;
  timeStamp: number;
  by: string;
}

interface Props {
  chatItem: ChatItem;
  username: string;
};

const RenderChatItem = ({ chatItem, username }: Props) => {
  let unknownAvatarImage = "";
  let avatarImage = chatItem.image ?? unknownAvatarImage;

  let [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 400,
      easing: (number) => Easing.ease(number),
      useNativeDriver: true,
    }).start();
  }); 

  return (
    <Animated.View 
      style={[
        Styles.flatListItem, 
        { opacity: animatedValue },
        { transform: [{ scale: animatedValue }] },
      ]}>

      <View style={ Styles.message }>
        <Image source={{ uri: "data:image/jpge;base64," + avatarImage }} style={ Styles.smallAvatar } />
        <Text style={[ Styles.flatListItem, { color: username == chatItem.by ? "#404040" : "#D26E97" } ]}>
          By {chatItem.by} at {new Date(chatItem.timeStamp).toLocaleTimeString()} 
        </Text>
        <Text style={ Styles.chatText}>{chatItem.text}</Text>
      </View>
    </Animated.View>
  );
}

export { ChatItem, RenderChatItem };