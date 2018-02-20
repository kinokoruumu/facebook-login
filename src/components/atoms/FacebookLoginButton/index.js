import React, {Component} from 'react'
import {Text, TouchableOpacity, Alert} from 'react-native'
import { Facebook } from 'expo';

export default class FacebookLoginButton extends Component {
	constructor(props) {
		super(props)
	}

	logIn = async() => {
		const { type, token } = await Facebook.logInWithReadPermissionsAsync('167199147262200', {
			permissions: ['public_profile'],
		});
		if (type === 'success') {
			// Get the user's name using Facebook's Graph API
			const response = await fetch(
				`https://graph.facebook.com/me?access_token=${token}`);
			Alert.alert(
				'Logged in!',
				`Hi ${(await response.json()).name}!`,
			);
		}

		if (type === 'cancel') {
			Alert.alert(
				'cancel',
			);
		}
	}

	render() {
		return (
			<TouchableOpacity
				onPress={() => this.logIn()}
			>
				<Text>Login</Text>
			</TouchableOpacity>
		)
	}
}