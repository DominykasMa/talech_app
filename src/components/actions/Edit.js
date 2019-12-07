import React, { Component } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';
import { Form } from 'formsy-semantic-ui-react'
import {
    msg_enter_8_digits,
    msg_more_than_3_letters,
    numbers_only
} from '../../assets/FormValidations/ErrorMessages';



export class Edit extends Component {

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
        this.props.editProduct(data);
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
        const item = this.state.item;
        return (
            <Modal
                trigger={<Button content='Edit' color='blue' onClick={this.toggleModal} />}
                size='small'
                closeIcon
                open={this.state.modalOpen}
                onClose={this.toggleModal}>
                <Header>
                    <h2>Edit Item</h2>
                </Header>
                <Modal.Content>
                    <Form onValidSubmit={this.handleSubmit} id='editItem'>
                        <Form.Group widths='equal'>
                            <Form.Input fluid
                                label='Name'
                                placeholder='Name'
                                name='name'
                                value={item.name}
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
                                value={item.ean}
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
                                value={item.type}
                                onChange={this.handleChange}
                                width={4}
                                validations={{ minLength: 3 }}
                                validationErrors={{ minLength: msg_more_than_3_letters }}
                                errorLabel={<div className='error label' />}
                            />
                            <Form.Input fluid
                                label='Weight'
                                placeholder='1000'
                                name='weight'
                                value={item.weight}
                                onChange={this.handleChange}
                                width={4}
                                required
                                validations={{ isInt: true }}
                                validationErrors={{ isInt: numbers_only }}
                            errorLabel={<div className='error label' />}
                            />
                            <Form.Input fluid
                                label='color'
                                placeholder='black'
                                name='color'
                                value={item.color}
                                onChange={this.handleChange}
                                width={6}
                                required
                                validations={{ minLength: 3 }}
                                validationErrors={{ minLength: msg_more_than_3_letters }}
                                errorLabel={<div className='error label' />}
                            />

                        </Form.Group>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Modal.Actions className='two button'>
                        <Button
                            primary
                            type='submit'
                            form='editItem'
                            icon='checkmark'
                            content='Save'
                        />
                    </Modal.Actions>
                </Modal.Actions>
            </Modal>
        );
    }

}
export default Edit