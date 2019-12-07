import React, { Component } from 'react';
import { Checkbox, Table, Button } from 'semantic-ui-react'
import { Route, Switch } from 'react-router-dom'
import TableHeader from './TableHeader'
import Edit from './actions/Edit'
import Delete from './actions/Delete'
import View from './actions/View'

export class WarehouseTable extends Component {
    render() {
        const data = this.props.data;
        const { deleteProduct, editProduct, enableDisableProduct } = this.props;
        return (
            <div>
                <Table celled>
                    <TableHeader columns={data.columns} />
                    <Table.Body>
                        {
                            data &&
                            data.items.map(item =>
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
                                    <Table.Cell textAlign='center'>
                                        {item.weight}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {item.color}
                                    </Table.Cell>
                                    <Table.Cell textAlign='center'>
                                        <Checkbox defaultChecked={!item.active} onClick={() => enableDisableProduct(item.id)}/>
                                    </Table.Cell>
                                    {
                                        item.active &&
                                        <Table.Cell>
                                            <View columns={data.columns} item={item} />
                                            <Edit editProduct={editProduct} item={item} />
                                            <Delete deleteProduct={deleteProduct} itemId={item.id} />
                                        </Table.Cell>

                                    }
                                    {
                                        !item.active &&
                                        <Table.Cell />
                                    }
                                </Table.Row>
                            )
                        }
                    </Table.Body>

                </Table>
            </div>
        )
    }
}

export default WarehouseTable

