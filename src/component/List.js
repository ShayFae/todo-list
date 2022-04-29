import { useState } from "react";
import "./List.css"

export default function List() {
  const [list, setList] = useState([])
  const [add, setAdd] = useState('')
  const [u, setU] = useState(false)

  const addToList = () => {
    setList([...list, add])
  }

  //Works but only has one unique ID so un
  const k = () => {
    document.getElementById("meep").classList.remove('meep').add('a');
  }

  //Works but applies to all
  const j = () => {
    setU(true)
  }

  //Make this the id?
  let x = 0

  const parseList = list.map(lists =>  <h1 className={u ? `a ${lists}` : null} >{lists}<button  
  onClick={j}  >Delete</button> <br /></h1>, x++ )

  console.log('This is x', x)
  // const y = list.map(lists => <button onClick={k} >Delete</button> )

  // console.log()
  
  // const remove = () => {
  //   list.filter(x => x === document.getElementsByClassName('find'))
  //   console.log('yes')
  // }

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
      <button onClick={k}></button>
    </div>
  );
}