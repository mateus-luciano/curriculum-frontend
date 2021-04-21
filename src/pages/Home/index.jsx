import React from 'react';
import {
  Avatar,
  Typography,
  Grid,
  Link,
 } from '@material-ui/core';
import useStyles from './styles';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import { SiGmail, SiApple } from "react-icons/si";

export default () => {
  document.title = 'Home - Curriculum Mateus Luciano Silva'
  const classes = useStyles();

  return(
  <div className={classes.root}>
      <Grid 
        container 
        xs={12} 
        spacing={10}
        className={classes.main} 
        direction="row"
        alignItems="center"
      >
        <Grid 
          item xs={3} 
          // spacing={10}
        >
          <Avatar 
            alt="Mateus Luciano Silva" 
            src="https://instagram.fccm7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83708444_2613659212178909_589697605286494208_n.jpg?tp=1&_nc_ht=instagram.fccm7-1.fna.fbcdn.net&_nc_ohc=RHKrUtPSDF4AX80HUeu&edm=ABfd0MgBAAAA&ccb=7-4&oh=29546d971439724bdb004c38941418db&oe=60A1F675&_nc_sid=7bff83" 
            className={classes.large} 
          />
        </Grid>
        <Grid 
          container 
          item 
          xs={8}
        >
          <Grid item>
            <Typography 
              component="h2" 
              variant="h2"
              className={classes.textMain}
            >
              Mateus Luciano Silva
            </Typography>
          </Grid>
          <Grid item>
            <Typography 
              paragraph
              className={classes.span}
              >
              Estudante desenvolvimento web full stack
            </Typography>
          </Grid>
        </Grid>
        <Grid 
        container 
        xs={12}
        spacing={1}
        >
      <Grid 
        container 
        item 
        xs={9} 
        align="center"
      >
      <Grid 
        item 
        xs={1}>
        </Grid>
        <Grid item>
          <SiGmail style={{ fontSize: 20, marginRight: '.3em' }} /> 
        </Grid>
        <Grid 
          item 
          xs={1}
        >
          <Typography paragraph>
            teeusdm@gmail.com
          </Typography>
        </Grid>
      </Grid>
        <Grid 
          container 
          item 
          xs={2} 
          align="center"
        >
          <Grid item>
            <WhatsAppIcon style={{ color: "green" }} />
          </Grid>
          <Grid item>
            <Typography paragraph>
              (45) 9 9143-9141
            </Typography>
          </Grid>
        </Grid>
        <Grid 
          container 
          item 
          xs={9} 
          direction="row"
        >
          <Grid item xs={1}></Grid>
          <Grid item>
              <SiApple style={{ fontSize: 20, marginRight: '.3em' }} />
            </Grid>
            <Grid item>
            <Typography paragraph>
              teeusdm@icloud.com
            </Typography> 
            </Grid>
          </Grid>
        </Grid>
      <Grid 
        container 
        xs={12} 
        spacing={1} 
        justify="center"
      >
        <Grid item>
          <Link 
            href="https://www.linkedin.com/in/mateus-luciano-850ba61a4" 
            target="_blank"
            rel="noreferrer"
            >
            <LinkedInIcon style={{ fontSize: 40 }} />
          </Link>
        </Grid>
        <Grid item>
        <Link 
            href="https://www.instagram.com/teeusdm" 
            target="_blank"
            rel="noreferrer"
            >
            <InstagramIcon style={{ fontSize: 40 }} />
          </Link>
        </Grid>
        <Grid item>
        <Link 
            href="https://github.com/teeusdm" 
            target="_blank"
            rel="noreferrer"
            >
            <GitHubIcon style={{ fontSize: 40 }} />
          </Link>
        </Grid>
        <Grid item>
        <Link 
            href="https://web.telegram.org/#/im?p=@teeusdm" 
            target="_blank"
            rel="noreferrer"
            >
            <TelegramIcon style={{ fontSize: 40 }} />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  </div>
  );
}
