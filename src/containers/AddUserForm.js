 import React, { Component } from 'react'
export default class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            id: null,
            name: '',
            username: ''
        }
        if (props.product) {
            this.state = props.product
        } else {
            this.state = this.initialState;
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.SubmitForm = this.SubmitForm.bind(this);
    }
    handleInputChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value})

    }
    SubmitForm(e) {
        e.preventDefault();
        this.props.handleAdduser(this.state);
        this.setState(this.initialState);
    }
    render() {
        return (
            <form onSubmit={this.SubmitForm}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} required />
                <label>Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} required />
                <button>Add new user</button>
            </form>
        )
    }
}
