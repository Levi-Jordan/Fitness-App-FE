import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

export default function RegisterForm() {
    const [form, setForm] = useState({ username: '', email: '', password: ''});
    const { login } = useAuth

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/user/register', form);
            login(res.data.token);
            // navgitate('/') Not sure where I will route this to 
        } catch (err){
            console.error(err)
            alert("Registration failed")
        }
    }
    return (
        <form>
            <input
            type="text"
            name="username"
            placeholder="username"
            value={form.username}
            onChange=/>
        
        </form>
    )
}