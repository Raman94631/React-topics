import logo from './logo.svg';
import './App.css';
import CheckUserAge from './One';
import MyComponent from './Two';
import MagicEightBall from './Three';
import MyApp from './Five';
import MyToDoList from './Six';
import MyyComponent from './Four';

function App() {
  return (
    <div className="App">
      <CheckUserAge/>
      <MyComponent/>
      <MagicEightBall/>
      <MyyComponent/>
      <MyApp/>
      <MyToDoList/>
    </div>
  );
}

export default App;
