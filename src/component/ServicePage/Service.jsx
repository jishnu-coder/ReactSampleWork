import React from 'react';
// import info from './information'
import { Grid } from '@material-ui/core';
import Cards from './Cards'
import {connect} from 'react-redux';
const Service = (props) => {
  const style={
    marginTop:50
  }
const newStyle={
  marginTop:50,
  marginBottom:50
}
  console.log(props.info);
  return <>

          <Grid style={style} container  >

                  {props.info.map((item) => {return (
                    <Grid alignitem='center' item xs={4} style={newStyle}  >
                    <div >
                    <Cards
                          key={item.id}
                          id={item.id}
                          desc={item.desc}
                          job={item.service}
                          img={item.img}
                          />
                    </div>
                   </Grid>
                  )})}

         </Grid>
  </>
}
const mapStateToProps=(state) => {
  return {info:state.info} ;
}

export default connect(mapStateToProps)(Service);
