import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ClassOutlinedIcon from '@material-ui/icons/ClassOutlined';
import FindInPageOutlinedIcon from '@material-ui/icons/FindInPageOutlined';




const Items = ({actualizarTab, tipoUsuario})=> {
    const setPrincipal = ()=> {
        actualizarTab('Principal')
    }
    const setMisTutorias = ()=> {
        actualizarTab('Mis tutorias')
    }
    const setItemEspecial = ()=> {
        let tab = tipoUsuario === 'Tutor' ? 'Nueva tutoria' : 'Buscar';
        actualizarTab(tab);
    }

    const itemEspecial = tipoUsuario === 1 ? 'Nueva tutoria' : 'Buscar tutorias'


    return (
        <div>
            <ListItem onClick={setPrincipal} button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Principal" />
            </ListItem>
            <ListItem onClick={setMisTutorias} button>
            <ListItemIcon>
                <ClassOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Mis tutorias" />
            </ListItem>
            <ListItem onClick = {setItemEspecial} button>
            <ListItemIcon>
                <FindInPageOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={itemEspecial} />
            </ListItem>
         </div>
    );
}

export default Items;