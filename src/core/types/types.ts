export type PingServerResponse = {
    description: string;
    favicon: string;
    latency: number;
    players: {
        max: number;
        online: number;
        sample: Array<any>;
    };
    version: {
        name: string;
        protocol: number;
    };
};
