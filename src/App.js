import Meal from './components/Meal.jsx'
import './App.css';
import './components/style.css'
import {Routes,Route} from "react-router-dom"
import ReciepeInfo from './components/ReciepeInfo.jsx';
function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Meal/>}/>
        <Route path='/:MealId' element={<ReciepeInfo/>}/>
      </Routes>
      
    </div>
  );
}


export default App;
