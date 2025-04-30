



import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { updateUser } from './UserReducer'
import Swal from 'sweetalert2';

const Update = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const { name, email } = existingUser[0];

    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }));

        Swal.fire({
            icon: 'success',
            title: 'User Updated',
            text: 'The user has been successfully updated!',
        });

        navigate("/");
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border rounded shadow p-5 bg-white'>
                <h3 className='text-center mb-4'>Update User</h3>
                <form onSubmit={handleUpdate}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input
                            type="text"
                            name='name'
                            className='form-control'
                            placeholder='Enter your name'
                            value={uname}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input
                            type="email"
                            name='email'
                            className='form-control'
                            placeholder='Enter your email'
                            value={uemail}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary">Update</button>
                        <button type="button" onClick={() => navigate('/')} className="btn btn-secondary">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update;
