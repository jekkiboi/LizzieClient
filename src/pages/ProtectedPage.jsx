import { useState } from "react"
import { useAuth0 } from '@auth0/auth0-react'

function ProtectedPage() {
    const { getAccessTokenSilently } = useAuth0()
    const [ inputArticles, setInputArticles] = useState("")
    
    async function handleSubmit(e){
        e.preventDefault()
        const token = await getAccessTokenSilently()
        console.log(token)

        fetch(`${process.env.REACT_APP_SERVER_URL}/articles`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify({ articles: inputArticles })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return(
        <div>
            <h1>Protected Page</h1>
            <p>Note: Only people who are logged should be able to see this page</p>
            <form onSubmit={handleSubmit}>
                <h3>Your Articles</h3>

        {/* RENDER PERSONAL ARTICLES HERE */}
        {/* I DONT WANT TO BE ABLE TO WRITE ARTICLES HERE 
        JUST RENDER WRITTEN ARTICLES */}
        {/* IDEAL: THIS TO BE A PERSONAL ARTICLE INDEX PAGE */}

                <input type = 'text' 
                value={inputArticles}
                onChange={(e) => setInputArticles(e.target.value)} />
                <input type = 'submit' />
            </form>
        </div>
    )
}

export default ProtectedPage