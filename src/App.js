import { useEffect, useState } from "react";
import Cart from "./Cart";

export default function App() {
  const [users, setUsers] = useState([]);

  const [pageUser, setpageUser] = useState(4);

  // fetch api
  const fetchApi = async () => {
    try {
      const ApiUrl = `https://jsonplaceholder.typicode.com/users?_limit=${pageUser}`;
      const resp = await fetch(ApiUrl);
      const data = await resp.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadMoreBtn = () => {
    setpageUser(pageUser + 4);
    fetchApi();
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <div
        className="userDetails"
        style={{ marginLeft: "20px", textDecoration: "underline" }}
      >
        <h1>User Details</h1>
      </div>
      <div
        className="user_all"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {users.map((user, index) => {
          return <Cart user={user} key={user.id} />;
        })}
      </div>

      <div className="btn" style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={loadMoreBtn}
          style={{
            width: "10%",
            padding: "10px",
            backgroundColor: "black",
            color: "wheat",
            borderRadius: "5px",
            border: "none",
            marginBottom: "2em",
            cursor: "pointer",
          }}
        >
          Laod More
        </button>
      </div>
    </>
  );
}
