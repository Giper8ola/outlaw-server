export interface User {
    name: string;
    password: string;
    email: string;
    uuid?: string;
    accessToken?: string;
    serverID?: string;
}
