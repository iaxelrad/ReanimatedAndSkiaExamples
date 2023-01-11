import React, {FC} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

type Props = {};

const BottomSheet: FC<Props> = () => {
  return (
    <View style={styles.bottomSheetContainer}>
      <View style={styles.line} />
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT / 1.5,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'gray',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
});
