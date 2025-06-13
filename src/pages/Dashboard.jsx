import NutritionForm from "../components/Forms/NutritionForm"
import api from "../utility/api"

export default function Dashboard(){
    const handleForm = () => {
        alert("Saved");
    }
    return (
<div>
    <h1>Calorie Tracker</h1>
    <NutritionForm onComplete={handleForm}/>
</div>)
}