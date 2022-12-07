import '../assets/css/login/login.css'
import SignIn from '../components/Login/SignIn'



export const LoginPage = ({ setToken }) => {
    return (
        <SignIn setToken={setToken} />
    )
}
