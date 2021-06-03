import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./assets/App.css";

import Header from "./components/Header";
import Perfil from "./components/Perfil";
import ListaDeAlunos from "./components/ListaDeAlunos";
import NovoAluno from "./components/NovoAluno";
import api from "./api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      alunos: [],
    };
  }

  async componentDidMount() {
    let response = await api.get("/alunos");
    this.setState({
      alunos: response.data,
    });
  }

  criarAluno(nome, rg, cpf, data_nascimento) {
    let novoAluno = { nome, rg, cpf, data_nascimento };

    api
      .post("/alunos/", novoAluno)
      .then((response) => {
        this.componentDidMount();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  alterarAluno(id, nome, rg, cpf, data_nascimento) {
    let novoAluno = { nome, rg, cpf, data_nascimento };

    api
      .put(`alunos/${id}/`, novoAluno)
      .then((response) => {
        console.log(response);
        this.componentDidMount();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deletarAluno(id) {
    api
      .delete(`alunos/${id}/`)
      .then((response) => {
        console.log(response);
        this.componentDidMount();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
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
            <ListaDeAlunos
              alunos={this.state.alunos}
              alterarAluno={this.alterarAluno.bind(this)}
              deletarAluno={this.deletarAluno.bind(this)}
            ></ListaDeAlunos>
            <NovoAluno criarAluno={this.criarAluno.bind(this)}></NovoAluno>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
