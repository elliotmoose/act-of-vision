import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Alert, Modal, TouchableHighlight, TouchableOpacity, View, StyleSheet, Text, Animated, Image } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import {dictionary} from '../../data/data'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Images from '../../constants/Images';
//Dictionary Data will be recieved in props
const WordModal = (props) => {
    const keyWord = props.keyWord;
    const dictRef = dictionary[props.keyWord];

    const { 
        greek: keyWord_greek, 
        alphabets: keyWord_alphabets, 
        greekLatin: keyWord_greekLatin,
        definition: keyWord_definition,
        intuition: keyWord_intuition
    } = dictRef  || {
        greek: '',
        alphabets: '',
        greekLatin: '',
        definition: '',
        intuition: '',
    }

    // const keyWord_greek = dictionary[props.keyWord].greek
    // const keyWord_alphabets = dictionary[props.keyWord].alphabets
    // const keyWord_armstrong = dictionary[props.keyWord].armstrong;
    // const keyWord_definition = dictionary[props.keyWord].alphabets;
    // const keyWord_intuition = dictionary[props.keyWord].intuition;

    
    
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        >
        <View style={{flex:1,justifyContent: "center",alignItems: "center",padding: 25}}>
          <View style={styles.modalView}>
            <ScrollView contentContainerStyle={{padding:15}}>
            <Image source={Images.spectacles} style={{alignSelf:"center",width:50,height:50,marginBottom:5}}></Image>
            <Text style={{...Fonts.BoldHelvetica(), ...styles.modalText,fontSize:20,fontWeight:"900",textTransform:"capitalize",marginBottom:5}}>{keyWord}</Text>
            <Text style={{...Fonts.BoldHelvetica(),...styles.modalText,fontSize:20,fontWeight:"900",marginBottom:5}}>{keyWord_greek}</Text>
            <Text style={{...Fonts.NormalHelvetica(),...styles.modalText}}>(Pronounced - {keyWord_greekLatin})</Text>
            <Text style={{...styles.modalText,...Fonts.Normal(), textAlign:"justify"}}><Text style={{...Fonts.Bold()}}>Definition:</Text> {keyWord_definition}</Text>
            <Text style={{...styles.modalText,textAlign:"justify",...Fonts.Normal()}}><Text style={{...Fonts.Bold()}}>Intuition:</Text> {keyWord_intuition}</Text>
            </ScrollView>
            <View style={{position: 'absolute', top: 0, right:0}}>
              <TouchableOpacity
                style={{backgroundColor: null,alignItems:"center", justifyContent:'center', width: 45, height: 45}}
                onPress={() => {
                    props.closeModal();
                }}
                >
                <Icon name="cancel" size={35} color="black" />
                </TouchableOpacity>
          </View>
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({

    modalView: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      maxHeight:400,
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });


export default WordModal;