
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Home from './Home';
import NgoData from './Ngo';
import Footer from './Footer';

const Routes = () => {
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <div>
                            <Switch>
                                  <Route path="/home"> <Home /> </Route>
                                <Route path="/ngo"> <NgoData /> </Route>

                            </Switch>
                        </div>
                       
                    </div>
                     <Footer />
                </Router>
            </div>
        );
    }


export default Routes;
