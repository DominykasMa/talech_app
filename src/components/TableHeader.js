import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

export class TableHeader extends Component {

    render() {
        const columns = this.props.columns;
        return (
            <Table.Header>
                <Table.Row>
                    {
                        columns.map((column, i) => (
                            <Table.HeaderCell key={`column-${i}`}>
                                {column}
                            </Table.HeaderCell>
                        ))

                    }
                </Table.Row>
            </Table.Header>
        );
    }

}
export default TableHeader