import { useState } from "react";
import "./List.css"

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

  const edit = (event) => {
    const name = event.target.getAttribute("name");
    // const test = prompt('change');
    let c = false;
    // console.log('this is test', test)
    // setList(list.filter(lists => { if(lists === name) {
    //   lists = test;
    //   console.log('this is lists', lists)
    //   console.log('yes')

    // }}));
    // console.log('name', name)
    //Name is null need to find matching identifer to use conditional then make it equal to the prompt instead and set it to state.
    setList(list.filter(lists => { if(lists !== name) {
      c = true;
      // console.log(lists)
      // setList(list.filter(g => g !== name));
      // list.push(test);
      // console.log('this is lists', lists)
      // console.log('yes')
      document.getElementById(lists).innerText = 'testing';

    } }));
    // console.log('this is lists2', list)
    if(c) {
      console.log('true');

      // return console.log(<h1>{test}</h1>)
    }
    //Return new element with that state?
    // return <h1>{test}</h1>
  }

  const parseList = list.map(lists => <h3 id={lists} className={lists} name={lists}> {num++}. {lists} <button name={lists} onClick={remove}>Delete</button><button onClick={edit}></button><br /></h3>)
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