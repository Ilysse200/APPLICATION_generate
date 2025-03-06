import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignUp from "./SignUp"
import Layout from "./Layout"
import Login from "./Login"
function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route path ="" element={<Layout/>}>
    </Route>
    <Route path="/signup" index element={<SignUp/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
