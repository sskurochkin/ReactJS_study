import "./App.css";
import React, { Component } from "react";

class WhoAmI extends Component {
	
		state = {
			years: 27,
			text: "+++",
			position: "",
		};
	

	nextYear = () => {
		this.setState((state) => ({
			years: state.years + 1,
		}));
	};

	commitInputChanges = (e) => {
		this.setState({ position: e.target.value });
	};

	render() {
		const { position, years, text } = this.state;
		const { name, surname, link, fontColor } = this.props;

		let titleStyle = {
			fontSize: "34px",
			display: "block",
			color: fontColor,
			padding: 10,
			margin: 10,
			backgroundColor: "#FFDE00",
			fontFamily: "monospace",
		};

		
		return (
			<>
				<button > Delete name </button>

				<button onClick={this.nextYear}>{text}</button>
				<h1 style={titleStyle}>
					My name is {name}, surname - {surname}, age - {years},
					position -{position}
				</h1>
				<a href={link}> My profile </a>
				<form>
					<span>Введите должность</span>
					<input type='text' onChange={this.commitInputChanges} />
				</form>
			</>
		);
	}
}

const DynamicGreating = (props) => {
	return (
		<div className={"mb-3 p-3 border border-" + props.color}>
			{React.Children.map(props.children, (child) => {
				return React.cloneElement(child, {
					className: "shadow p-3 m-3 border rounded",
				});
			})}
		</div>
	);
};

const HelloGreatings = () => {
	return (
		<div
			style={{
				width: "400px",
				color: "red",
			}}>
			<DynamicGreating color={"primary"}>
				<h2>This text</h2>
			</DynamicGreating>
		</div>
	);
};



const Message = (props) => {
	return <h2>The counter is {props.counter}</h2>;
};

class Counter extends Component {
	state = {
		counter: 0,
	};

	changeCounter = () => {
		this.setState(({ counter }) => ({
			counter: counter + 1,
		}));
	};
	render() {
		return (
			<>
				<button
					className={"btn btn-primary"}
					onClick={this.changeCounter}>
					Click ME!
				</button>
				{this.props.render(this.state.counter)}
			</>
		);
	}
}

function App() {
	return (
		<div
			className='App'
			style={{
				maxWidth: "600px",
				margin: "50px auto",
			}}>
			<Counter render={(counter) => <Message counter={counter} />} />
			<HelloGreatings />
			<DynamicGreating color={"primary"}>
				<h2>This text</h2>
				<h2>This fkdjflkjdljf dfjdkfj</h2>
			</DynamicGreating>
			<WhoAmI fontColor='red' name='bill' surname='Smith' link='facebook.com' />
		</div>
	);
}

export default App;
