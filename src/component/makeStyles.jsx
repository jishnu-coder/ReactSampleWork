import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  typographyStyle:{

                    paddingTop:15,
                    paddingLeft:5,
                    color:"black",

                  },
  items:{
    fontFamily: 'Ranchers, cursive',
    marginLeft: 20,
    marginRight: 20,
    color: '#8f4351',
    fontSize:30

  },
  content:{
    // border:'1px solid black',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  explore:{
    height:400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    justify:'space-around',

  },
  textfield:{
    backgroundColor:'transparent',

  },
  image:{
    position:'absolute',
    top:0,
    left:0,
    objectFit: 'cover',
    width: '100%',
    height: '100%',
      borderRadius:5,
  },
  main:{
    marginTop:120,

  },
images:{
  marginTop:40,
  height:400,
  position:'relative',
  boxShadow:'-20px 20px 10px grey ',

},
  buttonStyle:{

  }

});

export default useStyles;
