import React, { Component } from 'react';
import { View, Text, SafeAreaView,Image,StyleSheet,ScrollView } from 'react-native';
import Header from '../components/Header';
import {about_us_sutd} from '../data/data'
import Images from '../constants/Images';
import Fonts from '../constants/Fonts';
class AboutUs extends Component {
  
    render() {
        const navigation = this.props.navigation;
        const bgColor = 'white'

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header navigation={navigation} title='About Us' />
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, backgroundColor: bgColor}}>
                    <ScrollView contentContainerStyle={{padding: 30, alignItems: 'center' }}>
                        <Image source={Images.sutd} style={{alignSelf:"center",marginBottom:15,height:80,width:200}}></Image>
                        <Text style={{...styles.modalText,...Fonts.Italic(),padding:15}}>{about_us_sutd.context}</Text>
                        <Text style={{...styles.modalText,...Fonts.Text()}}>{about_us_sutd.text}</Text>
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

export default AboutUs;
