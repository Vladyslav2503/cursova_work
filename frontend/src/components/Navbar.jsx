import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import {updateIsAuth, updateSearch } from 'store/slices/userSlice';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import { Link, useNavigate } from 'react-router-dom';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const dispatch = useDispatch();
  const { email, search, userRole } = useSelector((state) => state.user);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
 

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const navigate = useNavigate()


  const handleLogout = () => {
    // Додайте код для виходу, наприклад, вивільнення токену або скидання інших даних авторизації
    // Приклад:
     localStorage.removeItem('token');
    // або використовуйте функції для очищення стану аутентифікації в Redux
    // dispatch(logoutAction());
    window.localStorage.removeItem('isAuth');
    // Після виходу перенаправте користувача на сторінку входу або іншу відповідну сторінку
    dispatch(updateIsAuth(false))
    navigate('/login');
    
    // Закрийте меню
  };



  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Профіль {email}</MenuItem>
      <MenuItem onClick={handleLogout}>Вихід</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';


  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link style={{ textDecoration: "none", color: "#000" }} to="/reviews">
        <MenuItem>
          <IconButton
            size="large"
            color="inherit"
          >
            <ReviewsIcon />
          </IconButton>
          <p>Reviews</p>
        </MenuItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "#000" }} to="/chat">
        <MenuItem>
          <IconButton
            size="large"
            color="inherit"
          >
            <ShoppingBasketOutlinedIcon />
          </IconButton>
          <p>Chat</p>
        </MenuItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "#000" }} to="/cart">
        <MenuItem>
          <IconButton size="large" color="inherit">
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </Link>
      <Link style={{ textDecoration: "none", color: "#000" }} to="/shop">
        <MenuItem>
          <IconButton
            size="large"
            color="inherit"
          >
            <ShoppingBasketOutlinedIcon />
          </IconButton>
          <p>Shop</p>
        </MenuItem>
      </Link>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: "#010101" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              FlexFlow
            </Typography>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => dispatch(updateSearch(e.target.value))}
              value={search}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {userRole === 'ADMIN' && (
          <Link to="/addgoods">
              <IconButton size="large" color="inherit">
                <Badge badgeContent={0} color="error">
                  <AddCircleIcon style={{ color: "#fff" }} />
                </Badge>
              </IconButton>
            </Link>
          )}
            <Link to="/reviews">
              <IconButton size="large" color="inherit">
                <Badge badgeContent={0} color="error">
                  <ReviewsIcon style={{ color: "#fff" }} />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/chat">
              <IconButton size="large" color="inherit">
                <Badge badgeContent={0} color="error">
                  <ChatIcon style={{ color: "#fff" }} />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/cart">
              <IconButton size="large" color="inherit">
                <Badge badgeContent={0} color="error">
                  <ShoppingCartOutlinedIcon style={{ color: "#fff" }} />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/shop">
              <IconButton
                size="large"
                aria-label="show 1 new notifications"
                color="inherit"
              >
                <ShoppingBasketOutlinedIcon style={{ color: "#fff" }} />
              </IconButton>
            </Link>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}