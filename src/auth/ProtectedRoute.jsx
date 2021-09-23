import { withAuthenticationRequired } from '@auth0/auth0-react'
import { Route } from 'react-router-dom'
const ProtectedRoute = ({ component }) => {
    return(
        <Route 
        component={withAuthenticationRequired(component, {
            onRedirecting: () => (<div>Redirecting you to the login page...</div>)
        })} 
    />
    )
}

export default ProtectedRoute