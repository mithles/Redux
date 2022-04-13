import {ADD_TO_CARD} from '../contants'
export const addToCard = (data) => {
	console.warn("action",data)
return{
	type:ADD_TO_CARD,
	data:data
}
}