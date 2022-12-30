import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Users() {
  const [loading,SetLoading] = useState(true);
  const [users, SetUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      SetUsers(res.data);
    }).finally(()=> SetLoading(false));;
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {loading && <div>Loading</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
