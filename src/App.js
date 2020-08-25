import React, { Component } from 'react'
import UserTable from './containers/UserTable';
import AddUserForm from './containers/AddUserForm';
import EditUserForm from './containers/EditUserForm';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Ashutosh dixit', username: 'dixit01' },
        { id: 2, name: 'Ajay Batham', username: 'batham02' },
        { id: 3, name: 'Vishal Rajawat', username: 'rajawat03' },
      ],
      editing: false,
      CurrentUsers: { id: null, name: '', username: '' }
    }
  }

  addUser = user => {
    console.log('yes i am', user)
    user.id = this.state.users.length + 1
    console.log('id', user)
    this.setState({ users: [...this.state.users, user] })
  }

  deleteUser = id => {
    this.setState({ users: this.state.users.filter(user => user.id !== id) })
  }

  editRow = userlist => {
    console.log('i am edit', userlist)
    this.setState({ editing: true })
    this.setState({ CurrentUsers: { id: userlist.id, name: userlist.name, username: userlist.username } })
    console.log(this.state.CurrentUsers)
  }
  updateUser = (id, updatedUser) => {
    this.setState({ editing: false })
    this.setState({ users: this.state.users.map(user => (user.id === id ? updatedUser : user)) })
  }
  Editing=()=>{
    this.setState({editing:false})
  }
  render() {
    return (
      <div className="container">
        <h1>CRUD App with Class_Component</h1>
        <div className="flex-row">
          <div className="flex-large">
            {this.state.editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm
                  CurrentUsers={this.state.CurrentUsers}
                  CallbackforUpdateUser={this.updateUser}
                  setEditing={this.Editing}
                />
              </div>
            ) : (
                <div>
                  <h2>Add user</h2>
                  <AddUserForm handleAdduser={this.addUser} />
                </div>
              )}
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable userList={this.state.users} CallbackFromParent={this.deleteUser} CallbackFromParentforEdit={this.editRow} />
          </div>
        </div>
      </div>
    )
  }
}

