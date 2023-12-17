// YourComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logout } from '../store/UserSlice'; 
import { useNavigate } from "react-router-dom";

const Users = () => {
  const { isAuthenticated, user, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // You can dispatch the loginUser action here if needed
    // dispatch(loginUser({ email: 'example@example.com', password: 'password' }));
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h1>Welcome, {user}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Login</h1>
          {/* Your login form */}
        </>
      )}
    </div>
  );
};

export default Users;
