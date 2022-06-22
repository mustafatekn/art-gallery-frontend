import './assets/css/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
