import { Component } from "react";
import {Table} from 'react-bootstrap';
import api from '../../api';

import Button from 'react-bootstrap/Button';

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
            <section className="margin-top">
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
                        {
                            alunos.map((item, i) =>

                                <tr key={i}>
                                    <td className="text-center">{item.nome}</td>
                                    <td className="text-center">{item.rg}</td>
                                    <td className="text-center">{item.cpf}</td>
                                    <td className="text-center">{item.data_nascimento}</td>
                                    <td className="text-center">
                                        <Button variant="primary" syze="sm">Editar</Button>{' '}
                                        <Button variant="primary" syze="sm">Excluir</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </section>
        )
    }
}

export default ListaDeAlunos;