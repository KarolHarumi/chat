import { View, Image, Text } from 'react-native';
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

  return (
    <View style={[Styles.flatListItem, { borderColor: username == chatItem.by ? "green" : "blue" }]}>
      <View style={ Styles.chatItemHeader }>
        <Image source={{ uri: "data:image/jpge;base64," + avatarImage }} style={ Styles.avatar } />

        <Text style={ Styles.smallItalicText }>
          {chatItem.by} at {new Date(chatItem.timeStamp).toLocaleTimeString}
        </Text>
      </View>

      <Text style={ Styles.chatText}>{chatItem.text}</Text>
    </View>
  );
}



export { ChatItem, RenderChatItem };