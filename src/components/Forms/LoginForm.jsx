import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';
import api from '../../utility/api';

export default function LoginForm() {
    const [form, setForm] = useState({email: '', password: '' });
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/user/login', form);
            login(res.data.token);
            navigate('/dashboard')
        } catch (err) {
            console.error(err)
            alert("Login failed")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">Log in!</button>
        </form>
    )
}