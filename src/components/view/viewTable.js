import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import TableHeader from "../TableHeader"

export class ViewTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            quantity: this.props.item.productQuantity.reverse()[0].quantity,
            price: this.props.item.productPrice.reverse()[0].price
        };
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    };

    render() {
        const item = this.props.item;
        let warning;
        if (this.state.quantity === 0) {
            warning = true;
        } else {
            warning = false;
        }

        return (

            <Table celled>
                <TableHeader columns={[
                    "Name",
                    "EAN",
                    "Type",
                    "Weight",
                    "Color",
                    "Quantity",
                    "Price"
                ]} />
                <Table.Body>
                    {

                        <Table.Row negative={warning} key={`item-${item.id}`}>
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
                            <Table.Cell>
                                {this.state.quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {this.state.price}
                            </Table.Cell>
                        </Table.Row>
                    }
                </Table.Body>

            </Table>
        );
    }

}
export default ViewTable