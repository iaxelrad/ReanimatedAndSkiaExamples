import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AnimatedCardScreen from './components/AnimatedCard';
import AnimatedFlatListScreen from './components/AnimatedFlatList';
import GridMagnificationScreen from './components/GridMagnification';
import HomeScreen from './components/HomeScreen';
import InterpolateColorsScreen from './components/InterpolateColors';
import ReanimatedBottomSheetScreen from './components/ReanimatedBottomSheet';

export type RootStackParamList = {
  Home: undefined;
  AnimatedCard: undefined;
  ReanimatedBottomSheet: undefined;
  GridMagnification: undefined;
  InterpolateColors: undefined;
  AnimatedFlatList: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="AnimatedFlatList">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="AnimatedCard" component={AnimatedCardScreen} />
        <RootStack.Screen
          name="ReanimatedBottomSheet"
          component={ReanimatedBottomSheetScreen}
        />
        <RootStack.Screen
          name="GridMagnification"
          component={GridMagnificationScreen}
        />
        <RootStack.Screen
          name="InterpolateColors"
          component={InterpolateColorsScreen}
        />
        <RootStack.Screen
          name="AnimatedFlatList"
          component={AnimatedFlatListScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
