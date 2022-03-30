import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import ChatbotScreen from './src/screens/ChatbotScreen';
import DetailsScreen from './src/screens/DetailsScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'orange' }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Teste', 
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            }
          }} 
        />

        <Stack.Screen name="Chat" component={ChatbotScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
