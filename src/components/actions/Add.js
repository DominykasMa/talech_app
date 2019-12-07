import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import { Form } from 'formsy-semantic-ui-react'
import {
    msg_enter_8_digits,
    msg_more_than_3_letters,
    numbers_only
} from '../../assets/FormValidations/ErrorMessages';



export class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item,
            modalOpen: false
        };
    }

    handleChange = (e, { name, value }) => {
        this.setState({
            item: Object.assign({}, this.state.item, {
                [name]: value
            }),
        });
    };

    handleNumber = (e, { name, value }) => {

        this.setState({
            item: Object.assign({}, this.state.item, {
                [name]: parseInt(value)
            }),
        });
    };

    handleSubmit = () => {
        const data = this.state.item;
        data.active = true;
        this.props.addProduct(data);
        this.toggleModal();
        this.setState({})
    };

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,
            item: this.props.item
        })
    };

    render() {
        return (
            <Modal
                trigger={<Button content='Add new' color='blue' className='addNew-btn' onClick={this.toggleModal} />}
                size='small'
                closeIcon
                open={this.state.modalOpen}
                onClose={this.toggleModal}>
                <Header>
                    <h2>Add Item</h2>
                </Header>
                <Modal.Content>
                    <Form onValidSubmit={this.handleSubmit} id='saveItem'>
                        <Form.Group widths='equal'>
                            <Form.Input fluid
                                label='Name'
                                placeholder='Name'
                                name='name'
                                onChange={this.handleChange}
                                width={9}
                                required
                                validations={{ minLength: 3 }}
                                validationErrors={{ minLength: msg_more_than_3_letters }}
                                errorLabel={<div className='error label' />}
                            />
                            <Form.Input fluid
                                label='EAN'
                                placeholder='00000000'
                                name='ean'
                                onChange={this.handleChange}
                                width={5}
                                required
                                validations={{ minLength: 8 }}
                                validationErrors={{ minLength: msg_enter_8_digits }}
                                errorLabel={<div className='error label' />}
                            />
                            <Form.Input fluid
                                label='Type'
                                placeholder='Food type'
                                name='type'
                                onChange={this.handleChange}
                                width={5}
                                required
                                validations={{ minLength: 3 }}
                                validationErrors={{ minLength: msg_more_than_3_letters }}
                                errorLabel={<div className='error label' />}
                            />
                            <Form.Input fluid
                                label='Weight'
                                placeholder='1000'
                                name='weight'
                                onChange={this.handleNumber}
                                width={4}
                                required
                                validations={{
                                    isInt: true
                                }}
                                validationErrors={{
                                    isInt: numbers_only
                                }}
                                errorLabel={<div className='error label' />}
                            />
                            <Form.Input fluid
                                label='color'
                                placeholder='black'
                                name='color'
                                onChange={this.handleChange}
                                width={5}
                                required
                                validations={{ minLength: 3 }}
                                validationErrors={{ minLength: msg_more_than_3_letters }}
                                errorLabel={<div className='error label' />}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Modal.Actions>
                        <Button
                            primary
                            type='submit'
                            form='saveItem'
                            icon='checkmark'
                            content='Save'
                        />
                    </Modal.Actions>
                </Modal.Actions>
            </Modal>
        );
    }

}
export default Add