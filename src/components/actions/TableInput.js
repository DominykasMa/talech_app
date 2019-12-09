import React, { Component } from 'react';
import { Input, Label } from 'semantic-ui-react'
import { numbers_only, press_enter_to_save } from '../../assets/FormValidations/ErrorMessages';

export class Quantityinput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editObject: this.props.editObject.reverse()[0],
            label: false,
        };
    }

    handleChange = (e, { name, value }) => {
        if (value) {
            this.setState({
                editObject: Object.assign({}, this.state.editObject, {
                    [name]: parseInt(value)
                }),
            });
        } else {
            this.setState({
                editObject: Object.assign({}, this.state.editObject, {
                    [name]: value
                }),
            });
        }
    };

    handleKeypress = (e) => {
        if (e.key === "Enter") {
            this.props.editAction(this.state.editObject, this.props.itemId);
            this.setState({ label: false });
            if (document && document.activeElement) document.activeElement.blur()
        }
    }

    handleFocus = (e) => {
        this.setState({ label: true });
    }

    handleBlur = (e) => {
        this.setState({ label: false });
    }

    componentDidMount() {
        if (this.state.editObject.quantity) {
            this.setState({
                inputValue: this.state.editObject.quantity,
                name: 'quantity'
            });
        } else if (this.state.editObject.price) {
            this.setState({
                inputValue: this.state.editObject.price,
                name: 'price'
            });
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.editObject.reverse()[0].quantity >= 0 &&
                    <div>
                        <Input fluid
                            placeholder='100'
                            name='quantity'
                            value={this.state.editObject.quantity}
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeypress}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                        />
                        {
                            (isNaN(this.state.editObject.quantity) || this.state.editObject.quantity < 0) &&
                            <Label pointing color='red'>{numbers_only}</Label>
                        }

                    </div>

                }
                {
                    this.props.editObject.reverse()[0].price >= 0 &&
                    <div>
                        <Input fluid
                            placeholder='100'
                            name='price'
                            value={this.state.editObject.price}
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeypress}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                        />
                        {
                            (isNaN(this.state.editObject.price) || this.state.editObject.price < 0) &&
                            <Label pointing color='red'>{numbers_only}</Label>
                        }
                    </div>
                }
                {
                    this.state.label &&
                    <Label pointing color='blue'>{press_enter_to_save}</Label>
                }
            </div>
        );
    }

}
export default Quantityinput