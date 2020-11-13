import React from 'react';
import Text from './TextField';
import CloseIcon from '@material-ui/icons/Close';

import {Button,Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom'


const Login = (props) => {
const style={
  position:'absolute',
  right:0,
  top:0,

};
    const textStyle = {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        fontSize: 15,
        justifyContent: 'center'
    };

    const tstyle = {
        color: '#e8e3d5'
    };
  return(
       <div>
       <div id="formbox" className={props.state?"styleAfter":null}>
       <Button onClick={props.method} style={style}><CloseIcon /></Button>
       <div className="box " style={{marginTop:25}}>
       <form >
       <Text type="text" label="User Name" style={tstyle} />
        <br />
        <Text type="password" label="Password" style={tstyle} />
       <button type="submit" ><Button size='large' variant='contained' color='primary'>Log in</Button> </button>

       </form>
       <Typography style={textStyle} > Not registerd ? <NavLink to="/signup" onClick={props.method}> Create a Account  </NavLink> </Typography>
       </div>
      </div>
    </div>)
}
export default Login;
