import { Component } from "react";
import {Table} from 'react-bootstrap';
import api from '../api';

class ListaDeAlunos extends Component {
    state = {
        alunos: [],
    };

    async componentDidMount(){
        const response = await api.get('/alunos');
        this.setState({
            alunos: response.data
        });
    }

    render() {
        const {alunos} = this.state;

        return (
            <div>
                <h1>List With Bootstrap Table</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>RG</th>
                            <th>CPF</th>
                            <th>Data de Nascimento</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            alunos.map((item, i) =>

                                <tr key={i}>
                                    <td>{item.nome}</td>
                                    <td>{item.rg}</td>
                                    <td>{item.cpf}</td>
                                    <td>{item.data_nascimento}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ListaDeAlunos;