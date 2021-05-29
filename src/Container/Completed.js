import React, { useState, useEffect } from "react";
import List from "../Component/List";
import db from "../firebase";
import "./ToDo.scss";

const Completed = () => {
  const [data, setData] = useState([]);
  const [asc, setAsc] = useState(true);

  useEffect(() => {
    db.collection("completed")
      .orderBy("timestamp", asc ? "asc" : "desc")
      .onSnapshot((snapshot) => {
        setData(snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data() })));
      });
  }, [asc]);
  return (
    <div className="todo">
      <div className="todo__heading">
        <h1 className="todo__title ">Completed Tasks</h1>
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
          None of the Tasks have been completed!
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

export default Completed;
