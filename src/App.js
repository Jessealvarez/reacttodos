import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



function ToDoComponent (){
  const [myTitle, setTitle] = useState("")
  const [myDescription, setDescription] = useState("")
  const [myImportance, setImportance] = useState("low")
  const [toDoList, setToDoList] = useState([])
  
  return(

   <div className = "toDo">
     
     {/* textbox for title  */}
      <input type="text" onChange={(event) => {
        const title = event.target.value;
        setTitle(title)
      }}></input>
      <br></br>
    
      
      {/* textbox for description */}
      <input type="text" onChange={(event) => {
        const description = event.target.value;
        setDescription(description)
      }}></input>
      <br></br>

      
      {/* dropdown for importance */}
      <select onChange={(event)=>{
        console.log("selected: ", event.target.value)
        const importance = event.target.value 
        setImportance(importance)}}>
        <option value="low"> Low</option>  
        <option value="medium"> Medium </option>  
        <option value="high"> High </option> 
      </select>
      
      {/* button stuff */}
      <button type="button" value={toDoList}
        onClick={(event) => {
          const newToDo = { myTitle, myDescription, myImportance };
          const updatedToDoList = [...toDoList]
          updatedToDoList.push(newToDo);
          setToDoList(updatedToDoList);
          setTitle("");
          setDescription("");
          setImportance("Low");
        }}>Submit</button>
      
    
         {/* display */}
      <div>
        {toDoList.map((element) => {
          return (
            <div key={element}>
              <ul>
                <li>
                  <h2>{element.myTitle}</h2>
                  <p>{element.myDescription}</p>
                  <h4>{element.myImportance}</h4>
                </li>
                <hr />
              </ul>
            </div>
          )
        })
        }
      </div>
      </div>
  )
    

}


export default App;
