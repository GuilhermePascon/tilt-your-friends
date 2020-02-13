import * as express from "express";
import { log } from "util";

export abstract class Controller {

    public req: express.Request;
    public res: express.Response;

    constructor(req: express.Request, res: express.Response) {
        this.req = req;
        this.res = res;
    }
}
