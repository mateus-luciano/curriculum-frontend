import { 
  Grid,
  Typography,
} from '@material-ui/core';

export default () => {
  return(
    <div>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Typography variant="h3">
            Qualidades
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph>
            Proatividade
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph>
            Organização
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph>
            Criatividade
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph>
            Comunicação
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph>
            Colaboração
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph>
            Receptividade a feedbacks
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph>
            Inovação
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph>
            Mente analítica
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}