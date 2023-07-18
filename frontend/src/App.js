
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import AddApplication from "./components/AddApplication";
import ViewApplication from "./components/ViewApplication";

function App() {
  return (
    <>
      <header>
        <h1 className="text-center mt-3 mb-3 text-danger">Hostel Application</h1>
        <NavBar />
      </header>

      <Routes>
        <Route path="/addApplication" element={<AddApplication />} />
        <Route path="/viewApplication" element={<ViewApplication />} />
      </Routes>
    </>
  );
}

export default App;
