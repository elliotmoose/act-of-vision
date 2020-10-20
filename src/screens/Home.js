import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const navigation = this.props.navigation;
        return (
            <SafeAreaView>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12}}>
                    <Button buttonStyle={{ backgroundColor: null, width: 50, height: 50, padding: 5 }} icon={<Icon name="menu" size={40} color="black" />} onPress={navigation.openDrawer} />
                    <Text style={{flex: 1, textAlign: 'center', fontWeight: '700', fontSize: 22}}> The Ennead </Text>
                    <Button buttonStyle={{ backgroundColor: null }} titleStyle={{color: 'black', fontWeight: '700', fontSize: 22}} title='III 8' onPress={navigation.openDrawer} />
                </View>
            </SafeAreaView>
        );
    }
}

export default Home;
