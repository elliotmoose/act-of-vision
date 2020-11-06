import React, { Component, useMemo } from 'react';
import { View, Text, SafeAreaView, Alert, FlatList, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';
import { plotinus_e3_c8_eng, plotinus_e3_c8_eng_by_para, makeHyperlink, plotinus_e3_c8_greek } from '../../data/data';
import Commentary from './Commentary';
import TextHelper from '../../helpers/TextHelper';
import { EventRegister } from 'react-native-event-listeners';
import Header from '../../components/Header';
import WordModal from '../wordModal/WordModal';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'ENGLISH',
            modalVisible : false,
            keyWord : '',
            currentParagraphIndex: 0
        };
    }

    componentDidMount() {
        this.selectLanguageEventListener = EventRegister.addEventListener('ON_SELECT_LANGUAGE', (language)=> {
            this.setState({language});
        })
    }

    componentWillUnmount() {
        EventRegister.removeEventListener(this.selectLanguageEventListener);
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

            let onPress = segment.ref ? ()=>{
                this.setState({modalVisible:true})
                this.setState({keyWord:segment.ref})

            } : null;

            return <Text key={`${i}`} style={style} onPress={onPress}>
                {segment.text}
            </Text> 
        })
    }
    
    onViewableItemsChanged = ({ viewableItems }) => {
        let currentParagraph = 0;
        viewableItems.forEach(item => {
            let paragraphIndex = item.index-1; //the first item is the header
            if(paragraphIndex>currentParagraph) {
                currentParagraph = paragraphIndex;
            }
        });

        this.setState({currentParagraphIndex: currentParagraph});
    }

    render() {
        const navigation = this.props.navigation;
        const bgColor = 'white'
        let { title, subtitle, byParagraph: textByParagraph } = this.state.language == 'ENGLISH' ? plotinus_e3_c8_eng : plotinus_e3_c8_greek;

        return (
            <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
                <Header navigation={navigation} title='The Enneads'/>
                <View style={{flex: 1}}> 
                    <View style={{flex: 1, backgroundColor: bgColor}}>
                        <FlatList
                            style={{}} contentContainerStyle={{alignItems: 'center', padding: 24, paddingLeft: 12, paddingRight: 30}}
                            data={['header', ...textByParagraph]}
                            keyExtractor={(item, index)=>`${index}`}
                            renderItem={(eachItem) => {
                                if (eachItem.item == 'header') {
                                    return <View style={{ width: '70%', marginBottom: 20 }}>
                                        <Text style={{ ...Fonts.BoldHelvetica(19), fontWeight: '900', textAlign: 'center' }}>{title}</Text>
                                        <Text style={{ ...Fonts.Italic(13), textAlign: 'center', margin: 15, marginTop: 18 }}>{subtitle}</Text>
                                    </View>
                                }

                                let { item: paragraph, index } = eachItem;
                                let i = index - 1;
                                let chapterNumber = TextHelper.romanize(i + 1);
                                return <View style={{ marginBottom: 32, marginTop: 10, flexDirection: 'row', minWidth: '100%' }}>
                                    <Text style={{ ...Fonts.Bold(18), color: Colors.hyperlink, marginRight: 16, marginTop: 2, width: 24, textAlign: 'right' }}>{chapterNumber}</Text>
                                    <Text style={{ lineHeight: 24, ...Fonts.Normal(17), textAlign: 'justify', flex: 1}}>
                                        {this.renderParagraph(paragraph)}
                                    </Text>
                                </View>
                            }}
                            onViewableItemsChanged={this.onViewableItemsChanged}
                        />
                    </View>  
                    <View style={{height: 28, backgroundColor: bgColor}}>
                        <Commentary paragraphIndex={this.state.currentParagraphIndex}/>
                    </View>                    
                </View>
                <View style={{position: 'absolute', height: Dimensions.get('screen').height, width: '100%', backgroundColor: 'black', opacity: this.state.modalVisible ? 0.4 : 0, zIndex:9999}} pointerEvents='none'/>
                <WordModal closeModal={()=>this.setState({modalVisible: false})} modalVisible={this.state.modalVisible} keyWord={this.state.keyWord}/>
            </SafeAreaView>
        );
    }
}

export default Home;
