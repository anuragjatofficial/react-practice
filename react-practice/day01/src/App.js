import './App.css';
import { MyButton, NavBar } from './nav.js';
import './nav.js';
import { SelectTag } from './select.js';
import { Card } from './card';
function App() {
  return (
    <>
      <div>
        <NavBar/>
        <SelectTag/>
        <Card/>
        <h1>My first react App</h1>
        <MyButton />
      </div>
    </>
  );
}

export default App;
