import { useState, useEffect } from "react";
import api from "../../utility/api";

export default function NutritionForm({ initialLoad = null, onComplete }) {
    const [form, setForm] = useState({
        foodItem: '',
        gramsProtein: '',
        gramsFat: '',
        gramsCarb: '',
        cal: '',
    })

    useEffect(() => {
        if (initialLoad) {
            setForm(initialLoad)
        }
    }, [initialLoad])
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (initialLoad?._id) {
                await api.put(`/nutrition/${initialLoad._id}`, form)
            } else {
                await api.post("/nutrition", form)
            }
            if (onComplete) onComplete();
            setForm({
                foodItem: '',
                gramsProtein: '',
                gramsFat: '',
                gramsCarb: '',
                cal: '',
            })
        } catch (err) {
            console.error(err);
            alert("Failed")
        }
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        if (!initialLoad?._id)
            return;

        try {
            await api.delete(`/nutrition/${initialLoad._id}`)
            if (onComplete) onComplete();
            setForm({
                foodItem: '',
                gramsProtein: '',
                gramsFat: '',
                gramsCarb: '',
                cal: '',
            })
        } catch (err) {
            console.error(err);
            alert("Failed")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="foodItem"
                placeholder="Food Entry"
                value={form.foodItem}
                onChange={handleChange}
                required />
            <input
                type="number"
                name="gramsProtein"
                placeholder="Grams of Protein"
                value={form.gramsProtein}
                onChange={handleChange}
                required />
            <input
                type="number"
                name="gramsFat"
                placeholder="Grams of Fat"
                value={form.gramsFat}
                onChange={handleChange}
                required />
            <input
                type="number"
                name="gramsCarb"
                placeholder="Grams of Carbs"
                value={form.gramsCarb}
                onChange={handleChange}
                required />
            <input
                type="number"
                name="cal"
                placeholder="Calories"
                value={form.cal}
                onChange={handleChange}
                required />
            <button type="submit"> {initialLoad ? "Update" : "Submit Entry"} </button>
            {initialLoad && (<button type="button" onClick={handleDelete}>Delete</button>)}
        </form>
    )
}
