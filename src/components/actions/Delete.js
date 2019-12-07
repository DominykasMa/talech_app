import React, { Component } from "react";
import { Button, Header, Modal } from "semantic-ui-react";

export class Delete extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    };

    handleSubmit = () => {
        this.props.deleteProduct(this.props.itemId);
        this.toggleModal();
    };

    render() {
        return (
            <Modal
                trigger={<Button content='Delete' color='red' onClick={this.toggleModal} />}
                size='small'
                closeIcon
                open={this.state.modalOpen}
                onClose={this.toggleModal}>
                <Header>
                    <h2>Delete Item</h2>
                </Header>
                <Modal.Content>
                    <p>Are you sure you want to Delete this item?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Modal.Actions>
                        <Button
                            onClick={this.toggleModal}
                            color='grey'
                            type='submit'
                            icon='close'
                            content='No'
                        />
                        <Button
                            onClick={this.handleSubmit}
                            color='red'
                            type='submit'
                            icon='checkmark'
                            content='Yes'
                        />
                    </Modal.Actions>
                </Modal.Actions>
            </Modal>
        );
    }

}
export default Delete