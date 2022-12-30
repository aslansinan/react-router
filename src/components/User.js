import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function User() {
  const [loading, SetLoading] = useState(true);
  const [user, SetUser] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => SetUser(res.data))
      .finally(() => SetLoading(false));
  }, [id]);
  return (
    <div>
      <h1>User Detail</h1>
      {loading && <div>Loading</div>}
      {!loading && <code>{JSON.stringify(user)}</code>}
      <br />
      <Link to={`/user/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
      <br />
      <Link to={`/user/${parseInt(id) - 1}`}>Prev User ({parseInt(id) - 1})</Link>
    </div>
  );
}

export default User;
