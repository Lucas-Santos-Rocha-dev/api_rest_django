import { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";

class NovoAluno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      nome: "",
      rg: "",
      cpf: "",
      data_nascimento: "",
    };
  }

  _changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  _handleModal() {
    this.setState({
      show: !this.state.show,
    });
  }

  _criarAluno() {
    let data_com_barra = this.state.data_nascimento;
    data_com_barra = data_com_barra.split("/");
    let data_sem_barra =
      data_com_barra[2] + "-" + data_com_barra[1] + "-" + data_com_barra[0];

    this.props.criarAluno(
      this.state.nome,
      this.state.rg,
      this.state.cpf,
      data_sem_barra
    );

    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <section>
        <Button
          onClick={() => {
            this._handleModal();
          }}
          variant="primary"
          className="float-right"
        >
          Novo aluno
        </Button>

        <Modal
          show={this.state.show}
          onHide={() => {
            this._handleModal();
          }}
        >
          <Modal.Header closeButton>Cadastrar novo aluno</Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira o nome"
                  name="nome"
                  maxLength="30"
                  value={this.state.nome}
                  onChange={this._changeHandler}
                />
              </Form.Group>

              <Form.Group controlId="formBasicRG">
                <Form.Label>RG</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira o RG"
                  name="rg"
                  maxLength="9"
                  value={this.state.rg}
                  required
                  onChange={this._changeHandler}
                />
              </Form.Group>

              <Form.Group controlId="formBasicCPF">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insira o CPF"
                  name="cpf"
                  maxLength="11"
                  value={this.state.cpf}
                  onChange={this._changeHandler}
                />
              </Form.Group>

              <Form.Group controlId="formBasicDataNascimento">
                <Form.Label>Data Nascimento</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ex: 24/05/2021"
                  name="data_nascimento"
                  maxLength="10"
                  value={this.state.data_nascimento}
                  onChange={this._changeHandler}
                />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button
              onClick={() => {
                this._criarAluno();
              }}
            >
              Cadastrar
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    );
  }
}

export default NovoAluno;
