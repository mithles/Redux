import Home from "../components/Home";
import {connect} from 'react-redux'
import {addToCard } from "../services/actions/actions";

const mapStateToProps= state =>({
		data:state.cardIteam
})
const mapDispatchToProps=dispatch =>({
	addToCardHandler:data=>dispatch(addToCard(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);