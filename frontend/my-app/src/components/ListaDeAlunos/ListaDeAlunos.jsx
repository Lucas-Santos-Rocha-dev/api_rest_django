import { Component } from "react";
import {Table} from 'react-bootstrap';
import api from '../../api';
import {Button, Modal, Form} from 'react-bootstrap';

class ListaDeAlunos extends Component {

    constructor (){
        super();
        this.state ={
            alunos: [],
            show: false,
            id: 0,
            nome: '',
            rg: '',
            cpf: '',
            data_nascimento: ''
        }

    }

    updateAluno(id, nome, rg, cpf, data_nascimento){
        this.setState({
            show: true,
            id: id,
            nome: nome,
            rg: rg,
            cpf: cpf,
            data_nascimento: data_nascimento
        })
    }

    deleteAluno(id){
        let decisao = window.confirm("Deseja realmente excluir ?");
        if(decisao){
            api.delete(`alunos/${id}/`)
            .then(response =>{
                console.log(response);
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    handleModal(){
		this.setState({
			show: !this.state.show
		});
	}

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    submitHandler = e => {
        const data = {
            nome: this.state.nome,
            rg: this.state.rg,
            cpf: this.state.cpf,
            data_nascimento: this.state.data_nascimento
        }

        api.put(`alunos/${this.state.id}/`, data)
        .then(response =>{
            console.log(response);
            this.setState({
                show: false
            })

            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        })

    }

    async componentDidMount(){
        const response = await api.get('/alunos');
        this.setState({
            alunos: response.data
        });
    }

    render() {
        const {alunos} = this.state;

        return (
            <section className="margin-top">
                <Table>
                    <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th className="text-center">Nome</th>
                            <th className="text-center">RG</th>
                            <th className="text-center">CPF</th>
                            <th className="text-center">Data de Nascimento</th>
                            <th className="text-center">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            alunos.map((item, i) =>

                                <tr key={i}>
                                    <td className="text-center">{item.id}</td>
                                    <td className="text-center">{item.nome}</td>
                                    <td className="text-center">{item.rg}</td>
                                    <td className="text-center">{item.cpf}</td>
                                    <td className="text-center">{item.data_nascimento}</td>
                                    <td className="text-center">
                                        <Button onClick={() => this.updateAluno(item.id, item.nome, item.rg, item.cpf, item.data_nascimento)} variant="primary" syze="sm">Editar</Button>{' '}
                                        <Button onClick={() => this.deleteAluno(item.id)} variant="primary" syze="sm">Excluir</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>

                <Modal show={this.state.show} onHide={() => {this.handleModal()}}>
                    <Modal.Header closeButton>
                        Alterar aluno
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicId">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" disabled={true} name="nome" value={this.state.id} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicNome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Insira o nome" name="nome" value={this.state.nome} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicRG">
                                <Form.Label>RG</Form.Label>
                                <Form.Control type="text" placeholder="Insira o RG" name="rg" value={this.state.rg} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicCPF">
                                <Form.Label>CPF</Form.Label>
                                <Form.Control type="text" placeholder="Insira o CPF" name="cpf" value={this.state.cpf} onChange={this.changeHandler}/>
                            </Form.Group>

                            <Form.Group controlId="formBasicDataNascimento">
                                <Form.Label>Data Nascimento</Form.Label>
                                <Form.Control type="text" placeholder="ex: 2021-05-23" name="data_nascimento" value={this.state.data_nascimento} onChange={this.changeHandler}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={() => {this.submitHandler()}}>Alterar</Button>
                    </Modal.Footer>
                </Modal>
            </section>
        )
    }
}

export default ListaDeAlunos;