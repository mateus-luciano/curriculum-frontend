import React from 'react';
import clsx from 'clsx';

import { Link } from 'react-router-dom';

import { useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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

import { BsInfoSquare } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { SiAboutDotMe } from "react-icons/si";
import { FaRegComments } from "react-icons/fa";
import { AiOutlineBlock } from "react-icons/ai";
import { FiAward } from "react-icons/fi";

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';

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
        <List>
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HiOutlineHome style={{ fontSize: 30 }} />
            </ListItemIcon>
              <ListItemText primary="Home" />
          </ListItem>
          </Link>
        </List>
        <List>
        <Link to="/about" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <SiAboutDotMe style={{ fontSize: 30 }} />
            </ListItemIcon>
              <ListItemText primary="Sobre" />
          </ListItem>
          </Link>
        </List>
        <List>
        <Link to="/informations" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <BsInfoSquare style={{ fontSize: 30 }} />
            </ListItemIcon>
              <ListItemText primary="Informa????es" />
            </ListItem>
          </Link>
        </List>
        <List>
        <Link to="/skills" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <FiAward style={{ fontSize: 30 }} />
            </ListItemIcon>
              <ListItemText primary="Habilidades" />
            </ListItem>
          </Link>
        </List>
        <List>
        <Link to="/qualities" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <AiOutlineBlock style={{ fontSize: 30 }} />
            </ListItemIcon>
                <ListItemText primary="Qualidades" />
            </ListItem>
          </Link>
        </List>
        <List>
        <Link to="/comments" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <FaRegComments style={{ fontSize: 30 }} />
            </ListItemIcon>
              <ListItemText primary="Coment??rios" />
            </ListItem>
          </Link>
        </List>
        <List>
        <Link to="/contact" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
                <ListItemText primary="Contato" />
            </ListItem>
          </Link>
        </List>
        <Divider />
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
