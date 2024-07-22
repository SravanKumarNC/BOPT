import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Task from "./pages/Task";
import Records from "./pages/Records";
import "./style.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route index={true} element={<Login />}></Route>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/task" element={<Task />}></Route>
          <Route path="/records" element={<Records />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
