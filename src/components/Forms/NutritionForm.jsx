import {useState, useEffect} from "react";
import api from "../../utility/api";

export default function NutritionForm({initialLoad = null, onComplete}) {
    const [form, setForm] = useState({
        foodItem: '',
        gramsProtein: '',
        gramsFat: '',
        gramsCarb: '',
        cal: '',
    })

    useEffect(()=>{
        if(initialLoad){
            setForm(initialLoad)
        }
    }, [initialLoad])
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="foodItem"
                placeholder="Food Entry"
                value={form.foodItem}
                onChange={(e) => setForm({handleChange})}
                required />
            <input
                type="text"
                name="gramsProtein"
                placeholder="Grams of Protein"
                value={form.gramsProtein}
                onChange={(e) => setForm({handleChange})}
                required />
            <input
                type="text"
                name="gramsFat"
                placeholder="Grams of Fat"
                value={form.gramsFat}
                onChange={(e) => setForm({handleChange})}
                required />
             <input
                type="text"
                name="gramsCarb"
                placeholder="Grams of Carbs"
                value={form.gramsCarb}
                onChange={(e) => setForm({handleChange})}
                required />
            <input
                type="text"
                name="cal"
                placeholder="Calories"
                value={form.cal}
                onChange={(e) => setForm({handleChange})}
                required />           
            <button type="submit">Submit Entry</button>
        </form>
    )
}
