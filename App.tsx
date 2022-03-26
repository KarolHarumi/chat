import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView } from 'react-native';
import Styles from './components/Styles';
import PersonalInfo from './components/PersonalInfo';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.scrollContainer}>
        <PersonalInfo />
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}
