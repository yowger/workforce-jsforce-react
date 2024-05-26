import { Route, Routes } from "react-router-dom"

import Login from "./pages/Login"
import Callback from "./pages/Callback"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/oauth/callback" element={<Callback />} />
            <Route path="*" element={<p>Page not found</p>} />
        </Routes>
    )
}

export default App
