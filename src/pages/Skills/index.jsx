import Skills from '../../components/Skills';
import { Grid } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default () => {
  document.title = 'Habilidades - Curriculum Mateus Luciano Silva'

  return(
    <div>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Skills 
            title="FRONTEND" 
            icons={[ <MailIcon />, <MailIcon />, <MailIcon />, <AccountCircleIcon /> ]}
          />
          <Skills 
            title="BACKEND" 
            icons={[ <MailIcon />, <MailIcon />, <MailIcon />, <AccountCircleIcon /> ]} 
          />
          <Skills 
            title="DATABASE" 
            icons={[ <MailIcon />, <MailIcon />, <MailIcon />, <AccountCircleIcon /> ]} 
          />
          <Skills 
            title="SERVER" 
            icons={[ <MailIcon />, <MailIcon />, <MailIcon />, <AccountCircleIcon /> ]} 
          />
          <Skills 
            title="VERSIONING" 
            icons={[ <MailIcon />, <MailIcon />, <MailIcon />, <AccountCircleIcon /> ]} 
          />
          <Skills 
            title="PACKAGE MANAGER" 
            icons={[ <MailIcon />, <MailIcon />, <MailIcon />, <AccountCircleIcon /> ]} 
          />
        </Grid> 
      </Grid>
    </div>
  );
}