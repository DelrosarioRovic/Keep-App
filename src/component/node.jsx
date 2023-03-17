import React from "react";
import noteCollection from "../note-collection";
import CreateNote from "./createNote";



function FinishContent() {
    return(
        noteCollection.map(note => <CreateNote
                key={note.key}
                title={note.title}
                content={note.content}
            />
        )
    );
}



export default FinishContent;