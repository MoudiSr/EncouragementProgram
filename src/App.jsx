import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Dashboard from "./Dashboard"
import Hodour from "./Hodour"
import Matalib from "./Matalib"
import BehaivorsPage from "./BehaivorsPage"

function App() {
  const [account, setAccount] = React.useState(JSON.parse(localStorage.getItem("account")))
  let [isCurrent, setIsCurrent] = React.useState(1)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login setAccount={setAccount} account={account} />}/>
        <Route path="/dashboard" element={<Dashboard account={account} isCurrent={isCurrent} setIsCurrent={setIsCurrent} />}/>
        <Route path="/dashboard/2" element={<Matalib />} />
        <Route path="/dashboard/3" element={<BehaivorsPage />} />
        <Route path="/dashboard/1" element={<Hodour />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
