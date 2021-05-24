import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./assets/App.css"

import Header from "./components/Header";
import Perfil from "./components/Perfil";
import ListaDeAlunos from "./components/ListaDeAlunos";
import NovoAluno from "./components/NovoAluno";

class App extends Component{
	render(){
		return(
			<Container>
				<Row>
					<Col sm={12}>
						<Header></Header>
						
					</Col>
				</Row>

				<Row>
					<Col sm={4}>
						<Perfil></Perfil>
					</Col>

					<Col sm={8}>
						<ListaDeAlunos></ListaDeAlunos>
						<NovoAluno></NovoAluno>
					</Col>
				</Row>
				
			</Container>
		)
	}
}

export default App;
