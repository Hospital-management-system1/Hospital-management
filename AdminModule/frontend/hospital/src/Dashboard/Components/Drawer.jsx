import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ScienceIcon from '@mui/icons-material/Science';
import WheelchairPickupIcon from '@mui/icons-material/WheelchairPickup';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import OutlinedCard from './Card';
import { Grid } from '@mui/material';
import  ChartsOverviewDemo from './ChartsOverviewDemo'
import OutlinedCard1 from './OutlinedCard1';
import OutlinedCard2 from './OutlinedCard2';
import OutlinedCard3 from './OutlinedCard3';
import CustomizedTables1 from './CustomizedTables1';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const icons = [
  <VaccinesIcon/>,
  <WheelchairPickupIcon/>,
  <PeopleAltIcon/>,
  <MeetingRoomIcon/>,
  <ScienceIcon/>,
  <CleaningServicesIcon/>
]
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Box sx={{backgroundColor:'dddddd',  display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{backgroundColor:'#f2f2f2'}} position="fixed" open={open}>
        <Toolbar >
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{color:'black'}} variant="h6" noWrap component="div">
            SIGMA
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader >
          SIGMA DASHBOARD          
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List >
          {['Doctors', 'Patients','Departments','Rooms', 'Lab Reports', 'Help Staff'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 50,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >

  {icons[index % icons.length]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
        
        <Box sx={{ '& > *': { mb: 2 } }}>
        <Grid container spacing={2}>
          <Grid item xs={10} md={3}>
            <OutlinedCard />
          </Grid>
          <Grid item xs={10} md={3}>
            <OutlinedCard1/>
          </Grid>
          <Grid item xs={10} md={3}>
            <OutlinedCard2/>
          </Grid>
          <Grid item xs={10} md={3}>
            <OutlinedCard3/>
          </Grid>
        </Grid>
      </Box>   
      
      <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box>
                <ChartsOverviewDemo />
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
             <CustomizedTables1/>
            </Grid>
          </Grid>  

     </Box>
    </Box>
    </>
  );
}
