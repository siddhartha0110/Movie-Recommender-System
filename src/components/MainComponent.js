import React,{Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import MovieSearch from './MovieSearchComponent';
import Contact from './ContactComponent';
import About from './AboutUsComponent';
import Footer from './FooterComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
class Main extends Component{

  constructor(props){
    super(props);
    this.state={}
  }
 
  render(){
    
    const HomePage=()=>{
      return(
        <Home/>
        )
    }
    

    return (
      <div className="App"> 
      <Header/>
      <Switch>
        <Route path="/home" component={HomePage}/>
        <Route exact path="/movies" component={MovieSearch}/>
        <Route exact path="/contactus" component={Contact}/>
        <Route exact path="/aboutus" component={About}/>
        <Redirect to="/home"/>
      </Switch>
      <Footer/>
      </div>
    )
  }
}

export default Main;