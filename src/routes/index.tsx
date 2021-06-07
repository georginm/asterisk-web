import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Endpoints from '../pages/Endpoints';
import list from '../pages/Endpoints/list';
import Auths from '../pages/Auths';
import Aors from '../pages/Aors';
import AorsCreate from '../pages/Aors/aorsCreate';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/aors" exact component={Aors} />
        <Route path="/aors/list" exact component={Aors} />
        <Route path="/aors/create" exact component={AorsCreate} />
        <Route path="/aors/update/:id" exact component={Aors} />
        <Route path="/aors/delete/:id" exact component={Aors} />

        <Route path="/auths" exact component={Auths} />
        <Route path="/auths/list" exact component={Auths} />
        <Route path="/auths/create" exact component={Auths} />
        <Route path="/auths/update/:id" exact component={Auths} />
        <Route path="/auths/delete/:id" exact component={Auths} />

        <Route path="/endpoints" exact component={Endpoints} />
        <Route path="/endpoints/list" exact component={list} />
        <Route path="/endpoints/create" exact component={Endpoints} />
        <Route path="/endpoints/update/:id" exact component={Endpoints} />
        <Route path="/endpoints/delete/:id" exact component={Endpoints} />
    </Switch>
);

export default Routes;
