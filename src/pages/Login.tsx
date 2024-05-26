function Login() {
    const handleLogin = () => {
        window.location.href = "http://localhost:8000/oauth/auth"
    }

    return (
        <div className="container">
            <button onClick={handleLogin}>Login with Salesforce</button>
        </div>
    )
}

export default Login
