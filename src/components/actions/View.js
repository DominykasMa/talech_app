import React, { Component } from "react";
import { Button, Header, Modal, Table } from "semantic-ui-react";
import TableHeader from "../TableHeader"
import { withRouter } from 'react-router-dom'

export class View extends Component {

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

    render() {
        const item = this.props.item;
        return (
            <Modal
                trigger={<Button content='View' color='grey' onClick={this.toggleModal} />}
                size='small'
                closeIcon
                open={this.state.modalOpen}
                onClose={this.toggleModal}>
                <Header>
                    <h2>View Item</h2>
                </Header>
                <Modal.Content>
                    <Table celled>
                        <TableHeader columns={[
                            "Name",
                            "EAN",
                            "Type",
                            "Weight",
                            "Color"
                        ]} />
                        <Table.Body>
                            {
                                <Table.Row key={`item-${item.id}`}>
                                    <Table.Cell>
                                        {item.name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {item.ean}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {item.type}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {item.weight}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {item.color}
                                    </Table.Cell>
                                </Table.Row>
                            }
                        </Table.Body>

                    </Table>
                </Modal.Content>
            </Modal>
        );
    }

}
export default withRouter(View)