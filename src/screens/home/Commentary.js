import React, { useCallback, useMemo, useRef } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import {plotinus_e3_c8_eng_text} from '../../data/data'
import { Extrapolate, interpolate, useValue } from 'react-native-reanimated';
const Commentary = (props) => {
  // hooks
  const bottomSheetRef = useRef(null);  
  // variables
  const snapPoints = useMemo(() => [80, '90%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        initialSnapIndex={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}     
        // backgroundComponent={()=><View style={{backgroundColor: 'green'}}/>}
        handleComponent={()=><Animated.View style={{...styles.handleContainer, marginBottom: 0}}>
            <View style={{backgroundColor: 'white', width: 27, height: 5, borderRadius: 5, marginBottom: 8}}/>
            <Text style={{...Fonts.Bold(15), color: 'white'}}>{props.title}</Text>
        </Animated.View>}
      >
        <View style={{backgroundColor: Colors.green, flex: 1}}>
            <ScrollView style={{padding: 12}}>
                <View style={{borderRadius: 20, overflow: 'hidden'}}>
                    <Text style={{backgroundColor: 'white', padding: 34}}>
                        {plotinus_e3_c8_eng_text}
                    </Text>
                </View>
            </ScrollView>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  handleContainer: {
    backgroundColor: Colors.green, 
    width: '100%', 
    height: 60, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderTopLeftRadius: 38, 
    borderTopRightRadius: 38,
    shadowOpacity: 0.15, 
    shadowOffset: {
        width: 4,
        height: -6
    },
    shadowRadius: 10
  }
});

export default Commentary;
