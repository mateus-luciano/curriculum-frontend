import NavTabs from '../../components/NavTabs';
import InfoComponents from '../../components/InfosComponents';
import { 
  Grid,
} from '@material-ui/core';

export default () => {
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
    } titleOne="Formação" tableTwo={
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
    titleTwo="Experiência" 
  />
  </div>
  );
}