// App.js
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import InputNumber from './pages/input-number';
import ResultMedic from './pages/result-medic';
import DetailMedic from './pages/detail-medic';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const DetailsPage = () => {
    return <View>Test 1</View>;
  };

  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            let iconName;

            if (route.name === 'Input Number') {
              iconName = 'home';
            } else if (route.name === 'Hasil Medis') {
              iconName = 'briefcase-medical';
            }

            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Input Number"
          component={InputNumber}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name="Hasil Medis"
          component={ResultMedic}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailMedic"
          component={DetailMedic}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
