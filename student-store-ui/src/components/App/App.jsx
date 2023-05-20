import * as React from "react"
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <main>
          {/* YOUR CODE HERE! */}
          <Sidebar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  )
}
