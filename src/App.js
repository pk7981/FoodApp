
import "./App.css";
import "./index.css"
import Products from "./Products";
import { useEffect, useState } from "react";
 
function App() {
  const [search, setSearch] = useState("");
 
  const [data, setData] = useState([]);
 
  const [item, setItem] = useState(null)
  const YOUR_APP_ID = "ab84a02d";
  const YOUR_APP_KEY = "933511f2995504c0ebaf7d0151418c81";
 
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=15&calories=591-722&health=alcohol-free`
    )
      .then((response) => response.json())
      .then((data) => setData(data.hits));
  };
 
  // const onChangeHandler = (e) => {
  //   const { name, value } = e.target
  //   setItem({ ...item, [name]: value })
  // }
  // useEffect(() => {
  //   console.log(item)
  // }, [item])
  return (
    <div className="App">
 
      <div className="food">
        <h1>Food Recipe</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            id="foo"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
          <br />
          <input type="submit" className="btn btn-success m-3" value="Seacrch" />
        </form>
      </div>
      {data.length >= 1 ? <Products data={data} /> : null}
    </div>
  );
}
 
export default App;