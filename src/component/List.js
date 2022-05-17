import { useState } from "react";
import "./List.css"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default function List() {
  const [list, setList] = useState([]);
  const [add, setAdd] = useState('');
  const [count, setCount] = useState(0);

  let num = 1;

  const addToList = () => {
    setList([...list, add]);
    setCount(prev => prev + 1);
    num++
  }

  //Filters matching name attribute 
  const  remove = (event) => {
    const name = event.target.getAttribute("name");
    setList(list.filter(lists => lists !== name));
  }

  //Messing with the delete function 
  // <FontAwesomeIcon icon="trash-can"/>

  const parseList = list.map(lists => <p id={lists} className={lists} name={lists}> {num++}. {lists}<button className="trash-icon" name={lists} onClick={remove} type="submit">❌</button></p>)
  return(
    <div >
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input
          name="list"
          type="text"
          value={add}
          onChange={(event) => {setAdd(event.target.value)}}          
        />
        <button className="pencil-icon" onClick={addToList} type="submit"><FontAwesomeIcon icon="pencil" size="lg"/>
</button>
       </form> 
       <div className="list-section">
      {parseList}
      </div>
    </div>
  );
}