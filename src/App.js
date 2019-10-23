import React, { Component } from "react";
import "./style.scss";

export class App extends Component {
	componentDidMount = () => {
		console.log("mounted");
		this.deepHouse();
	};

	deepHouse = () => {};

	render() {
		return <div className="hello">App</div>;
	}
}

export default App;
