import ReactDOM, { Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import EditTime from "./components/editTime/EditTime";
import ListOfLocals from './components/listOfLocals/ListOfLocals';
import Navbar from "./components/navbar/Navbar";
import ViewDetails from "./components/viewDetails/ViewDetails";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<ListOfLocals />} />
          <Route path="/:id" element={<ViewDetails />} />
          <Route path="/:detailsId/edit" element={<EditTime />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
