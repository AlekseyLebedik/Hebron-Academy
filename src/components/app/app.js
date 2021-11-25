import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from '../main-page';
import Footer from '../footer';
import HebronNeedsJoinPage from '../hebron-needs-join-page';
import AboutUs from '../about-us';
import Error from '../error';
import News from '../news';
import Join from '../join';
import Learn from '../learn';
import Donations from '../donations';
import HebronOneHundred from '../hebron100';
import Navbar from '../navbar';

import './app.css';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path='/news/'>
                    <News/>
                </Route>
                <Route exact path='/'>
                    <MainPage/>
                </Route>
                <Route path='/about-us/'>
                    <AboutUs/>
                </Route>
                <Route path='/hebron-needs-join-page/'>
                    <HebronNeedsJoinPage/>
                </Route>
                <Route path='/join/'>
                    <Join/>
                </Route>
                <Route path='/education/'>
                    <Learn />
                </Route>
                <Route path='/donations/'>
                    <Donations/>
                </Route>
                <Route path='/hebron100/'>
                    <HebronOneHundred/>
                </Route>
                <Route path='/credentials/'>
                    <HebronNeedsJoinPage/>
                </Route>
                <Route path='*'>
                    <Error/>
                </Route>
            </Switch>
            
            <Footer/>
        </BrowserRouter>
    );
}
export default App;