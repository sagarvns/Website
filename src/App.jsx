import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Dashboard } from "./components/dashboard/Dashboard"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Pagenotfound } from "./components/Pagenotfound/Pagenotfound"
import View from "./components/view/View"


function App() {

  return (
   
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="page" element={<Pagenotfound/>}/>
        <Route path="view/:id" element={<View/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
   
  )
}

export default App
