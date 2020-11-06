import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Fonts from '../../constants/Fonts';
import Images from '../../constants/Images';
import { EventRegister } from 'react-native-event-listeners'

class DrawerMenu extends Component {

	menuCategories = {
		["Read"]: ['Greek Original', 'English Translation'],
		["Learn"]: ['About Plotinus', 'The Enneads Summaries', 'Pre-requisite Concepts'],
		["About Us"]: [],
		["Watch"]: [],
	};

	dismiss() {
		this.props.navigation.closeDrawer();
	}

	onSelectMenuItem(menuItem) {
		switch (menuItem) {
			//greek
			case this.menuCategories.Read[0]:
				EventRegister.emit('ON_SELECT_LANGUAGE', 'GREEK');
				this.dismiss()
				break;

				//english
			case this.menuCategories.Read[1]:
				EventRegister.emit('ON_SELECT_LANGUAGE', 'ENGLISH');				
				this.dismiss()
				break;
		
			default:
				break;
		}
	}

	renderMenuItems() {
		return Object.keys(this.menuCategories).map(category => {
			let menuItems = this.menuCategories[category];
			return <View key={category}>
				<TouchableOpacity style={{marginLeft: 22}}><Text style={{...Fonts.Bold(), fontSize: 24, marginVertical: 8}}>{category}</Text></TouchableOpacity>
				{
					menuItems.map((menuItem) => {
						return <View key={menuItem}>
							<TouchableOpacity style={{marginLeft: 42}}><Text style={{...Fonts.Normal(), fontSize: 18, marginVertical: 6}} onPress={()=>this.onSelectMenuItem(menuItem)}>{menuItem}</Text></TouchableOpacity>
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
