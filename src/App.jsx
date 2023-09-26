import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Dashboard from "./Dashboard"
import Hodour from "./Hodour"

function App() {
  const [account, setAccount] = React.useState(JSON.parse(localStorage.getItem("account")))
  const [isCurrent, setIsCurrent] = React.useState(1)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login setAccount={setAccount} account={account} />}/>
        <Route path="/dashboard" element={<Dashboard account={account} isCurrent={isCurrent} setIsCurrent={setIsCurrent} />}/>
        <Route path="/dashboard/1" element={<Hodour account={account} isCurrent={isCurrent} setIsCurrent={setIsCurrent} />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
