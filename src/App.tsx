import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<p>Page not found</p>} />
        </Routes>
    )
}

export default App
