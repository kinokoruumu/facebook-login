import React from 'react';
import { StyleSheet, View } from 'react-native';
import FacebookLoginButton from "./src/components/atoms/FacebookLoginButton";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
				<FacebookLoginButton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center'
  },
});
