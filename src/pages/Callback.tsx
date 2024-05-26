import { useSearchParams } from "react-router-dom"

import { useGetCallback } from "../api/useGetCallback"
import { invariant } from "../utils/invariant"

function Callback() {
    const [searchParams] = useSearchParams()
    const code = searchParams.get("code")
    invariant(code)

    const { isLoading, isError, error, data } = useGetCallback({ code })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error: {error.message}</div>
    }

    console.log("🚀 ~ Callback ~ data:", data)

    return (
        <div>
            <h1>Callback Page</h1>
        </div>
    )
}

export default Callback
