import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Endpoints from '../pages/Endpoints';
import Auths from '../pages/Auths';
import Aors from '../pages/Aors';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/auths" component={Auths} />
        <Route path="/endpoints" component={Endpoints} />
        <Route path="/aors" component={Aors} />
    </Switch>
);

export default Routes;
