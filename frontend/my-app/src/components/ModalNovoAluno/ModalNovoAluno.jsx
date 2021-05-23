import { Component } from "react";
import {Button, Modal} from 'react-bootstrap'

class ModalNovoAluno extends Component {
    render(){
        return (
            <div>
                <Modal show={false}>
                    <Modal.Header>
                        Modal Head Part
                    </Modal.Header>

                    <Modal.Body>
                        Hi, react modal 
                    </Modal.Body>

                    <Modal.Footer>
                        <Button>Close modal</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ModalNovoAluno;