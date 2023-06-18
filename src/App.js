import { Route, Routes } from 'react-router';
import './App.css';
import { Landing } from './pages/Landing';
import { SingleHabitPage } from './pages/SingleHabitPage';
import { ArchivePage } from './pages/ArchivePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/archive' element={<ArchivePage />}></Route>
        <Route path='/:habitName' element={<SingleHabitPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
