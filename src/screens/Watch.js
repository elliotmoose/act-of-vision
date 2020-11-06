import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, FlatList, Dimensions } from 'react-native';
import Header from '../components/Header';
import Images from '../constants/Images';
import { videoLinks } from '../data/data';
import YoutubePlayer from "react-native-youtube-iframe";
import Fonts from '../constants/Fonts';
import TextHelper from '../helpers/TextHelper';
import Colors from '../constants/Colors';


class Watch extends Component {

    render() {
        const navigation = this.props.navigation;
        const bgColor = 'white'
        const videos = videoLinks;

        let width = 0.8*Dimensions.get('screen').width
        let height = width/16*9;  

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header navigation={navigation} title='Watch' />
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <FlatList
                    style={{flex: 1}}
                    contentContainerStyle={{alignItems: 'center', minWidth: '100%'}}
                    data={['header',...videos]}
                    keyExtractor={(item, i)=> `${i}`}
                    renderItem={(eachItem)=>{
                        if(eachItem.item == 'header') {
                            return <View style={{alignItems: 'center'}}>
                                <Image source={Images.play} style={{ height: 50, aspectRatio: 1, marginTop: 22, marginBottom: 28 }} />
                                <Text style={Fonts.Italic(12)}>View lectures from Professor Paolo Di Leo</Text>
                            </View>                                                            
                        }

                        let { title, videoId } = eachItem.item;
                        return <View style={{ width, height, marginTop: 30, marginBottom: 28, flexDirection: 'row'}}>
                            <Text style={{...Fonts.Bold(16), color: Colors.hyperlink, marginTop: 19, textAlign: 'right', marginRight: 15}}>{TextHelper.romanize(eachItem.index+1)}</Text>
                            <View style={{flex: 1}}>
                                <Text style={{...Fonts.NormalHelvetica(15), marginVertical: 20}}>{title}</Text>
                                <YoutubePlayer
                                    height={height}
                                    videoId={videoId}
                                    initialPlayerParams={{}}
                                    webViewStyle={{backgroundColor: 'lightgray' }}
                                />
                            </View>

                        </View>
                    }}

                    />
                </View>
            </SafeAreaView>
        );
    }
}

export default Watch;
