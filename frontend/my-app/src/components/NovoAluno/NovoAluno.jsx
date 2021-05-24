import { Component } from "react";
import {Button, Modal, Form} from 'react-bootstrap'
import api from '../../api';

class NovoAluno extends Component {

    constructor (){
        super();
        this.state ={
            show: false,
            nome: '',
            rg: '',
            cpf: '',
            data_nascimento: '',
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleModal(){
		this.setState({
			show: !this.state.show
		});
	}

    submitHandler = e => {
        let data_com_barra = this.state.data_nascimento;
        data_com_barra = data_com_barra.split("/");
        let data_sem_barra = data_com_barra[2] + "-" + data_com_barra[1] + "-" + data_com_barra[0];

        const data = {
            nome: this.state.nome,
            rg: this.state.rg,
            cpf: this.state.cpf,
            data_nascimento: data_sem_barra
        }

        api.post('/alunos/', data)
        .then(response =>{
            this.setState({
                show: false
            })

            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        })

    }

    render() {
        return (
            <section>
                <Button onClick={() => {this.handleModal()}} variant="primary" className="float-right">Novo aluno</Button>

                <Modal show={this.state.show} onHide={() => {this.handleModal()}}>
                    <Modal.Header closeButton>
                        Cadastrar novo aluno
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
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
                                <Form.Control type="text" placeholder="ex: 24/05/2021" name="data_nascimento" value={this.state.data_nascimento} onChange={this.changeHandler}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={() => {this.submitHandler()}}>Cadastrar</Button>
                    </Modal.Footer>
                </Modal>
            </section>
        )
    }
}

export default NovoAluno;