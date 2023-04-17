import { useParams,  } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles.css";


function UsersDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setUser(json));
  });
  return (
    <div className="newPage">
      <h1>{user && JSON.stringify(user.id, 2, 2)}</h1>
      <h2>{user && JSON.stringify(user.title, 2, 2)} </h2>
      <p>{user && JSON.stringify(user.body, 2, 2)}</p>

    </div>
  );
}

export default UsersDetails;
