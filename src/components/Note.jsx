import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

function handelClick(){
props.onDelete(props.id);

}

  return (
    <div className="note">
    
      <h1 className="note">{props.title}</h1>
      <p className="note">{props.content}</p>
      <button onClick={handelClick}><DeleteIcon /></button>

    </div>
  );
}

export default Note;
