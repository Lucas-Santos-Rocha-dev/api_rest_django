import { Component } from "react";
import {Table} from 'react-bootstrap'

class ListaDeAlunos extends Component {
    constructor(props){
        super(props);
        this.users = [
            {nome: 'Aluno1', rg: 'Aluno1@test.com', cpf: '111', dt_nasc: '21/05/2021'},
            {nome: 'Aluno1', rg: 'Aluno1@test.com', cpf: '111', dt_nasc: '21/05/2021'},
            {nome: 'Aluno1', rg: 'Aluno1@test.com', cpf: '111', dt_nasc: '21/05/2021'},
            {nome: 'Aluno1', rg: 'Aluno1@test.com', cpf: '111', dt_nasc: '21/05/2021'},
            
        ];
    }

    render() {
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
                            this.users.map((item, i) => 
                                <tr key={i}>
                                    <td>{item.nome}</td>
                                    <td>{item.rg}</td>
                                    <td>{item.cpf}</td>
                                    <td>{item.dt_nasc}</td>
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