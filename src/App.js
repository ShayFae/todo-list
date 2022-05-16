import './App.css';
import List from './component/List.js'
import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashCan)

function App() {
  return (
    <div className="App">
      {/* <img src={logo} /> */}
        <h1>To-Do List!</h1>
        <List />
    </div>
  );
}

export default App;