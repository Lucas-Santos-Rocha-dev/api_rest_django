import ListaDeAlunos from "./components/ListaDeAlunos";
import { Component } from 'react';
import "./assets/App.css"

class App extends Component{

	render(){
		return(
			<section>
				<ListaDeAlunos></ListaDeAlunos>
			</section>
		)
	}
}

export default App;
