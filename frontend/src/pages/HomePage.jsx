import {Navigate} from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import Navbar from 'components/Navbar';
import HeroBanner from 'components/HeroBanner';
import SearchExercises from 'components/SearchExercises';
import { useEffect, useState } from 'react';
import Exercises from 'components/Exercises';
import { Box } from '@mui/material';
import Contact from 'components/Contact';
import { auth } from 'firabase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
const HomePage = () => {

    const [user, setUser] = useState(true)
    const {isAuth} = useAuth();
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    const dispatch = useDispatch();

    const handleOnAuthStateChange = (user) => {
        debugger
        setUser(user || null)
        window.auth = user
    }

    useEffect(() => {
        const sub = onAuthStateChanged(auth, handleOnAuthStateChange)
        return sub
    }, [])
    
    return user ?  (  
        <Box>
            <Navbar/>     
            <HeroBanner/>
            <Contact/>     
           {/* <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />       
            <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />*/}
        </Box>
    )  : (
        <Navigate to="/login" />
    )
}

export default HomePage