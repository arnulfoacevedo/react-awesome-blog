import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { ThemeContext } from '../ThemeContext';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_REQUEST':
      return { ...state, loading: true };
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        updatedUser: action.payload,
        loading: false,
        error: '',
        success: true,
      };
    case 'UPDATE_FAIL':
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};

export default function ProfilePage() {
  const { user, setUser, backendAPI } = useContext(ThemeContext);
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    updatedUser: null,
    error: '',
    success: false,
  });
  const { loading, updatedUser, error, success } = state;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_REQUEST' });
    try {
      const { data } = await axios.put(`${backendAPI}/users/${user.id}`, {
        ...user,
        email,
        name,
        password,
        phone,
        website,
      });
      dispatch({ type: 'UPDATE_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL', payload: err.message });
    }
  };
  const logoutHandler = () => {
    localStorage.removeItem('user');
    setUser(null);
  };
  useEffect(() => {
    if (updatedUser) {
      setUser(updatedUser);
    } else {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setWebsite(user.website);
    }
  }, [updatedUser]);
  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-item">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="name">Website:</label>
          <input
            type="text"
            name="website"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          ></input>
        </div>
        <div className="form-item">
          <label></label>
          <button>Update</button>
        </div>
        <div className="form-item">
          <label></label>
          <button type="button" onClick={logoutHandler}>
            Logout
          </button>
        </div>
        {loading && (
          <div className="form-item">
            <label></label>
            <span>Processing...</span>
          </div>
        )}
        {error && (
          <div className="form-item">
            <label></label>
            <span className="error">{error}</span>
          </div>
        )}

        {success && (
          <div className="form-item">
            <label></label>
            <span className="success">Profile updated successfully</span>
          </div>
        )}
      </form>
    </div>
  );
}
