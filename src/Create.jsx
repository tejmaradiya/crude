
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from './UserReducer';
import Swal from 'sweetalert2';

const Create = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1]?.id + 1 || 1, name, email }));
    Swal.fire({
      icon: 'success',
      title: 'User Created',
      text: 'The user has been successfully created!',
    });
    navigate('/');
  };

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 bg-white p-4 rounded shadow-sm">
        <h3 className="text-center mb-4">Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-sm btn-primary px-4">Submit</button>
            <button type="button" onClick={() => navigate('/')} className="btn btn-sm btn-secondary px-4">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
