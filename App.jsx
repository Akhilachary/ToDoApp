import { useState } from "react"

let App=()=>{
    let [input,setInput] = useState("")
    let [task,setTask]=useState([])
    let addTask=()=>{
        console.log("add task clicked")
        if(input=="") return;
        setTask([...task,input]);
        setInput("");
        console.log(task)
    }
    let handleDelete=(index)=>{
        let updateTasks=task.filter((_,i)=> i!==index );
        setTask(updateTasks)
    }
    
    return<>
    <div className="container">
        <h1>To Do Board</h1>
        <input type="text" placeholder="Add a task" id="input" value={input} onChange={(e) => setInput(e.target.value)}  />
        <button id="add" onClick={addTask} >Add</button>
        <div id="Tasks">
                {
                    task.map((work,index)=>(
                            <div id="tasksToPerform">
                                <h3 id="works" >{work}</h3>
                                <button id="del" onClick={()=>handleDelete(index)}>Delete</button>
                            </div>
                    ) )
                }
        </div>
    </div>

    </>
}
export default App