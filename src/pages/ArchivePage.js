import { useDataContext } from "../context/dataContext";
import { useNavigate } from "react-router";

export function ArchivePage(){
    const navigate = useNavigate();
    const {archive, setArchive, habitsData} = useDataContext();
    const clickHandler = (event) => {
        navigate(`/${event.target.id}`);
    }
    const archiveHabit = habitsData.filter((habit)=>habit.isArchive === true);

    return (<div className="landing-page-container">
        <h1>Archive Habits</h1>
        {archive.length === 0 && <h2>No Archive Habit</h2>}
        {archiveHabit.map((habit)=><div key={habit.name} className="habitCard" id={habit.name} onClick={clickHandler}>
                <h4>{habit.name}</h4>
            </div>)}
    </div>);
}