import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/home/Home';
import DrawerMenu from './src/screens/drawer/DrawerMenu';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
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
        drawerContent={()=><DrawerMenu/>}
        >
          <Drawer.Screen name="App" component={HomeScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </BottomSheetModalProvider>
  );
}

