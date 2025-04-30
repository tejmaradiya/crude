
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';
import Swal from 'sweetalert2';

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id == id);
  const { name, email } = existingUser || {};

  const [uname, setName] = useState(name || '');
  const [uemail, setEmail] = useState(email || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id, name: uname, email: uemail }));

    Swal.fire({
      icon: 'success',
      title: 'User Updated',
      text: 'The user has been successfully updated!',
    });

    navigate('/');
  };

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 bg-white p-4 rounded shadow-sm">
        <h3 className="text-center mb-4">Update User</h3>
        <form onSubmit={handleUpdate}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              value={uname}
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
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-between">
            <button type="submit" className="btn btn-primary w-100 w-md-auto">Update</button>
            <button type="button" className="btn btn-secondary w-100 w-md-auto" onClick={() => navigate('/')}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
