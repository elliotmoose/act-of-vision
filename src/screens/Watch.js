import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Header from '../components/Header';

class Watch extends Component {
  
    render() {
        const navigation = this.props.navigation;
        const bgColor = 'white'

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Header navigation={navigation} title='Watch' />
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, backgroundColor: bgColor }}>

                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default Watch;
