import React, { useState } from "react";

function CreateArea(props) {
const [inputContentTitle, setInputContentTitle] = useState({
  title:"",
  content:""
})

function InputNote(event) {
  const {name, value}=event.target;
  setInputContentTitle(prevV =>{
    return {
      ...prevV, [name]: value
    }
  })
}

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input onChange={InputNote} name="title" placeholder="title" value={inputContentTitle.title}/>
        <textarea onChange={InputNote} name="content" rows="3" placeholder="content" value={inputContentTitle.content}/>
        <button onClick={()=>{
          props.onAdd(inputContentTitle);
          setInputContentTitle({title: "", content: ""});          
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
