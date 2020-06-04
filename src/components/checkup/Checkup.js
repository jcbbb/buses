import React from 'react';
import Start from '../start/Start';
import Second from '../second/Second';
import Third from '../third/Third';
import Fourth from '../fourth/Fourth';
import Fifth from '../fifth/Fifth';
import Sixth from '../sixth/Sixth';
import { Switch, Route } from 'react-router-dom';


const Checkup = () => {
    return <>
        <Switch>
            <Route exact path="/checkup"><Start /></Route>
            <Route path="/checkup/2"><Second /></Route>
            <Route path="/checkup/3"><Third /></Route>
            <Route path="/checkup/4"><Fourth /></Route>
            <Route path="/checkup/5"><Fifth /></Route>
            <Route path="/checkup/6"><Sixth /></Route>
        </Switch>
    </>;
};

export default Checkup;
