import { useParams } from "react-router"
import { useDataContext } from "../context/dataContext";
import { useNavigate } from "react-router";
import { useState } from "react";

export function SingleHabitPage(){
    const { habitsData, sethabitsData, archive, setArchive} = useDataContext();
    const navigate = useNavigate();
    const { habitName } = useParams();
    const [showForm,setShowForm] = useState(false);
    const findHabit = habitsData.find((habit)=>habit.name===habitName);
    const [singleHabit, setSingleHabit] = useState(findHabit);

    const addToArchive = () => {
        const findIndex = habitsData.findIndex((habit)=>habit.name === habitName);
        sethabitsData([...habitsData], habitsData[findIndex].isArchive = !habitsData[findIndex].isArchive);
    }

    const formHandler = (event) => {
        const findIndex = habitsData.findIndex((habit)=>habit.name === habitName);
        let formValues = {
            name: event.target.elements[0].value,
            repeat: event.target.elements[1].value,
            goal: event.target.elements[2].value,
            time: event.target.elements[3].value,
            startDate: event.target.elements[4].value,
        };
        sethabitsData([...habitsData], (habitsData[findIndex].name = formValues.name,
        habitsData[findIndex].repeat = formValues.repeat,
        habitsData[findIndex].goal = formValues.goal,
        habitsData[findIndex].time = formValues.time,
        habitsData[findIndex].starDate = formValues.startDate)
            );
        setShowForm(false);
        event.preventDefault();
        event.target.reset();
    }

    const deleteHabit = () => {
        navigate("/");
        sethabitsData(habitsData.filter((habit)=>habit.name !== habitName));
        setArchive(archive.filter((habit)=>habit.name !== habitName));
    }

    return(<div className="single-page-container">
        <h1>Habit Name: {singleHabit.name}</h1>
        <h2>Repeat: {singleHabit.repeat}</h2>
        <h3>Goal: {singleHabit.goal}</h3>
        <h3>Time: {singleHabit.time}</h3>
        <h3>Start Date: {singleHabit.startDate}</h3>
        <div className="btn-container">
            <button onClick={()=>setShowForm(!showForm)}>Edit</button>
            <button onClick={deleteHabit}>Delete</button>
            <button onClick={addToArchive} value={singleHabit.name}>{singleHabit.isArchive ? "In Archive" : "Archive"}</button>
        </div>
        <form style={{display: showForm ? "flex" : "none" }} onSubmit={formHandler}>
                <label>
                    Habit Name
                    <input type="text" placeholder="Title" defaultValue={singleHabit.name}></input>
                </label>
                <label>
                    REPEAT
                    <select defaultValue={singleHabit.repeat}>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                    </select>
                </label>
                <label>
                    Goal
                    <select defaultValue={singleHabit.goal}>
                        <option>1 Time Daily</option>
                        <option>2 Time Daily</option>
                        <option>3 Time Daily</option>
                    </select>
                </label>
                <label>
                    Time Of Day
                    <select defaultValue={singleHabit.time}>
                        <option>Anytime</option>
                        <option>Afternoon</option>
                        <option>Night</option>
                    </select>
                </label>
                <label>
                    Start Date
                    <input type="date"placeholder="Title" defaultValue={singleHabit.startDate}></input>
                </label>
                <button type="submit">Save</button>
            </form>
    </div>);
}