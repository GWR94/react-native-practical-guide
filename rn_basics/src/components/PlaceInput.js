import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const PlaceInput = props => {
	const [placeName, setPlaceName] = useState("");

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.placeInput}
				placeholder="An awesome place"
				value={placeName}
				onChangeText={place => setPlaceName(place)}
			/>
			<Button
				title="Add"
				onPress={() => {
					props.onPlacesSubmit(placeName);
					setPlaceName("");
				}}
				style={styles.placeButton}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	placeButton: {
		width: "30%"
	},
	placeInput: {
		width: "70%"
	}
});

export default PlaceInput;
