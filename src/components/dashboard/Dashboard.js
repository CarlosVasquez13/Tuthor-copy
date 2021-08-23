import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {Avatar } from '@material-ui/core'
import shortid from 'shortid';

import Items from './Items';
import SecondaryListItems from './SecondaryListItems';
import Principal from './Principal';
import MisTutorias from './MisTutorias';
import BuscarTutoria from './BuscarTutoria';
import SesionTutoria from './SesionTutoria';
import CrearTutoria from './CrearTutoria';
import TutoriaController from '../../Controllers/Tutorias.controller'




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Tuthor
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard({typeUser}) {
  console.log(typeUser)
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [historialTutorias, setHistorialTutorias] = useState([])

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const cargarTutorias = async () => {
    var tutoriaCtrl = new TutoriaController();
    var tutorias = await tutoriaCtrl.MostrarTutorias();
    var tutoriasArray = [];
    tutorias.map((tutoria) => {
      tutoriasArray.push(tutoria)
    })
    setHistorialTutorias(tutoriasArray)
  }
  // cargarTutorias();
  const usuario = {
    tipoUsuario: typeUser
  }

  const objTarjeta = {
    id: shortid.generate(),
    prefijo: 'POO',
    nombreClase: 'POO: Programación Orientada a objetos',
    tutor:{
      nombre: 'Juan Perez',
      imgTutor: './img/student.png'
    },
    horaInicio: '10:00am',
    horaFin: '11:00am',
    siguienteSesion: '6 de agosto del 2021',
    precio:250.0,
    valoracion:4.5
  }
  const objTarjeta2 = {
    id: shortid.generate(),
    prefijo: 'POO',
    nombreClase: 'POO: Programación Orientada a objetos',
    tutor:{
      nombre: 'Juan Perez',
      imgTutor: './img/student.png'
    },
    horaInicio: '10:00am',
    horaFin: '11:00am',
    siguienteSesion: '6 de agosto del 2021',
    precio:250.0,
    valoracion:4.5
  }
  const mensaje = `Hola ${usuario.nombre}, Bienvenido nuevamente.`
  const [historial, actualizarHistorial] = useState([objTarjeta, objTarjeta2]);

  const tabs = ['Principal', 'Mis tutorias', 'Buscar', 'Sesion', 'Nueva tutoria']
  const [tab, actualizarTab] = useState(tabs[0]);
 
  useEffect(() => {
    // Run! Like go get some data from an API.
    cargarTutorias();
  }, []);
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            <img className="tuthor_logo" src={"./img/tuthor.png"} alt="tuthor_logo"/> 
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
          <Avatar alt="C" src="/static/images/avatar/3.jpg" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div  className={classes.toolbarIcon}>
          
          
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Items
            actualizarTab = {actualizarTab}
            tipoUsuario = {usuario.tipoUsuario}
          />
        
        </List>
        <Divider />
        <List>
          <SecondaryListItems
            actualizarTab = {actualizarTab}
          />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div  className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

        {tab === 'Principal' ? 
          <Principal
            key = {shortid.generate()}
            listaHistorial = {historialTutorias}
            actualizarTab = {actualizarTab}
          />
         : null}
        {tab === 'Mis tutorias' ? 
          <MisTutorias
            key = {shortid.generate()}
            listaHistorial = {historial}
            actualizarTab = {actualizarTab}
          />
         : null}
        {tab === 'Buscar' ? 
          <BuscarTutoria
          

          />
         : null}
        {tab === 'Sesion' ? 
          <SesionTutoria
            objTutoria = {objTarjeta2}
            actualizarTab = {actualizarTab}
          />
         : null}
        {tab === 'Nueva tutoria' ? 
          <CrearTutoria
            actualizarTab = {actualizarTab}
          />
         : null}


        
          

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}