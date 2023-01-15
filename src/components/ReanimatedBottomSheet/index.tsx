import React, {useCallback, useRef} from 'react';
import {View, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetRefProps} from './BottomSheet';

const ReanimatedBottomSheetScreen = () => {
  const ref = useRef<BottomSheetRefProps>(null);
  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref.current?.scrollTo(0);
    } else {
      ref.current?.scrollTo(-200);
    }
  }, []);

  return (
    <GestureHandlerRootView style={styles.gestureHandlerContainer}>
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <TouchableOpacity style={styles.button} onPress={onPress} />
        <BottomSheet ref={ref}>
          <View style={styles.contentContainer} />
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  gestureHandlerContainer: {flex: 1},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
  },
  contentContainer: {flex: 1, backgroundColor: 'orange'},
});

export default ReanimatedBottomSheetScreen;
