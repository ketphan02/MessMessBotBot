import express, { Request, Response } from 'express';
import { GetStartedButton } from '../../utils/persistent_menu';


/**
 * @description POST Method.
 * @param app From the webhook function.
 */
export default function POST(app: express.Express)
{
    app.post("/", (req: Request, res: Response) =>
    {
        
    })
}