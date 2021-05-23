import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./assets/App.css"

import ListaDeAlunos from "./components/ListaDeAlunos";
import Titulo from "./components/Titulo";
import BotaoNovoAluno from "./components/BotaoNovoAluno";
import ModalNovoAluno from "./components/ModalNovoAluno";
import NovoAluno from "./components/NovoAluno";

class App extends Component{

	

	render(){
		return(
			<Container>
				<Row>
					<Col sm={12}>
						<Titulo></Titulo>
						{/* <BotaoNovoAluno></BotaoNovoAluno> */}
						{/* <ModalNovoAluno></ModalNovoAluno> */}
						<NovoAluno></NovoAluno>
						<ListaDeAlunos></ListaDeAlunos>
					</Col>
				</Row>
				
			</Container>
		)
	}
}

export default App;
