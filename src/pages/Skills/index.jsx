import Skills from '../../components/Skills';
import { Grid } from '@material-ui/core';
import theme from '../../config/theme';
import { 
  DiBootstrap, 
  DiGit, 
  DiGithubBadge,
  DiJsBadge,
  DiMongodb,
  DiNpm,
  DiNodejsSmall,
  DiPostgresql,
  DiReact,
  DiSass,
  DiWindows,
  DiHtml5,
  DiHeroku,
  DiCss3,
  DiSqllite
 } from "react-icons/di";

import { FaYarn } from "react-icons/fa";

export default () => {
  document.title = 'Habilidades - Curriculum Mateus Luciano Silva'

  return(
    <div>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Skills 
            title="FRONTEND" 
            icons={[ 
              <DiJsBadge style={{ fontSize: 40, color: theme.palette.primary }} />, 
              <DiHtml5 style={{ fontSize: 40, color: theme.palette.primary }} />,
              <DiCss3 style={{ fontSize: 40, color: theme.palette.primary }} />, 
              <DiReact style={{ fontSize: 40, color: theme.palette.primary }} />, 
              <DiSass style={{ fontSize: 40, color: theme.palette.primary }} />, 
              <DiBootstrap style={{ fontSize: 40, color: theme.palette.primary }} />, 
            ]}
          />
          <Skills 
            title="BACKEND" 
            icons={[
              <DiNodejsSmall style={{ fontSize: 40, color: theme.palette.primary }} />,
            ]} 
          />
          <Skills 
            title="DATABASE" 
            icons={[
              <DiPostgresql style={{ fontSize: 40, color: theme.palette.primary }} />, 
              <DiSqllite style={{ fontSize: 40, color: theme.palette.primary }} />, 
              <DiMongodb style={{ fontSize: 40, color: theme.palette.primary }} />,
            ]} 
          />
          <Skills 
            title="SERVER" 
            icons={[
              <DiWindows style={{ fontSize: 40, color: theme.palette.primary }} />, 
              <DiHeroku style={{ fontSize: 40, color: theme.palette.primary }} />, 
            ]} 
          />
          <Skills 
            title="VERSIONING" 
            icons={[
              <DiGit style={{ fontSize: 40, color: theme.palette.primary }} />,
              <DiGithubBadge style={{ fontSize: 40, color: theme.palette.primary }} />,
            ]} 
          />
          <Skills 
            title="PACKAGE MANAGER" 
            icons={[ 
              <DiNpm style={{ fontSize: 40, color: theme.palette.primary, marginRight: '.2em' }} />, 
              <FaYarn style={{ fontSize: 40, color: theme.palette.primary }} />,
            ]} 
          />
        </Grid> 
      </Grid>
    </div>
  );
}