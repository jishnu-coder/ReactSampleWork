import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './HomePage/Home';
import About from './About';
import Service from './ServicePage/Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Signup from './Signup';
import Post from './Post'
const App = () =>{



  return <div className="whole" style={{opacity:1}}>
         <Navbar />
         <Switch>
         <Route path ="/" exact component={Home} />
         <Route path ="/about" exact component={About} />
         <Route path ="/contact" exact component={Contact} />
         <Route path ="/Service" exact component={Service} />
         <Route path='/signup' exact component={Signup} />
        <Route path='/Service/:post_id' exact component={Post} />
         </Switch>
       </div>
}


export default App;
