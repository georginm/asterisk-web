import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Endpoints from '../pages/Endpoints';
import EndpointList from '../pages/Endpoints/list';

import Auths from '../pages/Auths';
import AuthsList from '../pages/Auths/list';

import Aors from '../pages/Aors';
import AorsList from '../pages/Aors/list';

import Queues from '../pages/Queue';
import QueueList from '../pages/Queue/list';

import QueueMembers from '../pages/QueueMembers';
import QueueMembersList from '../pages/QueueMembers/list';

import Branches from '../pages/Branches';
// import BranchesList from '../pages/Branches/list';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Branches} />
        {/* <Route path="/ramais" exact component={BranchesList} /> */}

        <Route path="/aors" exact component={Aors} />
        <Route path="/aors/list" exact component={AorsList} />
        <Route path="/aors/create" exact component={Aors} />
        <Route path="/aors/update/:id" exact component={Aors} />
        <Route path="/aors/delete/:id" exact component={Aors} />

        <Route path="/auths" exact component={Auths} />
        <Route path="/auths/list" exact component={AuthsList} />
        <Route path="/auths/create" exact component={Auths} />
        <Route path="/auths/update/:id" exact component={Auths} />
        <Route path="/auths/delete/:id" exact component={Auths} />

        <Route path="/endpoints" exact component={Endpoints} />
        <Route path="/endpoints/list" exact component={EndpointList} />
        <Route path="/endpoints/create" exact component={Endpoints} />
        <Route path="/endpoints/update/:id" exact component={Endpoints} />
        <Route path="/endpoints/delete/:id" exact component={Endpoints} />

        <Route path="/queues" exact component={Queues} />
        <Route path="/queues/list" exact component={QueueList} />
        <Route path="/queues/create" exact component={Queues} />
        <Route path="/queues/update/:id" exact component={Queues} />
        <Route path="/queues/delete/:id" exact component={Queues} />

        <Route path="/queuemembers" exact component={QueueMembers} />
        <Route path="/queuemembers/list" exact component={QueueMembersList} />
        <Route path="/queuemembers/create" exact component={Queues} />
        <Route path="/queuemembers/update/:id" exact component={Queues} />
        <Route path="/queuemembers/delete/:id" exact component={Queues} />
    </Switch>
);

export default Routes;
