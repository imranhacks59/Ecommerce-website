import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DashboardIcon from '@mui/icons-material/Dashboard';
import './UserOptions.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ListItem } from '@mui/material';
import { useAlert } from 'react-alert';
import { logout } from '../../../actions/userAction';


export default function UserOptions() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const alert = useAlert();
   const {user} = useSelector((state)=>state.user);
   const actions = [
    { icon: <DashboardIcon />, name: 'Dashboard', func:cart },
    { icon: <ShoppingCartIcon />, name: 'Cart', func:cart },
    { icon: <PersonIcon />, name: 'user',func:profile },
    { icon: <ExitToAppIcon />, name: 'Logout',func:logoutUser },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function profile(){
    navigate('/account')
  }
  function cart(){
   navigate('/cart')
  }
  function logoutUser(){
    dispatch(logout());
    alert.success('logout successfully')
  }
  return (
    // <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        // icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        className='speedDial'
        style={{zIndex:'11'}}
        direction='down'
        icon={
            <img className='speedDialIcon'
            //  src={user.avatar.url ? user.avatar.url : '/Profile.png'}
            src='' alt='image' 
            />
        }
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.func}
          />
        ))}
      </SpeedDial>
    // </Box>
  );
}