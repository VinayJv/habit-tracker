import { useState } from "react";
import { useDataContext } from "../context/dataContext";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export function Landing(){
    const {habitsData, sethabitsData, archive } = useDataContext();
    const [displayForm,setDisplayForm] = useState(false);
    const navigate = useNavigate();

    const formHandler = (event) => {
        let formValues = {
            name: event.target.elements[0].value,
            repeat: event.target.elements[1].value,
            goal: event.target.elements[2].value,
            time: event.target.elements[3].value,
            startDate: event.target.elements[4].value,
            isArchive: false
        };
        sethabitsData([...habitsData, formValues]);
        setDisplayForm(false);
        event.preventDefault();
        event.target.reset();
    }

    const clickHandler = (event) => {
        navigate(`/${event.target.id}`);
    }
    
    const unArchiveHabit = habitsData.filter((habit)=>habit.isArchive === false);

    return (<div className="landing-page-container">
        <h1>Habit Tracker</h1>
        <button style={{display: displayForm ? "none" : "" }} onClick={()=>setDisplayForm(true)}>Add Habit</button>
        <div>
            <form style={{display: displayForm ? "flex" : "none" }} onSubmit={formHandler}>
                <label>
                    Habit Name* <br />
                    <input type="text" placeholder="Title" required></input>
                </label>
                <label>
                    REPEAT <br />
                    <select>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                    </select>
                </label>
                <label>
                    Goal <br />
                    <select>
                        <option>1 Time Daily</option>
                        <option>2 Time Daily</option>
                        <option>3 Time Daily</option>
                    </select>
                </label>
                <label>
                    Time Of Day <br />
                    <select>
                        <option>Anytime</option>
                        <option>Afternoon</option>
                        <option>Night</option>
                    </select>
                </label>
                <label>
                    Start Date* <br />
                    <input type="date"placeholder="Title" required></ input>
                </label>
                <button type="submit">Save</button>
                <button onClick={()=>setDisplayForm(false)}style={{display: displayForm ? "" : "none" }} >Cancel</button>
            </form>
        </div>
        <div>
            <h1>Your Habits || <NavLink to="/archive">Archive Habits</NavLink>({archive.length}) </h1><span></span>
            
            {habitsData.length === 0 ? <h2>No Habits Added</h2> : <div>{unArchiveHabit.map((habit)=><div key={habit.name} className="habitCard" id={habit.name} onClick={clickHandler}>
                <h4>{habit.name}</h4>
            </div>)}</div>}
        </div>
    </div>)
}