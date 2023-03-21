import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [inputValue, setInputValue] = useState([]);

  function AddNote(inputContentTitle) {
    setInputValue((set) =>{
      return [...set, inputContentTitle]
    })
  }
  function DeleteNote(id) {
    setInputValue(deleteNote=>{
      return deleteNote.filter((value, index) => index !==id)
    })
  }

console.log(inputValue)
  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNote} />

    {inputValue.map((element, index)=>{
           return <Note 
           key={index}
           id={index}
          title={element.title}
          content={element.content}
          btn={DeleteNote}
           />
    })}
    
      <Footer />
    </div>
  );
}

export default App;
