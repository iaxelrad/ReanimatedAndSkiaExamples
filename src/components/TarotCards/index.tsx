import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from './Card';
import {useSharedValue} from 'react-native-reanimated';

const cards = [
  {
    source: require('./assets/death.png'),
  },
  {
    source: require('./assets/chariot.png'),
  },
  {
    source: require('./assets/high-priestess.png'),
  },
  {
    source: require('./assets/justice.png'),
  },
  {
    source: require('./assets/lover.png'),
  },
  {
    source: require('./assets/pendu.png'),
  },
  {
    source: require('./assets/tower.png'),
  },
  {
    source: require('./assets/strength.png'),
  },
];

export const assets = cards.map(card => card.source);

type Props = {};

const TarotAnimationScreen = (props: Props) => {
  const shuffleBack = useSharedValue(false);
  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <Card card={card} key={index} index={index} shuffleBack={shuffleBack} />
      ))}
    </View>
  );
};

export default TarotAnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
});
