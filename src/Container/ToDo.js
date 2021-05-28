import React, { useState, useEffect } from "react";
import db from "../firebase";
import List from "../Component/List";
import "./ToDo.scss";
//add a button to ask to the user for asc or desc
const ToDo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setData(snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data() })));
        // console.log(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div className="todo">
      <h1 className="todo__heading">Tasks to do</h1>
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
