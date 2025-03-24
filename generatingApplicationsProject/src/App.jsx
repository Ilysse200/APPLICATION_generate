import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignUp from "./SignUp"
import Layout from "./Layout"
import Login from "./Login"
import '../src/index.css'
import DashboardView from "./DashboardMaterial/DashboardView"
import WelcomePage from './UserContent/WelcomePage'
import DepartmentsPage from "./UserContent/DepartmentPage"
import ApplyPage from "./UserContent/Application"
function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route path ="" element={<Layout/>}>
    <Route path="/" element={<DashboardView/>}/>
    </Route>
    <Route path="/signup" index element={<SignUp/>}/>
    <Route path="/welcome" index element={<WelcomePage/>}/>
    <Route path="/department" index element={<DepartmentsPage/>}/>
    <Route path="/apply" index element={<ApplyPage/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
