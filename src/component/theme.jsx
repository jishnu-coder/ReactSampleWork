import { createMuiTheme } from '@material-ui/core/styles';
// import {blue} from '@material-ui/core/colors';
import {yellow} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary:yellow ,
    action:{hoverOpacity:0.5}
  },
});

export default theme;
