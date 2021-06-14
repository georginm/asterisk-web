export interface Auths {
    id: string;
    auth_type: string;
    username: string;
    password: string;
}

export interface Endpoints {
    id: string;
    transport: string;
    context: string;
    allow: string;
    disallow: string;
    direct_media: string;
    aors: string;
    auth: string;
}

export interface Aors {
    id: string;
    contact?: string;
    max_contacts: string;
}

export interface Queues {
    name: string;
    musiconhold: string;
    timeout: number;
    ringinuse: string;
    monitor_type: string;
    strategy: string;
    joinempty: string;
    leavewhenempty: string;
}

export interface QueueMembers {
    queue_name: string;
    interface: string;
    membername: string;
    state_interface: string;
    penalty: string;
    paused: number;
    wrapuptime: number;
}

export interface Branches {
    id: string;
    transport: string;
    context: string;
    disallow: string;
    allow: string;
    direct_media: string;
    aors: string;
    contact?: string;
    max_contacts: number;
    auth: string;
    auth_type: string;
    password: string;
    username: string;
    rewrite_contact: string;
    rtp_symmetric: string;
    force_rport: string;
}

export interface Extensions {
    id: string;
    context: string;
    exten: string;
    priority: 1;
    app: string;
    appdata: string;
}
