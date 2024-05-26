
import {React,useState,useEffect} from 'react';

const Bucketlist = () => {

    const [task,setTask]= useState("");
  const [note,setNote] = useState("");
  const [data, setData] = useState([]); 
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query

  const addData = async(e)=>{
    e.preventDefault();
   let result = await fetch("http://localhost:5000/add",{
     method:"POST",
     body:JSON.stringify({task,note}),
  headers:{
     "Content-Type":"application/json"
    },
 });

 result = await result.json();
 console.warn(result);

 setTask("");
 setNote("");
 
 fetchData();
}

useEffect(() => {
 fetchData();
}, []);


const fetchData = async ()=>{
    let result = await fetch("http://localhost:5000/task");
    const jsonData = await result.json();
    setData(jsonData);
  }

  const deleteData = async (taskId) => {
    let result = await fetch(`http://localhost:5000/delete/${taskId}`, {
      method: "DELETE"
    });
    result = await result.json();
    console.warn(result);
    fetchData();
  }

  const editTask = (task) => {
    setEditingTaskId(task._id);
    setTask(task.task);
    setNote(task.note);
    
  }

  const updateData = async () => {
    let result = await fetch(`http://localhost:5000/update/${editingTaskId}`, {
      method: "PUT",
      body: JSON.stringify({task,note }),
      headers: {
        "Content-Type": "application/json"
      },
    });
    result = await result.json();
    console.warn(result);
    setEditingTaskId(null); // Clear editing user state
    fetchData();

    setTask("");
  setNote("");
  
  }

  const filteredData = data.filter(task => 
    task.task.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div>
       <h1 style={{textAlign:'center'}}>Add tasks to your bucket list</h1>
     <input className="inputbox" type='text'
      value={task} 
      onChange={(e)=>setTask(e.target.value)}
       placeholder='Enter your tasks '/>
     <input 
     className="inputbox" 
     type='text'
      value={note}
       onChange={(e)=>setNote(e.target.value)}
        placeholder='Add a note'/>
     
     {editingTaskId ? (
        <button onClick={updateData} className='button' type="button">Update</button>
      ) : (  
     <button onClick={addData}  className='button' type="button">Submit</button>
    )}

<h1 style={{ textAlign: 'center' }}>Search Tasks</h1>
      <input
        className="inputbox"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search tasks"
      />

     <h1 style={{ textAlign: 'center' }}>Display Data</h1>
      <ul>
        {filteredData.map(task => (
          <li key={task._id}>
            Task: {task.task}, Note: {task.note}
            
            <button onClick={() => deleteData(task._id)} className='button' type="button">Delete</button>
            <button onClick={() => editTask(task)} className='button' type="button">Edit</button>
          </li>
        ))}
      </ul>
     </div>
  )
}

export default Bucketlist
