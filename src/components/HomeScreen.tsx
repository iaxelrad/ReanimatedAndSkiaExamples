import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Reanimated And Skia Examples</Text>
      <Button
        title="Go to Animated Card"
        onPress={() => navigation.navigate('AnimatedCard')}
      />
      <Button
        title="Go to Reanimated Bottom Sheet"
        onPress={() => navigation.navigate('ReanimatedBottomSheet')}
      />
      <Button
        title="Go to Grid Magnification"
        onPress={() => navigation.navigate('GridMagnification')}
      />
      <Button
        title="Go to Interpolate Colors"
        onPress={() => navigation.navigate('InterpolateColors')}
      />
      <Button
        title="Go to Animated FlatList"
        onPress={() => navigation.navigate('AnimatedFlatList')}
      />
      <Button
        title="Go to Delete Animation"
        onPress={() => navigation.navigate('DeleteAnimation')}
      />
      <Button
        title="Go to Gesture Handler Demo"
        onPress={() => navigation.navigate('GestureHandler')}
      />
      <Button
        title="Go to Tarot Animation Demo"
        onPress={() => navigation.navigate('TarotAnimation')}
      />
      <Button
        title="Go to Credit Card Scanner Demo"
        onPress={() => navigation.navigate('Recognizer')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
