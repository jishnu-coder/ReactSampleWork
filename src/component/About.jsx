import React,{useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
const About = (props) => {
  const [data,setData]=useState({
    lon:"",
    lat:""
  })
  axios.get("http://localhost:3001")
  .then(res => {
                  console.log(res.data)
                  setData(res.data.coord)
                  // console.log(data);
                  })
  .catch(error => console.log(error))
  // console.log(props.posts);
  return <>
  <h1> about </h1>
  <img src="https://wallpapercave.com/wp/acHJ2Wr.jpg"
             height="150px" width="105px" alt="nothing to show"  />

  <p>{data.lon}</p>
  </>
}
const mapStateToProps=(state) => {
  return {posts:state.posts}
}
export default connect(mapStateToProps)(About);
