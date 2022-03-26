import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Styles from './components/Styles';
import PersonalInfo from './components/PersonalInfo';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <PersonalInfo />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
