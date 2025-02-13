import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Dashboard } from "./components/dashboard/Dashboard"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Pagenotfound } from "./components/Pagenotfound/Pagenotfound"
import View from "./components/view/View"
import { Data } from "./components/data/Data"
import { Cart } from "./components/Cart/Cart"


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
        <Route path="data/:id" element={<Data/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
   
  )
}

export default App
