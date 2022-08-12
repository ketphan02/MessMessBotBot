import express, { Request, Response } from "express";

import {
  starting,
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  six01,
  seven,
} from "../stages";

interface UserInfo {
  user_id: string;
  arr: string[];
}

export const title_arr: UserInfo[] = [];

/**
 * @description POST Method.
 * @param app From the webhook function.
 */
const POST = (app: express.Express) => {
  app.post("/", (req: Request, res: Response) => {
    const body = req.body;

    if (body.object === "page") {
      if (body.entry && body.entry.length <= 0) return;

      body.entry.forEach((entry: { messaging: [] }) => {
        entry.messaging.forEach(
          async (event: {
            sender: { id: string };
            recipient: { id: string };
            timestamp: Date;
            postback?: { title: string; payload: string };
            message?: { text: string };
          }) => {
            const sender_id: string = event.sender.id;

            if (event.postback) {
              const data: { title: string; payload: string } = event.postback;
              if (data.payload === "GET_STARTED_PAYLOAD") {
                await starting(sender_id);
              } else if (data.payload === "STEP 0") {
                await zero(sender_id, data.title);
              } else if (data.payload === "STEP 1") {
                await one(sender_id, data.title);
              } else if (data.payload === "STEP 2") {
                await two(sender_id, data.title);
              } else if (data.payload === "STEP 3") {
                await three(sender_id, data.title);
              } else if (data.payload === "STEP 4") {
                await four(sender_id, data.title);
              } else if (data.payload === "STEP 5") {
                await five(sender_id, data.title);
              } else if (data.payload === "STEP 6") {
                await six(sender_id, data.title);
              } else if (data.payload === "STEP 6.1") {
                await six01(sender_id, data.title);
              } else if (data.payload === "STEP 7") {
                await seven(sender_id, data.title);
              }

              console.log(title_arr);
            } else if (event.message) return;
          }
        );
      });
    }

    res.sendStatus(200);
  });
};

export default POST;
