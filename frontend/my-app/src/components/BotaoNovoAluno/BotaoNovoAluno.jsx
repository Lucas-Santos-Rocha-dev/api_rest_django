import { Component } from "react";
import Button from 'react-bootstrap/Button';

class BotaoNovoAluno extends Component {
    render() {
        return (
            <section>
                <Button variant="primary" className="float-right">Novo aluno</Button>
            </section>
        )
    }
}

export default BotaoNovoAluno;