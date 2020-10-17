import express, { Request, Response } from 'express';
import { GetStartedButton } from '../utils/persistent_menu';

export default function setup(app: express.Express)
{
    app.get("/setup", (req: Request, res: Response) =>
    {
        GetStartedButton(res);
    })
}