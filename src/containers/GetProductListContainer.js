import GetProductList from "../components/GetProductList";
import {connect} from 'react-redux'
import {addToCard } from "../services/actions/actions";

const mapStateToProps= state =>({
		data:state.cardIteam
})
const mapDispatchToProps=dispatch =>({
	addToCardHandler:data=>dispatch(addToCard(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(GetProductList);