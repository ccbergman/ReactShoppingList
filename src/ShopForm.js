import React, { Component } from 'react';

class ShopForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: ""
        };
    }

    render() {
        return (
            <form className="ContactForm" onSubmit={this.handleSubmit.bind(this)}>
                <h2>Add a Contact</h2>
                <p>
                    <label>Name</label>
                    <input value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                </p>
                <p>
                    <label>Price</label>
                    <input value={this.state.price} onChange={this.handlePriceChange.bind(this)} />
                </p>
                <p className="ShopForm__button-bar">
                    <button type="submit">Add</button>
                </p>
            </form>
        );
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handlePriceChange(event) {
        this.setState({
            price: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit({
            name: this.state.name,
            price: this.state.price
        });
        this.setState({
            name: "",
            price: ""
        })
    }
}

export default ShopForm;