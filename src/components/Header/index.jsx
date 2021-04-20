import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import { Link } from 'react-router-dom';

import { 
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import InfoIcon from '@material-ui/icons/Info';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import useStyles from './styles';

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Curriculum
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
          <Typography paragraph>Dark Mode</Typography>
        <List>
        <Link to="/" className={classes.link}>
          <ListItem button key="home">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
              <ListItemText primary="Home" />
          </ListItem>
          </Link>
        </List>
        <List>
        <Link to="/about" className={classes.link}>
          <ListItem button key="about">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
              <ListItemText primary="Sobre" />
          </ListItem>
          </Link>
        </List>
        <List>
        <Link to="/skills" className={classes.link}>
          <ListItem button key="skills">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
              <ListItemText primary="Habilidades" />
            </ListItem>
          </Link>
        </List>
        <List>
        <Link to="/comments" className={classes.link}>
          <ListItem button key="comments">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
              <ListItemText primary="Comentários" />
            </ListItem>
          </Link>
        </List>
        <List>
        <Link to="/informations" className={classes.link}>
          <ListItem button key="informations">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
              <ListItemText primary="Informações" />
            </ListItem>
          </Link>
        </List>
        <List>
          <ListItem button key="contact">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
              <Link to="/contact" className={classes.link}>
                <ListItemText primary="Contato" />
              </Link>
          </ListItem>
        </List>
        <Divider />
        <br />
        <Typography paragraph align="center">
          2021
        </Typography>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />  
      </main>
    </div>
  );
}
