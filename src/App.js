import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/TaskCreation";
import Home from "./pages//TaskListPage";
import Updates from "./pages//TaskUpdate";
import ViewData from "./pages//TaskDetailsPage";
import Navbar from "./common/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Updates />} />
            <Route path="/view/:id" element={<ViewData />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
