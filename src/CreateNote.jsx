import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "./index.css";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  // console.log(note);

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };

  const btoNormal = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="create_note" onDoubleClick={btoNormal}>
        <form>
          {expand ? (
            <input
              type="text"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
              name="title"
            />
          ) : null}
          <textarea
            cols=""
            rows=""
            value={note.content}
            onChange={InputEvent}
            placeholder="Write a note..."
            name="content"
            onClick={expandIt}
          ></textarea>
          {expand ? (
            <Button onClick={addEvent}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
