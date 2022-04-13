import React from "react";


function Home(props){
	console.warn("Home",props)
return(
	<div>
		<span>{props.data.length}</span>
	<div className="card" >
		<img className="card-img-top" src="" alt="Card image cap" />
	<div className="card-body">
		<h5 className="card-title">Card title</h5>
		<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		<button className="btn btn-primary" onClick={()=> props.addToCardHandler({name:"shirt",price:1000})}>Go somewhere</button>
	</div>
	</div>
	</div>
)
}
export default Home;