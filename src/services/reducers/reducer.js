import { ADD_TO_CARD } from "../contants";
const initialState = {
	cardData: []
}
export default function cardIteam(state = [], action) {

	switch (action.type) {
		case ADD_TO_CARD:
			//console.warn("reducer", action);
			return [
				...state,
				{ cardData: action.data }
			]
			

		default:
			return state;

	}
}