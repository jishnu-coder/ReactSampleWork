import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {Link } from 'react-router-dom'
const useStyles = makeStyles({
  root: {

    maxWidth: 345,
    margin:'0px auto',
    height:400,
    backgroundColor:'#e6f590',
    boxShadow: '0 0 10px -1px rgba(255,255,255,0.2)',
    '&:hover': {
       boxShadow: '0 0 10px -1px rgba(255,255,255,0.9)'
   },

  },

});

export default function Cards(props) {
  console.log(props.job);
  const postData={
    id:props.id,
    job:props.job,
    desc:props.desc,
    img:props.img
  };
  console.log(postData);
  const classes = useStyles();
 const style={
   height:120
 }
 const newStyle={
     '&:hover': {textDecoration:'none'},
     color:'black'

 }
 console.log(props.img);
  return (
    <div >
    <Card className={classes.root}>
    <Link className="link" to ={{pathname: "/Service/"+ props.job ,state:{data:postData}}}>
      <CardActionArea>
      <div className="serviceImage">
        <CardMedia
          component="img"
          alt={props.img}
          height="140"
          image={props.img}
          title="job"
        />
        </div>
        <CardContent >
          <Typography style={newStyle}  gutterBottom variant="h5" component="h2">
          {props.job}
          </Typography>
          <Typography style={style} variant="body2" color="textSecondary" component="p">
          {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
       </Link>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
