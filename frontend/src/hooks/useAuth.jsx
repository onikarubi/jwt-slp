import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const signUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/register', {
        email,
        password,
      });
      setUsers([...users, response.data.body.user])
      navigate('/login');
    } catch (err) {
      setError(err);
    }
  };

  const login = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth/login/', {
        email,
        password,
      });

      setIsLogin(true)
    } catch (err) {
      console.log(err)
      setError(err);
    }
  }

  const getAllUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/allUsers')
      return response.data
    } catch (err) {
      console.log(err)
    }
  }

  return { users, setUsers, email, setEmail, password, setPassword, getAllUsers, signUp, error, setError, login, setIsLogin, isLogin }
}

export default useAuth