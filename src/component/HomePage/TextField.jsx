import React from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from '../makeStyles';

const style={
  marginBottom:20,
  
  backgroundColor:'transparent',
  borderRadius:10
};


  export default function Text(props) {

      const classes = useStyles();

    return <TextField  onChange={props.method} name={props.name} style={style}  className={classes.textfield}   variant='filled' required placeholder={props.label} type={props.type} label={props.label}  fullWidth  />;

  }
