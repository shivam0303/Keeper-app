import React from "react";

function CreateArea(props){
    const [note,setNote] = React.useState({
        title : "",
        content : ""
    });

    function handleNote(event){
        const {name,value} = event.target;
        setNote (prevNote=>{
            return{
                ...prevNote,
                [name]:value
            }
        });
    };

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
          });
        event.preventDefault();
    }

    return(
        <div>
            <form>
                <input name="title" onChange={handleNote} value={note.title} placeholder="Title" />
                <textarea name="content" onChange={handleNote} rows="3" value={note.content} placeholder="Take a Note..." />
                <button onClick={submitNote}>ADD</button>
            </form>
        </div>
    )
};

export default CreateArea;