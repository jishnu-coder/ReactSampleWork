import React,{useState} from 'react';
import {Button} from '@material-ui/core';
import useStyles from '../makeStyles';
import {connect} from 'react-redux';
import Login from './Login'

const LoginButton = (props) => {
   console.log(props);
  const[isClick,setClick]=useState(false)
  const classes = useStyles();

   function handleClick(){
    console.log("clicked");
      setClick(!isClick);
     props.add(isClick);

  }
  console.log(props.posts);
  return <>
             <Button id="btn" onClick={handleClick} className={classes.buttonStyle} style={isClick?{opacity:0.4,'border':0,"pointerEvents":'none'}:null} color="primary" variant='contained' size="large">Log in </Button>
              {isClick ? <Login state={isClick} method={handleClick}/> :null}

  </>
}
const mapStateToProps=(state) => {
  return {posts:state.posts}
}

const addStateToProps =(dispatch) => {
  return{
    add : (isClick) => {dispatch({type:'add_post',isClick:isClick})}
  }
}
export default connect(mapStateToProps,addStateToProps)(LoginButton);
