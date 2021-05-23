import { Component } from "react";
// import Button from 'react-bootstrap/Button';
import {Button, Modal} from 'react-bootstrap'

class NovoAluno extends Component {

    constructor (){
        super();
        this.state ={
            show: false
        }
    }

    handleModal(){
		this.setState({
			show: !this.state.show
		});
	}

    render() {
        return (
            <section>
                <Button onClick={() => {this.handleModal()}} variant="primary" className="float-right">Novo aluno</Button>

                <Modal show={this.state.show} onHide={() => {this.handleModal()}}>
                    <Modal.Header closeButton>
                        Modal Head Part
                    </Modal.Header>

                    <Modal.Body>
                        Hi, react modal 
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={() => {this.handleModal()}}>Close modal</Button>
                    </Modal.Footer>
                </Modal>
            </section>
        )
    }
}

export default NovoAluno;