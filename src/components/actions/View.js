import React, { Component } from "react";
import { Button, Header, Modal, Tab } from "semantic-ui-react";
import ViewTable from '../view/viewTable';

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
        const { item } = this.props;
        return (
            <Modal
                trigger={<Button content='View' color='grey' onClick={this.toggleModal} />}
                size='small'
                closeIcon
                open={this.state.modalOpen}
                onClose={this.toggleModal}>
                <Header>
                    <h2>Item Details</h2>
                </Header>
                <Modal.Content>
                    <Tab
                        panes={[
                            {
                                menuItem: 'View item', render: () =>
                                    <Tab.Pane>
                                        <ViewTable item={item} />
                                    </Tab.Pane>
                            },
                            {
                                menuItem: 'Item quantity', render: () =>
                                    <Tab.Pane>
                                    </Tab.Pane>
                            },
                            {
                                menuItem: 'Item price', render: () =>
                                    <Tab.Pane>
                                    </Tab.Pane>
                            }
                        ]}
                    />
                </Modal.Content>
            </Modal>
        );
    }

}
export default View