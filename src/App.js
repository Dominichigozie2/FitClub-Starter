import './App.css';
import Hero from './componet/Hero/Hero';
import Plans from './componet/Plans/Plans';
import Program from './componet/Program/Program';
import Reason from './componet/Reason/Reason';
function App() {
  return (
    <div className="App">
         <Hero/>
         <Program/>
         <Reason/>
         <Plans/>
    </div>
  );
}

export default App;
