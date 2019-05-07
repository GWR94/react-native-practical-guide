import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const PlaceDetail = props => {
	return (
		<Modal
			onRequestClose={props.onModalClosed}
			visible={props.selectedPlace !== null}
			animationType="slide"
		>
			<View style={styles.modalContainer}>
				{props.selectedPlace && (
					<View>
						<Image
							style={styles.placeImage}
							source={props.selectedPlace.image}
						/>
						<Text style={styles.placeName}>
							{props.selectedPlace.name}
						</Text>
					</View>
				)}
				<View>
					<Button
						title="Delete"
						color="red"
						onPress={props.onItemDeleted}
					/>
					<Button title="Close" onPress={props.onModalClosed} />
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		margin: 22
	},
	placeImage: {
		width: "100%",
		height: 200
	},
	placeName: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 28
	}
});

export default PlaceDetail;
