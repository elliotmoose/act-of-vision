import React, { Component } from 'react';
import { View, Text, SafeAreaView,Image,StyleSheet,FlatList } from 'react-native';
import Header from '../components/Header';
import { concepts_page } from '../data/data';
import Images from '../constants/Images';
import Fonts from '../constants/Fonts';
import TextHelper from '../helpers/TextHelper';
import Colors from '../constants/Colors';

class Concepts extends Component {
  
    render() {
        const navigation = this.props.navigation;
        const bgColor = 'white'
        const { context,concepts } = concepts_page;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header navigation={navigation} title='Concepts' />
                <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: bgColor}}>
                    <FlatList contentContainerStyle={{padding: 30, alignItems: 'center' }}
                    style={{}} contentContainerStyle={{alignItems: 'center', padding: 24, paddingLeft: 12, paddingRight: 30}}
                    data={['header', ...concepts]}
                    keyExtractor={(item, index)=>`${index}`}
                    renderItem={(eachItem) => {
                        if (eachItem.item == 'header') {
                            return <View style={{marginBottom: 20 }}>
                                <Image source={Images.concepts} style={{alignSelf:"center",marginBottom:15,height:80,width:80}}></Image>
                                <Text style={{...styles.modalText,...Fonts.Italic(),padding:15}}>{context}</Text>
                            </View>
                        }

                        let { item: concept, index } = eachItem;
                        let i = index - 1;
                        let conceptNumber = TextHelper.romanize(i + 1);
                        return <View style={{ marginBottom: 32, marginTop: 10, flexDirection: 'row', minWidth: '100%',paddingHorizontal:18 }}>
                            <Text style={{ ...Fonts.Bold(18), color: Colors.hyperlink, marginRight: 16, marginTop: 2, width: 24, textAlign: 'right' }}>{conceptNumber}</Text>
                            <Text style={{ lineHeight: 24, ...Fonts.Bold(20), textAlign: 'justify', flex: 1}}>
                                {concept}
                            </Text>
                        </View>
                    }}
                    onViewableItemsChanged={this.onViewableItemsChanged}
                >
                        
                    </FlatList>
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

export default Concepts;
