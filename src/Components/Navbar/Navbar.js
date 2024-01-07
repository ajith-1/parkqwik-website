import React from 'react';
import './Navbar.css';
import { useNavigate,useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Phone } from '@mui/icons-material';




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:1155px)');
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  console.log(location.pathname);

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Parking', path: '/parking' },
    { text: 'Fastag', path: '/fastag' },
    { text: 'Products', path: '/product' },
    { text: 'Careers', path: '/careers' },
    { text: 'Contact Us', path: '/contact' },
  ];

  return (
    <React.Fragment>
      <AppBar position="fixed" width='100%' sx={{ bgcolor: 'white' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, flexWrap: 'nowrap' }}>
            <img className='logo1' src='/images/logo-1.png' alt='logo'/>
            <img className='logo2' src='/images/name-logo-1.png' alt='logo'/>
          </Box>
          {isMobile ? (
            <IconButton
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              sx={{ mr: 2 }}
              className='menuIcon'
            >
              <MenuIcon sx={{ fontSize: '30px', color: 'black' }} />
            </IconButton>
          ) : (
            <>
              <ul className='list'>
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => navigate(item.path)}
                    className={location.pathname === item.path ? 'active' : 'listName'}
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
              <Button
                disableElevation
                variant="contained"
                color='success'
                sx={{ marginLeft: 1, color: '#ffff', py: 1, width: '175px', borderRadius: '15px' }}
                startIcon={<Phone />}>
                +91 842 842 88 33
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* --------------------Drawer for mobile view-------------------- */}

      <Drawer anchor="right" width='50%' open={openDrawer} onClose={handleDrawerClose} >
        <DrawerHeader>
          <IconButton color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerClose}>
            <CloseIcon sx={{ fontSize: '30px', }} />
          </IconButton>
        </DrawerHeader>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} onClick={() => { navigate(item.path); setOpenDrawer(false); }}>
              <ListItemText
                primary={item.text}
                className={location.pathname === item.path ? 'activeList' : 'drawerList'}
              />
            </ListItem>
          ))}

          <ListItem>
            <ListItemText
              sx={{
                ml: '20px',
                cursor: 'pointer',
                p: 1, backgroundColor: '#1A9E75',
                maxWidth: '160px',
                borderRadius: '8px',
                color: 'white'
              }}>
              +91 842 842 88 33
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default NavBar;
