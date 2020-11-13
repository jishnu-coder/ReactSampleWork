import React from 'react';
import {NavLink} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { ThemeProvider  } from '@material-ui/core/styles';
import useStyles from './makeStyles';
import {connect} from 'react-redux';
import theme from './theme';

const Navbar = (props) => {
  const classes = useStyles();
  const style={
    fontFamily: 'Pacifico, cursive',
    fontSize:50,
    color:'#73061a'
  }
  return(
  <>

  <nav  id="navigate" className={'navbar navbar-default  '+props.posts}>
    <div className="container-fluid">
    <Grid container  direction="row" >
        <Grid   item xs={3} >
       <div className="  navbar-header ">
              <a className="navlink navbar-brand" href="/">
              <div className="Icons">
               <img src="https://cdn1.vectorstock.com/i/thumb-large/76/05/letter-f-logo-vector-4957605.jpg" alt=" " />
                <ThemeProvider theme={theme}>
                   <Typography className={classes.typographyStyle } style={style} >FreeLan </Typography>
                 </ThemeProvider>
                 </div>
             </a>
     </div>
     </Grid>

    <Grid   item xs={9} >
     <div className="Icons">

     <NavLink className="navlink" style={{textDecoration:"none"}} activeStyle={{borderBottom: 'solid 3px #fff'}} exact to="/" >
         <div className={classes.items}>Home</div>
      </NavLink>
         <NavLink  className="navlink" style={{textDecoration:"none"}} activeStyle={{borderBottom: 'solid 3px #fff'}} to="/About" >
             <div className={classes.items}>About</div>
          </NavLink>
          <NavLink className="navlink" style={{textDecoration:"none"}} activeStyle={{borderBottom: 'solid 3px #fff'}} to="/Contact">
              <div className={classes.items}>Contact</div>
           </NavLink>
           <NavLink className="navlink" style={{textDecoration:"none"}}  activeStyle={{borderBottom: 'solid 3px #fff'}} to="/Service">
               <div className={classes.items}>Service</div>
            </NavLink>



      </div>
      </Grid>
      </Grid>

  </div>
</nav>


</>
)

}
const mapStateToProps=(state) => {
  return {posts:state.posts}
}
export default connect(mapStateToProps)(Navbar);
