import React from "react";
import ResponsiveButton from "./pStyle";

function CreateNote(props) {
    return(
        <div className="note">
                <ResponsiveButton detailInfo={props.title} />
                <ResponsiveButton detailInfo={props.content} />
        </div>
    );
}

export default CreateNote;