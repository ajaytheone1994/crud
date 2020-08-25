import React from 'react'

const UserTable = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.userList.map(userlist => (
                        <tr key={userlist.id}>
                            <td>{userlist.name}</td>
                            <td>{userlist.username}</td>
                            <td>
                                <button onClick={() => { props.CallbackFromParentforEdit(userlist) }} className="button muted-button">Edit</button>
                                <button onClick={() => { props.CallbackFromParent(userlist.id) }} className="button muted-button">Delete</button>
                            </td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    )
}

export default UserTable;