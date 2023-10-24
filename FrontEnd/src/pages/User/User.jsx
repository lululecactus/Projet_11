import { useEffect } from "react"

export default function User() {
    
    useEffect(() => {
        const fetchDataUser = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                const data = await response.json()
                const token = data.body
                console.log(data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchDataUser()
    }, [])

    return (

        <main className="main bg-dark">
        </main>
    )
}