import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/home/Home';
import DrawerMenu from './src/screens/drawer/DrawerMenu';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import AboutUs from './src/screens/AboutUs';
import Author from './src/screens/Author';
import Concepts from './src/screens/Concepts';
import Summaries from './src/screens/Summaries';
import Watch from './src/screens/Watch';

const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home"   screenOptions={{headerShown: false }}>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <BottomSheetModalProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="App"
        drawerContent={(props)=><DrawerMenu {...props}/>}
        >
          <Drawer.Screen name="App" component={HomeScreen} options={{headerShown: false}}/>
          <Drawer.Screen name="AboutUs" component={AboutUs} options={{headerShown: false}}/>
          <Drawer.Screen name="Author" component={Author} options={{headerShown: false}}/>
          <Drawer.Screen name="Concepts" component={Concepts} options={{headerShown: false}}/>
          <Drawer.Screen name="Summaries" component={Summaries} options={{headerShown: false}}/>
          <Drawer.Screen name="Watch" component={Watch} options={{headerShown: false}}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
}



//App
//Bottom Sheet Modal
//Navigation Container
//Drawer Navigator
//Drawer Screen
//Stack Navigator
//Stack Screen