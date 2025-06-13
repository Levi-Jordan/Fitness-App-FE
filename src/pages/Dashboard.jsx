import { useState, useEffect } from "react"
import NutritionForm from "../components/Forms/NutritionForm"
import api from "../utility/api"

export default function Dashboard() {

    const [nutritionEntry, setNutritionEntry] = useState([])
    const [editEntry, setEditEntry] = useState(null)

    const fetchNutrition = async () => {
        try {
            const res = await api.get("/nutrition")
            setNutritionEntry(res.data)
        } catch (err) {
            console.error("Error fettching")
        }
    }

    useEffect(() => {
        fetchNutrition()
    }, [])
    const handleForm = () => {
        alert("Saved");
        fetchNutrition();
    }
    
    const totalCalories = nutritionEntry.reduce((sum, entry)=> sum + entry.cal, 0)
    return (
        <div>
            <h1>Calorie Tracker</h1>
            <NutritionForm onComplete={handleForm} initialLoad={editEntry} />
            <ul>
                {nutritionEntry.map(entry => (
                    <li key={entry.id}>
                        {entry.foodItem} - Protein: {entry.gramsProtein}, Fat: {entry.gramsFat}, Carbs: {entry.gramsCarb}, Calories: {entry.cal}
                        <button onClick={() => setEditEntry(entry)}>Edit</button>
                    </li>
                ))}
            </ul>
            <p> Calorie total: {totalCalories} </p>
        </div>
    )
}