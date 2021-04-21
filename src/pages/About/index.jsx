import { 
  Grid,
  Typography,
} from '@material-ui/core';
import useStyles from './styles';

export default () => {
  document.title = 'Sobre - Curriculum Mateus Luciano Silva'

  const classes = useStyles();
  
  return(
    <div className={classes.root}>
      <Grid 
        container 
        xs={12}
      >
        <Grid 
          item 
          xs={12}
        >
          <Typography 
            variant="h3"
            className={classes.title}
          >
            Sobre
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography 
            paragraph 
            className={classes.text}
          >
            Me chamo Mateus, tenho 22 anos de idade, moro no município de Parobé, ao leste do estado do Rio Grande do Sul.
          </Typography>
          <Typography 
            paragraph
            className={classes.text}
          >
            Tinha 13 anos quando tive o meu primeiro contato com a programação, era muito jovem, curioso e sempre querendo aprendendo algo novo. Nessa idade comecei a participar de algumas comunidades de bate-papo, conhecidas pelos usuários como comunidades wap, durante algum tempo fiquei frequentando essa comunidades e acabei fazendo amigos no Brasil inteiro, muitos já visitei, outros ainda irei.
          </Typography>
          <Typography 
            paragraph
            className={classes.text}
          >
            Alguns desses amigos eram programadores, muitos deles desenvolviam e comercializavam comunidades iguais aquelas que nós participavamos, foi quando eu comecei a ter interesse por aquilo, na epóca não sabia nada, mas mesmo assim fiz alguns projetinhos, utilizava uma plataforma chamada Wapka, era todo em inglês e bem complicado de mexer, até hoje eu não sei direito como ele funcionava, mas cheguei a desenvolver simples projetos com HTML e CSS, que na época aprendi vendo scripts em PHP dos meus amigos desenvolvedores.
          </Typography>
          <Typography 
            paragraph
            className={classes.text}
          >
            Desde então sempre gostei de programação, tive uma adolescência um pouco agitada, mudando para outros estados e isso acabou afetando que eu começasse a estudar sobre programação quando ainda jovem.
          </Typography>
          <Typography
            paragraph
            className={classes.text}
          >
            Hoje com 22 anos, eu tenho a certeza que esta é a carreira que eu quero seguir, estou sempre estudando e colando em prática o que vou aprendendo, e estou ansioso para entrar no mercado de trabalho. 
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}