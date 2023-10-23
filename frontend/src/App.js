import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import { Route, Router, Routes } from 'react-router-dom'
import './App.css';
import { Box } from '@mui/material';
import ExerciseDetail from 'pages/ExerciseDetail';
import { ShopContextProvider } from 'context/Shop-context';
import StorePage from 'pages/storePage/StorePage';
import { Cart } from 'pages/cartPage/Cart';


function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <ShopContextProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/shop" element={<StorePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Routes>
      </ShopContextProvider>
    </Box>
  );
}

export default App;