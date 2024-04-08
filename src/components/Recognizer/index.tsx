import {NavigationProp, useIsFocused} from '@react-navigation/native';
import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CardScanner, {CardScannerResponse} from 'rn-card-scanner';
import type {RootStackParamList} from '../../App';

interface RecognizerScreenProps {
  navigation: NavigationProp<RootStackParamList>;
}

const RecognizerScreen = ({navigation}: RecognizerScreenProps) => {
  const cardScannerRef = useRef(null);
  const isFocused = useIsFocused();
  const {bottom: safeBottom} = useSafeAreaInsets();

  const _onPressAddManually = (params?: CardScannerResponse) => {
    cardScannerRef?.current?.toggleFlash();
    console.log('Result', params);
    navigation.navigate('Result', params);
  };

  return (
    <View style={styles.container}>
      <CardScanner
        ref={cardScannerRef}
        disabled={!isFocused}
        style={styles.scanner}
        didCardScan={_onPressAddManually}
        useAppleVision
      />
      <TouchableOpacity
        onPress={() => _onPressAddManually()}
        style={[styles.addBtn, {marginBottom: safeBottom + 16}]}>
        <Text style={styles.addText}>Add manually</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecognizerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  scanner: {
    flexGrow: 1,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 32,
    backgroundColor: '#CCCCCC',
  },
  addBtn: {
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: '#293462',
    alignSelf: 'center',
  },
  addText: {fontSize: 16, color: '#293462', textAlign: 'center'},
});
