/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import PlaceList from "./src/components/PlaceList";
import PlaceInput from "./src/components/PlaceInput";
import { View, StyleSheet } from "react-native";

export default class App extends Component {
	state = {
		places: []
	};

	placesSubmitHandler = placeName => {
		if (placeName.trim() === "") {
			return;
		}
		this.setState(prevState => {
			if (prevState.places.includes(placeName)) {
				return;
			}
			return {
				places: prevState.places.concat({
					key: "" + Math.random(),
					value: placeName
				})
			};
		});
	};

	removePlaceHandler = key => {
		this.setState(prevState => {
			return {
				places: prevState.places.filter(place => place.key !== key)
			};
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<PlaceInput
					onPlacesSubmit={this.placesSubmitHandler}
					placeName={this.state.placeName}
				/>
				<PlaceList
					places={this.state.places}
					onItemPressed={i => this.removePlaceHandler(i)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 26,
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "#F5FCFF"
	}
});
