
import React from "react";
import { Route,Switch } from 'react-router-dom';
import NavigationContainer from './NavigationContainer';
import ListViewContainer from './ListViewContainer';
import DetailedViewContainer from "./DetailedViewContainer";
import AboutView from './AboutView';
import LoadingView from './LoadingView'
import NotFoundView from './NotFoundView';



const App = () => (
    <div className="app">
        <NavigationContainer />
        <div className="container">
            <div className="container-inner">
             <LoadingView />
                <Switch>
                <Route exact path="/" component={ListViewContainer} />
                <Route  path="/beer" component={DetailedViewContainer} />
                <Route  path="/about" component={AboutView} />
                <Route component={NotFoundView} />
                </Switch>
            </div>
         </div>
    </div>

);

export default App;
