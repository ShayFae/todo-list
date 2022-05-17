import './App.css';
import List from './component/List.js'
import { useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashCan, faPencil } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashCan, faPencil)

function App() {

  useEffect(() => {
    document.title = "Todo List";  
  }, []);

  return (
    <div className="App">
        <h1 className="title"><mark>To-Do List!</mark></h1>
        <List />
    </div>
  );
}

export default App;