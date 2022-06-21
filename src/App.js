import './assets/css/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Navbar from './components/shared/Navbar'

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
