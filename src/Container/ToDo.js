import React, { useState, useEffect } from "react";
import db from "../firebase";
import List from "../Component/List";
import "./ToDo.scss";
//add a button to ask to the user for asc or desc
const ToDo = () => {
  const [data, setData] = useState([]);
  const [asc, setAsc] = useState(true);
  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", asc ? "asc" : "desc")
      .onSnapshot((snapshot) => {
        setData(snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data() })));
      });
  }, [asc]);
  return (
    <div className="todo">
      <div className="todo__heading">
        <h1 className="todo__title ">Tasks to do</h1>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => setAsc(true)}
          >
            ASC
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => setAsc(false)}
          >
            DESC
          </button>
        </div>
      </div>
      {data.length === 0 ? (
        <p className="todo__empty" class="alert alert-danger" role="alert">
          There are no tasks present right now!
        </p>
      ) : (
        <div className="todo__cards">
          {data.map((card, index) => {
            return <List key={index} card={card} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ToDo;
