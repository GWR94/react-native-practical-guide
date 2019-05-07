import {
	ADD_PLACE,
	DELETE_PLACE,
	SELECT_PLACE,
	DESELECT_PLACE
} from "../actions/types.action";
import placeImage from "../../assets/place.jpg";
const initialState = {
	places: [],
	selectedPlace: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PLACE:
			return {
				...state,
				places: state.places.concat({
					key: "" + Math.random(),
					name: action.placeName,
					image: placeImage
				})
			};
		case DELETE_PLACE:
			if (state.places.includes(placeName)) {
				return;
			}
			return {
				...state,
				places: state.places.filter(
					place => place.key !== state.selectedPlace.key
				),
				selectedPlace: null
			};
		case SELECT_PLACE:
			return {
				...state,
				selectedPlace: state.places.find(place => {
					return place.key === action.placesKey;
				})
			};
		case DESELECT_PLACE:
			return {
				...state,
				selectedPlace: null
			};
		default:
			return state;
	}
};

export default reducer;
