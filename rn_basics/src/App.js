/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import placeImage from "./assets/place.jpg";
import PlaceList from "./components/PlaceList.js";
import PlaceInput from "./components/PlaceInput";
import PlaceDetail from "./components/PlaceDetail";
import {
	addPlace,
	deletePlace,
	deselectPlace,
	selectPlace
} from "./store/actions/actions";

class App extends Component {
	placesSubmitHandler = placeName => {
		this.props.onAddPlace(placeName);
	};

	placeDeletedHandler = () => {
		this.props.onDeletePlace();
	};

	modalClosedHandler = () => {
		this.props.onDeselectPlace();
	};

	placeSelectedHandler = key => {
		this.props.onSelectPlace(key);
	};

	render() {
		return (
			<View style={styles.container}>
				<PlaceDetail
					onItemDeleted={this.placeDeletedHandler}
					onModalClosed={this.modalClosedHandler}
					selectedPlace={this.props.selectedPlace}
				/>
				<PlaceInput onPlacesSubmit={this.placesSubmitHandler} />
				<PlaceList
					places={this.props.places}
					onItemSelected={this.placeSelectedHandler}
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

const mapStateToProps = state => {
	return {
		places: state.places.places,
		selectedPlace: state.places.selectedPlace
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onAddPlace: name => dispatch(addPlace(name)),
		onSelectPlace: key => dispatch(selectPlace(key)),
		onDeletePlace: () => dispatch(deletePlace()),
		onDeselectPlace: () => dispatch(deselectPlace())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
