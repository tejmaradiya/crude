

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from './UserReducer'
import Swal from 'sweetalert2'


const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
        Swal.fire({
                           icon: 'success',
                            title: 'User Updated',
                            text: 'The user has been successfully Created!',
                         });
        
        navigate("/")
    }

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border rounded shadow p-5 bg-white">
                <h3 className="text-center mb-4">Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter your name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button type="button" onClick={() => navigate('/')} className="btn btn-secondary">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create
