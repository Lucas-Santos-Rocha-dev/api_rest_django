import { Component } from "react";
import {Card} from 'react-bootstrap';

class Perfil extends Component{
    render() {
        return (
            <Card id="perfil">
                <Card.Img variant="top" src="/perfil.png" />
                <Card.Body>
                    <Card.Title className="text-center">Sabrina</Card.Title>
                    <Card.Text className="text-center">
                    Sou Sabrina Cristina, 21 anos, formada em Licenciatura em Artes Visuais
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Perfil;