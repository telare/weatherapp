import './App.css'
import Main from './components/Main'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
        </Router>
    </>
  )
}

export default App 