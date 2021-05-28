import React, { useState, useEffect } from "react";
import List from "../Component/List";
import db from "../firebase";
import "./ToDo.scss";

const Completed = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    db.collection("completed")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setData(snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data() })));
      });
  }, []);
  console.log(data);
  return (
    <div className="todo">
      <h1 className="todo__heading">Completed Tasks</h1>
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
