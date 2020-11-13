import React from 'react';
import useStyles from '../makeStyles';
import { Grid } from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import LoginButton from './LoginButton';
import Image from "./image/homepage.jpg";
import info from '../ServicePage/information';
import Cards from '../ServicePage/Cards';

const Home = (props) => {
  const style={
    marginTop:40
  }
const captionStyle={
  fontFamily: 'Permanent Marker, cursive',
  fontSize:70,
  color:'#3b3938'
}

const gridstyle={
  marginTop:80,
  marginBottom:40,
  // marginLeft:40
}
const typeStyle={
   textAlign:'center',
  //  paddingTop:'50%'
  verticalAlign:'middle'
}

  const classes = useStyles();
  console.log(props.info);
  return    <div className="super">
              <div className="parent">

            <Grid container className={props.posts} direction="row" >
            <Grid className={classes.explore}  item xs={6} sm={6} md={6} lg={6}>
                <Typography className={classes.caption} style={captionStyle} align='center'>Be Your Own Boss</Typography>
                <Typography className={classes.caption} align='center'>Get started by Signing !!!</Typography>


            </Grid>


              <Grid className={classes.images} item style={style} xs={6} sm={4} md={4} lg={4}>

                        <img className={classes.image} src={Image} alt="" />
                </Grid>
                  <Grid  item xs={1} sm={1} md={1} lg={1}> </Grid>
                      </Grid>
                    <LoginButton className="new"/>

                    </div>

                    <Grid container className={props.posts} direction="row" >
                        <Grid item style={gridstyle} xs={6} sm={6} md={6} lg={6} >
                        
                              <img src={props.info[0].img}  />
                              
                        </Grid>
                        <Grid item style={gridstyle} xs={6} sm={6} md={6} lg={6} >
                                  <Typography style={typeStyle}>{props.info[0].desc}</Typography>
                        </Grid>
                    </Grid>
                    </div>

}

const mapStateToProps=(state) => {
  return {posts:state.posts,info:state.info}
}


export default connect(mapStateToProps)(Home);
