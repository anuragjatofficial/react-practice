import './App.css';
import { MyButton, NavBar } from './nav.js';
import './nav.js';
import { SelectTag } from './select.js';

function App() {
  return (
    <>
      <div>
        <NavBar/>
        <SelectTag/>
        <h1>My first react App</h1>
        <MyButton />
      </div>
    </>
  );
}

export default App;
