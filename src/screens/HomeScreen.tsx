import { Button, SafeAreaView, Text } from 'react-native';
import Styles from './../../components/Styles';

const HomeScreen = ({ navigation, route }: any ) => {
  console.log(route);
  const parameters = route.params;
  console.log('home', parameters);

  return (
    <SafeAreaView style={Styles.container}>
      <Text>Hello HomeScreen!</Text>

      <Button title={'Go to Chatbot'} onPress={() => { navigation.navigate("Chat", { screenNumber: 1 }) }} />
      <Button title={'Go to Details'} onPress={() => { navigation.navigate("Details") }} />
    </SafeAreaView>
  );
}

export default HomeScreen;