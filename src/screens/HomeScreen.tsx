import { SafeAreaView, Text } from 'react-native';
import Styles from './../../components/Styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <Text>Hello HomeScreen!</Text>
    </SafeAreaView>
  );
}

export default HomeScreen;