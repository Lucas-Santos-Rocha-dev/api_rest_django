import { Component } from "react";
import {Table} from 'react-bootstrap';
import api from '../../api';
import $ from 'jquery';

import Button from 'react-bootstrap/Button';

class ListaDeAlunos extends Component {

    constructor (){
        super();
        this.state ={
            alunos: [],
        }
    }

    async componentDidMount(){
        const response = await api.get('/alunos');
        this.setState({
            alunos: response.data
        });

        $(document).on('click', '.excluir', function(e) {
            let id = parseInt($(this).closest('tr').find('td[data-id]').data('id'));
            let decisao = window.confirm("Deseja realmente excluir ?");
            if(decisao){
                let url = "/alunos/" + id;
                api.delete(url);
                
                setTimeout(function(){ window.location.reload(); }, 2000);
            }

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
                                    <td data-id={item.id} className="text-center">{item.id}</td>
                                    <td data-nome={item.nome} className="text-center">{item.nome}</td>
                                    <td data-rg={item.rg} className="text-center">{item.rg}</td>
                                    <td data-cpf={item.cpf} className="text-center">{item.cpf}</td>
                                    <td data-data_nascimento={item.data_nascimento} className="text-center">{item.data_nascimento}</td>
                                    <td className="text-center">
                                        <Button className="editar" variant="primary" syze="sm">Editar</Button>{' '}
                                        <Button className="excluir" variant="primary" syze="sm">Excluir</Button>
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