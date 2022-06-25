import "./App.css";
import Root from "./Routes/Root";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Womens from "./Routes/Womens";
import Mens from "./Routes/Mens";
import Accessories from "./Routes/Accessories";
import Shop from "./Routes/Shop";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation></Navigation>}>
          <Route index element={<Root></Root>}></Route>
          <Route path="women" element={<Womens></Womens>}></Route>
          <Route path="men" element={<Mens></Mens>}></Route>
          <Route
            path="accessories"
            element={<Accessories></Accessories>}
          ></Route>
          <Route path="shop" element={<Shop></Shop>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
