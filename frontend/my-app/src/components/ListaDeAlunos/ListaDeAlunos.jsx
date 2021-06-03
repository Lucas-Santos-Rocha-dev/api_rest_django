import { Component } from "react";
import { Table } from "react-bootstrap";
import { Button, Modal, Form } from "react-bootstrap";

class ListaDeAlunos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      id: 0,
      nome: "",
      rg: "",
      cpf: "",
      data_nascimento: "",
    };
  }

  _updateAluno(id, nome, rg, cpf, data_nascimento) {
    this.setState({
      show: true,
      id: id,
      nome: nome,
      rg: rg,
      cpf: cpf,
      data_nascimento: this._formataData(data_nascimento),
    });
  }

  _handleModal() {
    this.setState({
      show: !this.state.show,
    });
  }

  _changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  _alterarAluno() {
    let data_com_barra = this.state.data_nascimento;
    data_com_barra = data_com_barra.split("/");
    let data_sem_barra =
      data_com_barra[2] + "-" + data_com_barra[1] + "-" + data_com_barra[0];

    this.props.alterarAluno(
      this.state.id,
      this.state.nome,
      this.state.rg,
      this.state.cpf,
      data_sem_barra
    );

    this.setState({
      show: false,
    });
  }

  _deletarAluno(id) {
    let decisao = window.confirm("Deseja realmente excluir ?");
    if (decisao) {
      this.props.deletarAluno(id);
    }
  }

  _formataData(data) {
    data = data.split("-");
    let data_com_barra = data[2] + "/" + data[1] + "/" + data[0];
    return data_com_barra;
  }

  render() {
    return (
      <section className="margin-top" id="session_tabela">
        <Table>
          <thead>
            <tr>
              <th className="text-center">Nome</th>
              <th className="text-center">RG</th>
              <th className="text-center">CPF</th>
              <th className="text-center">Data de Nascimento</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>

          <tbody>
            {this.props.alunos.map((item, i) => (
              <tr key={i}>
                <td hidden={true} className="text-center">
                  {item.id}
                </td>
                <td className="text-center">{item.nome}</td>
                <td className="text-center">{item.rg}</td>
                <td className="text-center">{item.cpf}</td>
                <td className="text-center">
                  {this._formataData(item.data_nascimento)}
                </td>
                <td className="text-center">
                  <Button
                    onClick={() =>
                      this._updateAluno(
                        item.id,
                        item.nome,
                        item.rg,
                        item.cpf,
                        item.data_nascimento
                      )
                    }
                    variant="primary"
                    syze="sm"
                  >
                    Editar
                  </Button>{" "}
                  <Button
                    onClick={() => this._deletarAluno(item.id)}
                    variant="primary"
                    syze="sm"
                  >
                    Excluir
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal
          show={this.state.show}
          onHide={() => {
            this._handleModal();
          }}
        >
          <Modal.Header closeButton>Alterar aluno</Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicId">
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type="text"
                  disabled={true}
                  name="id"
                  value={this.state.id}
                />
              </Form.Group>

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
                this._alterarAluno();
              }}
            >
              Alterar
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    );
  }
}

export default ListaDeAlunos;
