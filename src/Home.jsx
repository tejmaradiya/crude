

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from './UserReducer'
import Swal from 'sweetalert2'

const Home = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }))
        Swal.fire({
            icon: 'success',
            title: 'User Deleted',
            text: 'The user has been successfully deleted!',
        })
    }

    return (
        <div className="container my-5">
            <h2 className="text-center text-primary mb-4">CRUD With JSON Server</h2>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <Link to="/create" className="btn btn-success">
                    Create +
                </Link>
                <button className="btn btn-dark" onClick={() => window.location.reload()}>Reload</button>
            </div>
            <table className="table table-striped table-bordered table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary me-2">
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="btn btn-sm btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home
