import React from "react";
import db from "../firebase";
import firebase from "firebase";
import "./Add.scss";

const Add = () => {
  const [todo, setTodo] = React.useState({ title: "", content: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      ...todo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      status: "Added",
    });
    setTodo({ title: "", content: "" });
  };

  return (
    <div className="add">
      <h1 className="add__heading">Todo App</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="add__form">
        <div class="mb-3">
          <label htmlFor="title" className="form-label add__label">
            Add a Title
          </label>
          <input
            className="form-control"
            name="title"
            id="title"
            value={todo.title}
            onChange={(e) => handleChange(e)}
            placeholder="Title"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="content" className="form-label add__label">
            Enter the content
          </label>
          <textarea
            className="form-control"
            name="content"
            id="content"
            value={todo.content}
            onChange={(e) => handleChange(e)}
            rows="3"
          ></textarea>
        </div>
        <div className="add__button">
          <button
            disabled={!todo.content || !todo.title}
            className="btn btn-primary"
            type="submit"
          >
            Add it to the list
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
