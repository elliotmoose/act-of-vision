import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Fonts from '../../constants/Fonts';
import Images from '../../constants/Images';
import { EventRegister } from 'react-native-event-listeners'

class DrawerMenu extends Component {

	// menuCategories = {
	// 	["Read"]: ['Greek Original', 'English Translation'],
	// 	["Learn"]: ['About Plotinus', 'The Enneads Summaries', 'Pre-requisite Concepts'],
	// 	["About Us"]: [],
	// 	["Watch"]: [],
	// };


	menuCategories = [
		{
			text: 'Read',
			value: 'Read',
			items: [{
				text: 'Greek Original',
				value: 'GREEK'
			},
			{
				text: 'English Translation',
				value: 'ENGLISH'
			}]
		},
		{
			text: 'Learn',
			value: 'Learn',
			items: [{
				text: 'About Plotinus',
				value: 'Author'
			},
			{
				text: 'The Enneads Summaries',
				value: 'Summaries'			
			},
			{
				text: 'Pre-requisite Concepts',
				value: 'Concepts'
			}]
		},
		{
			text: 'About Us',
			value: 'AboutUs'
		},
		{
			text: 'Watch',
			value: 'Watch'
		},
	]

	dismiss() {
		this.props.navigation.closeDrawer();
	}
	
	navigate(target) {		
		this.props.navigation.navigate(target);
	}

	onSelectMenuItem(item) {
		switch (item.value) {
			//greek
			case 'AboutUs':
			case 'Watch':
			case 'Summaries':
			case 'Concepts':
			case 'Author':
				this.navigate(item.value);
				break;
			case 'GREEK':
			case 'ENGLISH':
				this.navigate('App');
				EventRegister.emit('ON_SELECT_LANGUAGE', item.value);
				this.dismiss()
				break;
			default:
				break;
		}
	}

	renderMenuItems() {
		return this.menuCategories.map(category => {
			let items = category.items || [];
			return <View key={category.value}>
				<TouchableOpacity style={{marginLeft: 22}}><Text style={{...Fonts.Bold(), fontSize: 24, marginVertical: 8}} onPress={()=>this.onSelectMenuItem(category)}>{category.text}</Text></TouchableOpacity>
				{
					items.map((item) => {
						return <View key={item.value}>
							<TouchableOpacity style={{marginLeft: 42}}><Text style={{...Fonts.Normal(), fontSize: 18, marginVertical: 6}} onPress={()=>this.onSelectMenuItem(item)}>{item.text}</Text></TouchableOpacity>
						</View>
					})
				}
			</View>
		})
	}

	render() {
		let titleStyle = Fonts.Normal();
		return (
			<SafeAreaView style={{flex: 1}}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginBottom: 20 }}>
					<Text style={{ ...Fonts.Normal(), fontSize: 15 }}> E-nneads Co. </Text>
					<TouchableOpacity onPress={() => { }}><Text style={{ fontFamily: 'helvetica neue', fontWeight: '900', fontSize: 24 }} onPress={()=>this.dismiss()}>X</Text></TouchableOpacity>
				</View>
				{this.renderMenuItems()}
				<Image style={{position: 'absolute', bottom: -30, left: -75}} source={Images.plotinus}/>
			</SafeAreaView>
		);
	}
}

export default DrawerMenu;
