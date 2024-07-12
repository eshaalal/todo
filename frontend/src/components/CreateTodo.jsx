import { useState } from "react";

export function CreateTodo(){
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");
    return <div>
        <input style={{
          padding:11 ,
          margin:20}}
          type="text" 
          placeholder="title" 
          id="title" 
          onChange={(e)=>setTitle(e.target.value)}></input><br></br>
        <input style={{
          padding:11 ,
          margin:20
           
        }}type="text" placeholder="description" id="desc" onChange={(e)=>
            
            setDescription(e.target.value)
        }></input><br></br>
        <button style={{
          padding:11 ,
          margin:20
           
        }} onClick={()=>{
            
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(async function(res){
                const json= await res.json();
                alert("Todo added")
            })
        }}>Add a todo</button>
    </div>
}
