import logo from './logo.svg';
import './App.css';
import Types from "./First.js" 
import MyComponent from "./Second.js"
import StatefulComponent from './Fourth';
import My from './Fifth';

function App() {
  return (
    <div className="App">
     <div>
    <Types/>
    <MyComponent/>
    <StatefulComponent/>
    <My/>
     </div>
    </div>
  );
}

export default App;
