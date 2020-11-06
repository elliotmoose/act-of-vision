import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import Fonts from '../constants/Fonts';
import Images from '../constants/Images';
import { plotinus_e3_c8_eng } from '../data/data';

class Summaries extends Component {

    render() {
        const navigation = this.props.navigation;
        const bgColor = 'white'
        const images = [Images.tree, Images.spectacles, Images.hexagon]

        const { title, summary } = plotinus_e3_c8_eng;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header navigation={navigation} title='Summaries' />
                <View style={{ flex: 1, backgroundColor: bgColor}}>
                    <ScrollView contentContainerStyle={{padding: 30, alignItems: 'center' }}>
                        <Text style={{...Fonts.BoldHelvetica(17), fontWeight: '900', width: '70%', textAlign: 'center'}}>{title}</Text>
                        <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'space-between', marginVertical: 20}}>
                            {images.map((image, i)=><Image key={`${i}`} source={image} style={{width: 34, aspectRatio: 1}}/>)}
                        </View>
                        <Text style={{...Fonts.Text()}}>{summary}</Text>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default Summaries;
