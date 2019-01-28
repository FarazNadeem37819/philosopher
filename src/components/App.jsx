import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Banner from './Banner';
import Services from './services';
import Services1 from './Services1';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Data from './data.js';






class App extends React.Component{
    state={
        data:Data,
    }
    render() {
        
        return (
            <div>
               <Header all={Data.header}/>
               <Banner />
                <Services />
                <Services1 />
                <Testimonials />
                {/* <Route exact path='/'  component={Home}/>
                <Route path='/about' component={About}/>
                 */}
                
                <Footer />
            </div>
        )
    }
};


export default App;