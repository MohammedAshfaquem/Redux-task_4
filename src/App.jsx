import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./Redux/api";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const { loading, data: posts, error } = useSelector((state) => state);
  return (
    <div>
      {loading && <p>Loading</p>}
      {error && <p>Error</p>}


      <ul>
        {posts.map((item)=>(
          <li  key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
