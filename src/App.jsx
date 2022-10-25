import Sidebar from "./Components/Sidebar";
import Home from "./Pages/home";
import NewPost from "./Pages/newPost";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css"
function App() {
  return (
    <BrowserRouter class="app">
    <div className="d-flex" style={{
      height : "100vh"
    }}>
    <Sidebar />
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
      <Route path="/new" element={<NewPost/>}/>
    </Routes>
    </div>

  </BrowserRouter>
  );
}

export default App;
