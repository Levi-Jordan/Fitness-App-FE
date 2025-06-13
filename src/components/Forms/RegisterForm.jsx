import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';
import api from '../../utility/api';

export default function RegisterForm() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const { login } = useAuth()
    const navigate =  useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/user/register', form);
            login(res.data.token);
            navigate('/login') 
        } catch (err) {
            console.error(err)
            alert("Registration failed")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="username"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                required />
            <input
                type="email"
                name="email"
                placeholder="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required />
            <input
                type="password"
                name="password"
                placeholder="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required />
            <button type ="submit">Register</button>
        </form>
    )
}