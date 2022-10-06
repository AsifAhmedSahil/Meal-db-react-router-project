import Meal from './components/Meal.jsx'
import './App.css';
import './components/style.css'
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Meal/>}/>
      </Routes>
      
    </div>
  );
}


export default App;
