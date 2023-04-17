import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
  const [user, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="users">
      {user.map((item) => {
        return (
          <div className="user" key={item.id}>
            <span>
              <h1>{item.id}</h1>
              <h2>{item.title}</h2>
              <div>
                {item.body.slice(0, 20)}...
                <Link to={`/users/${item.id}`}>learn more</Link>
              </div>
            </span>

            <button onClick={() => navigate(`/users/${item.id}`)}>MORE</button>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
