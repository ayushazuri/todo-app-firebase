import React from "react";
import db from "../firebase";
import "./List.scss";
import firebase from "firebase";
const List = ({ card }) => {
  const handleDelete = () => {
    db.collection("completed").add({
      ...card.todo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      status: "Completed",
    });
    db.collection("todos").doc(card.id).delete();
  };

  const handleRemove = () => {
    db.collection("completed").doc(card.id).delete();
  };
  console.log(card);
  return (
    <div className="card todocards">
      <h3 className="card__heading">{card.todo.title}</h3>
      <div className="card__content">
        <p className="card__content">{card.todo.content}</p>
      </div>
      {card.todo.status === "Completed" ? (
        ""
      ) : (
        <div className="card__buttons">
          <button
            className="btn btn-primary card__button"
            onClick={handleDelete}
          >
            Completed
          </button>
        </div>
      )}
      {card.todo.status === "Completed" ? (
        <div className="card__buttons">
          <button
            className="btn btn-primary card__button"
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default List;
