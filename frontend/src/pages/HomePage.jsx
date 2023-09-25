import {Navigate} from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import Navbar from 'components/Navbar';
import HeroBanner from 'components/HeroBanner';
const HomePage = () => {

    const {isAuth} = useAuth();

    return isAuth ? (
        <div>
            <Navbar/>     
            <HeroBanner/>              
        </div>
    ) : (
        <Navigate to="/login" />
    )
}

export default HomePage