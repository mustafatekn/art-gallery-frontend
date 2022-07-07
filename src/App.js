import './assets/css/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Projects from './pages/Projects/Projects'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:url" element={<ProjectDetails />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
