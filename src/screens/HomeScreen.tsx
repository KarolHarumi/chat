import { Button, SafeAreaView, Text } from 'react-native';
import Styles from './../../components/Styles';

const HomeScreen = ({ navigation }: any ) => {
  return (
    <SafeAreaView style={Styles.container}>
      <Text>Hello HomeScreen!</Text>
      
      <Button title={'Go to Chatbot'} onPress={() => { navigation.navigate("Chat") }} />
      <Button title={'Go to Details'} onPress={() => { navigation.navigate("Details") }} />
    </SafeAreaView>
  );
}

export default HomeScreen;