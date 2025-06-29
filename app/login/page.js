'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../store/features/userSlice';
import axios from 'axios';

export default function AuthForm() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const saveUser = ({ id, firstName, lastName, email }) => {
    dispatch(setUser({ id, firstName, lastName, email }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!email || !password || (!isLoginForm && (!firstName || !lastName || !confirmPassword))) {
      setError('Please fill all required fields.');
      return;
    }

    try {
      if (isLoginForm) {
        // const res = await axios.post('/api/login', { email, password });
        // saveUser(res.data);
        saveUser({
          id: '12345',
          firstName: firstName || 'John',
          lastName: lastName || 'Doe',
          email: email || 'johndoe_signin@gmail.com',
        });

        router.push('/');

      } else if (password !== confirmPassword) {
      } else {
        // const res = await axios.post('/api/signup', { firstName, lastName, email, password, confirmPassword });
        // saveUser(res.data);
        saveUser({
          id: '12345',
          firstName,
          lastName,
          email,
        });

        router.push('/');
      }
      router.push('/');
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        {isLoginForm ? 'Sign In' : 'Sign Up'}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLoginForm && (
          <>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          required
          className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
          required
          className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {!isLoginForm && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        )}
        {error && (
          <div className="text-red-500 text-sm text-center">
            ⚠️ {error}
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-200"
        >
          {isLoginForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p
          className="text-sm text-center text-blue-500 hover:underline cursor-pointer"
          onClick={() => {
            setIsLoginForm(!isLoginForm);
            setError('');
          }}
        >
          {isLoginForm ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
        </p>
      </form>
    </div>
  );
}
