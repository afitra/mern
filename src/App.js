import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify" //lib untuk alert jika ada error seperti popup sweat alert
import { Checkout, LandingPage, DetailsPage, Example } from "pages"

import "./assets/scss/style.scss"
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="/example" component={Example}></Route>
      </Router>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
