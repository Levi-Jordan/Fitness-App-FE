import { useState } from 'react';
import axios from 'axios';

export default function RegisterForm() {
    const [form, setForm] = useState({ username: '', email: '', password: ''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('', form);
            localStorage.setItem('token', res.data.token);
        }
    }
}