import React from 'react';
import {Typography} from '@material-ui/core';
function Post (props) {
  console.log(props.location.state.data);
  const data=props.location.state.data;
  const style={
    backgroundImage:'url('+data.img+')'
  }
  const style1={
    fontFamily: 'Tienne, serif',
    fontSize:40
  }
  return  <div>
          <Typography style={style1} > {data.job} </Typography>
         <div className="imageContainer" style={style}>

           </div>
  </div>
}

export default Post;
