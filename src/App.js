import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/TaskCreation";
import Home from "./pages//TaskListPage";
import Updates from "./pages//TaskUpdate";
import ViewData from "./pages//TaskDetailsPage";
import Navbar from "./common/Navbar";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route element={<Navbar />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
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
