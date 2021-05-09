import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

const [note, setNote] = useState({
    title: "",
    content: ""
});

const [isExpanded, setIsExpanded] = useState(false)

function handelChange(event){

    const {name, value} = event.target;

    setNote((preNote) => {
      return { ...preNote,
        [name]: value };
    });

}

function submitNote(event){
    props.onAdd(note);
event.preventDefault();
setNote({
    title: "",
    content: ""
})
}

function expand(){
setIsExpanded(true);
}

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title"  onChange={handelChange} value={note.title} placeholder="Title" />}
        <textarea name="content" onClick={expand} onChange={handelChange} value={note.content} placeholder="Take a note..." rows={isExpanded ? "3": "1"} />
        <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
