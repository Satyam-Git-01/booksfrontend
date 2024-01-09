import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import BookDetails from "./components/BookDetails";
import Edit from "./components/Edit";
import AddNewBook from "./components/AddNewBook";
import { ToastContainer } from "react-toastify";
function App() {
  const CONNECTION_STRING = process.env.REACT_APP_CONNECTION_STRING;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addNewBook" element={<AddNewBook />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/details/:id" element={<BookDetails />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
