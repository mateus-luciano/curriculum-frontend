import NavTabs from '../../components/NavTabs';
import InfoComponents from '../../components/InfosComponents';
import { 
  Grid,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';

export default () => {
  const classes = useStyles();

  return(
    <div>
    <NavTabs tableOne={
      <div>
        <Grid 
          container
          xs={12}
        >
          <Grid item xs={12}>
            <InfoComponents 
              title="Ensino fundamental" 
              text="E.M.E.F. João Muck" 
              span="Parobé - RS" 
            />
            <InfoComponents 
              title="Ensino médio" 
              text="Colégio Anglo Americano Vila A" 
              span="Foz do Iguaçu - PR" 
            />
            <InfoComponents 
              title="Desenvolvimento web full-stack" 
              text="Growdev" 
              span="Campo Bom - RS" 
            />
          </Grid>
        </Grid>
      </div>
    } tableTwo={
      <div>
        <Grid 
          container
          xs={12}
        >
          <Grid item xs={12}>
            <InfoComponents 
              title="RG Publicidade" 
              text="Publicidade Digital" 
              span="São Leopoldo - RS" 
            />
            <InfoComponents 
              title="Antonella"
              text="Auxiliar de produção" 
              span="Igrejinha - RS" 
            />
          </Grid>
        </Grid>
      </div>
    } 
  />
  </div>
  );
}