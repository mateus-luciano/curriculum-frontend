import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale';
import 'typeface-roboto';

export default createMuiTheme(
  {
    palette: {
      primary: {
        main: '#101522'
      },
    background: {
      default: '#f0f0f7',
    }
  },
    typography: {
      fontFamily: 'Roboto',
      fontSize: 16,
    },
  },
  ptBR
);