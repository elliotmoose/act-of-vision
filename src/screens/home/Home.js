import React, { Component, useMemo } from 'react';
import { View, Text, SafeAreaView, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { plotinus_e3_c8, plotinus_e3_c8_eng_by_para, makeHyperlink } from '../../data/data';
import Commentary from './Commentary';
import TextHelper from '../../helpers/TextHelper';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getTextByChapter() {
        return plotinus_e3_c8_eng_by_para;
    }

    renderParagraph(paragraph) {
        let segments = makeHyperlink(paragraph);
        return segments.map((segment, i) => {

            let hyperlinkStyle = {
                color: Colors.hyperlink,
                textDecorationLine: 'underline'
            }
            
            let style = segment.ref ? hyperlinkStyle : null;

            let onPress = segment.ref ? ()=>Alert.alert(segment.ref) : null;

            return <Text key={`${i}`} style={style} onPress={onPress}>
                {segment.text}
            </Text> 
        })
    }

    render() {
        const navigation = this.props.navigation;
        const bgColor = 'white'
        let { title, subtitle, byParagraph: textByParagraph } = plotinus_e3_c8;

        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12}}>
                    <Button buttonStyle={{ backgroundColor: null, width: 50, height: 50, padding: 5 }} icon={<Icon name="menu" size={40} color="black" />} onPress={navigation.openDrawer} />
                    <Text style={{flex: 1, textAlign: 'center', fontWeight: '700', fontSize: 22}}> The Ennead </Text>
                    <Button buttonStyle={{ backgroundColor: null }} titleStyle={{color: 'black', fontWeight: '700', fontSize: 22}} title='III 8' onPress={navigation.openDrawer} />                
                </View>
                <View style={{flex: 1}}> 
                    <View style={{flex: 1, backgroundColor: bgColor}}>
                        <ScrollView style={{padding: 24, paddingLeft: 12, paddingRight: 30}} contentContainerStyle={{alignItems: 'center'}}>
                            <View style={{width: '70%', marginBottom: 20}}>
                                <Text style={{...Fonts.BoldHelvetica(19), fontWeight: '900', textAlign: 'center'}}>{title}</Text>
                                <Text style={{...Fonts.Italic(13), textAlign: 'center', margin: 15, marginTop: 18}}>{subtitle}</Text>
                            </View>

                            {textByParagraph.map((paragraph, i)=>{
                                let chapterNumber = TextHelper.romanize(i+1);
                                return <View key={`${i}`} style={{marginBottom: 32, marginTop: 10, flexDirection: 'row'}}>
                                    <Text style={{...Fonts.Bold(18), color: Colors.hyperlink, marginRight: 16, marginTop: 2, width: 24, textAlign: 'right'}}>{chapterNumber}</Text>
                                    <Text style={{lineHeight: 24, ...Fonts.Normal(17), textAlign: 'justify', flex: 1}}>
                                        {this.renderParagraph(paragraph)}
                                    </Text>
                                </View>
                            })}
                        </ScrollView>
                        
                    </View>  
                    <View style={{height: 28, backgroundColor: bgColor}}>
                        <Commentary title='Para. I Commentary'/>
                    </View>                    
                </View>
            </SafeAreaView>
        );
    }
}

export default Home;
