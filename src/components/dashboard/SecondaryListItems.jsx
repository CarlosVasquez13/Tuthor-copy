import React from 'react';
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
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import {ExitToAppOutlined} from '@material-ui/icons'
import { useHistory } from 'react-router-dom';


const SecondaryListItems = ()=> {
  let history = useHistory();

  const redirect = () => {
    history.push('/login')
  }
    return (
        <div>
        <ListSubheader inset>Social</ListSubheader>
        <ListItem button>
          <ListItemIcon>
            <ChatOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Mensajes" />
        </ListItem>
        <ListItem button onClick={redirect}>
          <ListItemIcon>
            <ExitToAppOutlined />
          </ListItemIcon>
          <ListItemText primary="Salir" />
        </ListItem>
        
      </div>
    );
}

export default SecondaryListItems;