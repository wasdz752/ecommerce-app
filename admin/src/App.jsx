import { Routes, Route } from "react-router-dom";
import AdminNavBar from "./components/AdminNavBar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import SidePanel from "./components/SidePanel";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import { ToastContainer } from "react-toastify";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "$";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  
  useEffect(() => {
    localStorage.setItem('token', token)
  }, [token]);

  return (
    <main className="admin-panel-app w-auto min-h-screen flex flex-col h-auto m-auto">
      <ToastContainer />
      {token === "" ? 
      <Login setToken={setToken}/> :
      <>
        <AdminNavBar setToken={(setToken)}/>

        <div className="main-section flex flex-1">
          <SidePanel />

          <Routes>
            <Route path="/add" element={<Add token={token}/>} />
            <Route path="/list" element={<List token={token}/>} />
            <Route path="/orders" element={<Orders token={token}/>} />
          </Routes>
        </div>
      </>}   
    </main>
  )
}

