import React, { Component } from 'react';
import { View, Text, SafeAreaView,Image,StyleSheet,ScrollView } from 'react-native';
import Header from '../components/Header';
import {about_plotinus} from '../data/data'
import Images from '../constants/Images';
import Fonts from '../constants/Fonts';
class Author extends Component {

    render() {
        const navigation = this.props.navigation;
        const bgColor = 'white'
        const { title, context, text } = about_plotinus;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header navigation={navigation} title='Plotinus' />
                <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: bgColor}}>
                    <ScrollView contentContainerStyle={{padding: 30, alignItems: 'center' }}>
                        <Text style={{...Fonts.BoldHelvetica(17),...styles.modalText, fontWeight: '900', width: '70%', textAlign: 'center'}}>{title}</Text>
                        <Image source={Images.plotinus_full} style={{alignSelf:"center",marginBottom:15,height:150,width:150}}></Image>
                        <Text style={{...styles.modalText,...Fonts.Italic(),padding:15}}>{context}</Text>
                        <Text style={{...styles.modalText,...Fonts.Text()}}>{text}</Text>
                    </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });


export default Author;
