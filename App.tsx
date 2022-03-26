import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';
import Styles from './components/Styles';
import PersonalInfo from './components/PersonalInfo';
import Chat from './components/Chat';
import { useState } from 'react';

export default function App() {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");

  const onPersonalInfoClosed = (name: string, image: string) => {
    setUsername(name);
    setImage(image);
  };

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
