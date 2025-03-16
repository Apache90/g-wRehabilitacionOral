import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import Footer from "./sections/Footer"

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen flex flex-col bg-neutral-50 text-neutral-600">
          {/* Navbar */}
          <Navbar />

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          {/* Footer */}
          <Footer /> 

        </div>
      </Router>
    </>
  )
}

export default App