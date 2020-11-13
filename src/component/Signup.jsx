import React,{useState} from 'react';
import Text from './HomePage/TextField';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Button,Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom'
import useStyles from './makeStyles';
import {connect} from 'react-redux';

const Signup = (props) => {
  // console.log("prop");
  // console.log(props);

  const [data,setData]=useState({
    fname:"",
    lname:"",
    email:"",
    password:""
  })

const [pass,setPass]=useState(true);
// console.log(props.userData);
function handleChange(e){
  console.log("change");
  const {name,value}=e.target;
  setData(prevValue => {return {...prevValue,
                                  [name]:value}});
}
function checkConfirm(e){

  // console.log(document.getElementById('confirm').value);
  var passkey=document.getElementById('confirm').value;
  if (passkey === data.password){
    // console.log("match");
    props.add(data);
    setPass(true)
  }
  else {
    // console.log("not match");
    setPass(false)
    document.getElementById('confirm').value="";
  }





}
function handleSubmit(e){

  axios.post("http://localhost:3001/id",data)
  .then(res => console.log("res"))
  .catch(error => console.log("error"))
  setData({fname:"",lname:"",email:"",password:""});
  e.preventDefault();
}
const classes = useStyles();

const textStyle={

  display:'flex',
  flexDirection:'row',
  fontSize:15,
  justifyContent:'center',
  paddingBottom:30
}
const style={
  fontSize:80,
  marginBottom:10,


};
const style1={
  fontSize:40,
  color:'#293875',
  marginTop:10,


}
const textfieldStyle ={
  marginRight:3,

}

  return(

       <div className="signupform">
       <Typography style={style1} > Sign Up Form </Typography>
       <form onSubmit={handleSubmit} >
       <AccountCircleIcon style={style}/>
       <div className="box">
            <Text type="text" label="First Name" method={handleChange} name="fname" />
            <Text type="text" label="Last Name" method={handleChange} name='lname' />
       </div>
       <Text type="email" label="E mail" method={handleChange} name='email'  />
        <div className="box">
       <TextField style={textfieldStyle} onChange={handleChange} className={classes.textfield} name='password'
                          variant="filled" required placeholder='Password'
                                           type='password' label='password' value={data.password}  />
      <TextField  className={classes.textfield} id="confirm"
                          variant="filled" required placeholder='Confirm Password'
                                          type='password' label='Confirm password'  />
        </div>
        {pass ? <div style={{height:25}} ></div> : <div   style={{color:'red',height:25}}> Password doesnot match </div>}

        <button onClick={checkConfirm} type={pass?'submit':'button'} >
                  <Button  size='large' variant='contained' color='primary'>Sign in</Button>
         </button>

       </form>
       <Typography style={textStyle} > Already registerd ? <NavLink to="/"> Please Log in  </NavLink> </Typography>
       </div>

    )
}
const mapStateToProps=(state) => {
  return {userData:state.userData}
}

const addStateToProps =(dispatch) => {
  return{
    add : (data) => {dispatch({type:'add_data',data:data})}
  }
}

export default connect(mapStateToProps,addStateToProps)(Signup);
