import React, { Component } from 'react'
import { Box, Text } from 'react-native-design-utility'
import { StatusBar } from 'react-native'

class HomeScreen extends Component {
	state = {}

	render() {
		console.log('Home Screen')
		return (
			<Box f={1} center>
				<StatusBar hidden={true} barStyle='light-content' />
				<Text>Home Screen</Text>
			</Box>
		)
	}
}

export default HomeScreen
