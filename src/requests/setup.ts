import express, { Request, Response } from 'express';
import { GetStartedButton } from '../utils/persistent_menu';


/**
 * @description Initialize the Get Started button in Messenger Chat.
 * @param app From the webhook function.
 */
export default function setup(app: express.Express)
{
    app.post("/setup", (req: Request, res: Response) =>
    {
        GetStartedButton(res);
    })
}