import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';
import Styles from '../../components/Styles';
import PersonalInfo from '../../components/PersonalInfo';
import Chat from '../../components/Chat';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChatbotScreen = ( { route }: any) => {
  //const { screenNumber } = route.params;
  //console.log('chat', screenNumber);

  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const storageUsernameKey = "chatapp-username";
  const storageImageKey = "chatapp-image";

  const fetchPersonalData = async () => {
    let fetchedUsername = await AsyncStorage.getItem(storageUsernameKey);
    let username = fetchedUsername == null ? "" : fetchedUsername;

    let fetchedImage = await AsyncStorage.getItem(storageImageKey);
    let image = fetchedImage == null ? "" : fetchedImage;

    setUsername(username);
    setImage(image);
  }

  const onPersonalInfoClosed = async (name: string, image: string) => {
    setUsername(name);
    await AsyncStorage.setItem(storageUsernameKey, name);
    setImage(image);
    await AsyncStorage.setItem(storageImageKey, image);
  };

  if (isLoading) {
    return (
      <AppLoading
        startAsync={fetchPersonalData}
        onFinish={() => setIsLoading(false)}
        onError={(err) => console.log(err)}
      />
    );
  }

  let activeComponent = username != "" ? (
    <Chat username={ username } image={ image } /> 
  ) : (
    <PersonalInfo onClosed={onPersonalInfoClosed} />
  );

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollContainer}>
        { activeComponent }
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

export default ChatbotScreen;