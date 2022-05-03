import { useState } from "react";
import "./List.css"

export default function List() {
  const [list, setList] = useState([])
  const [add, setAdd] = useState('')

  const addToList = () => {
    setList([...list, add])
  }

  const  remove = (event) => {
    const name = event.target.getAttribute("name")
    setList(list.filter(lists => lists !== name));
  }

  const parseList = list.map(lists => <h1>{lists} <button name={lists} onClick={remove}>Delete</button><br /></h1> )

  return(
    <div className="list-section">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input
          name="list"
          type="text"
          value={add}
          onChange={(event) => {setAdd(event.target.value)}}
        />
        <button onClick={addToList} type="submit">Add</button>
       </form>
      {parseList}
    </div>
  );
}