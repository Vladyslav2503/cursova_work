import {Navigate} from 'react-router-dom';
import { useAuth } from 'hooks/use-auth';
import Navbar from 'components/Navbar';
import HeroBanner from 'components/HeroBanner';
import SearchExercises from 'components/SearchExercises';
import { useState } from 'react';
import Exercises from 'components/Exercises';
import { Box } from '@mui/material';
const HomePage = () => {

    const {isAuth} = useAuth();
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    return isAuth ? (
        <Box>
            <Navbar/>     
            <HeroBanner/>     
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />       
            <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />  
        </Box>
    ) : (
        <Navigate to="/login" />
    )
}

export default HomePage