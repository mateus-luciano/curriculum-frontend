import { 
  Grid,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';

export default () => {
  document.title = 'Qualidades - Curriculum Mateus Luciano Silva'

  const classes = useStyles();

  return(
    <div>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Typography 
            variant="h3"
            className={classes.title}
          >
            Qualidades
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph className={classes.text}>
            Proatividade
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph className={classes.text}>
            Organização
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph className={classes.text}>
            Criatividade
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph className={classes.text}>
            Comunicação
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph className={classes.text}>
            Colaboração
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph className={classes.text}>
            Receptividade a feedbacks
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph className={classes.text}>
            Inovação
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph className={classes.text}>
            Mente analítica
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}