import './App.css';
import List from './component/List.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashCan, faPencil)

function App() {
  return (
    <div className="App">
        <h1 className="title"><mark>To-Do List!</mark></h1>
        <List />
    </div>
  );
}

export default App;